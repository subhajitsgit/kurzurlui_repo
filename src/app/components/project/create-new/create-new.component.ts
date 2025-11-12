import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLinksService } from '../../links/links.service';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { QrCodesService } from '../../qr-codes/qr-codes.service';
import { UserLink } from '../../links/link.model';
import { EditLinkQrParams, EditMode } from '@shared/enums';
import { GetQRResponseDto } from '@dto/qr/get-qr-list-response.dto';
@Component({
  selector: 'app-create-new',
  standalone: true,
  imports: [NgbNavModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
  providers: [UserLinksService, QrCodesService],
})
export class CreateNewComponent implements OnInit, OnDestroy {
  public active = 1;
  public selectedCityId: number = 0;
  public linkForm: FormGroup;
  public qrForm: FormGroup;
  public userId: number;
  public qrBase64ForImg: string | null;
  public editMode: EditMode | null;
  public editLinkId: string | null;
  public editQrCodeId: string | null;

  private _destroy$ = new Subject<void>();
  private _qrBase64: string;

  private readonly DOMAIN_DEFAULT_VALUE: string;

  constructor(
    private userLinksService: UserLinksService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _qrCodesService: QrCodesService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.userId = 1;
    this.DOMAIN_DEFAULT_VALUE = '1';
    this.qrBase64ForImg = null;
    this._qrBase64 = '';
    this.editMode = null;
    this.editLinkId = null;
    this.editQrCodeId = null;

    this.linkForm = this._formBuilder.group({
      mainUrl: ['', [Validators.required]],
      domain: [this.DOMAIN_DEFAULT_VALUE, [Validators.required]],
      title: ['', [Validators.required]],
    });
    this.qrForm = this._formBuilder.group({
      mainUrl: [''],
      title: ['', [Validators.required]],
    });
  }

  public ngOnInit(): void {
    this._observeQrForm();
    this._checkEditMode();
  }

  private _checkEditMode(): void {
    this._activatedRoute.queryParams.pipe(takeUntil(this._destroy$)).subscribe((params) => {
      const navigation = this._router.getCurrentNavigation();
      const data: UserLink | GetQRResponseDto | undefined = navigation?.extras?.state?.[EditLinkQrParams.Data] as
        | UserLink
        | GetQRResponseDto
        | undefined;
      const historyState: UserLink | GetQRResponseDto | undefined = history.state?.[EditLinkQrParams.Data] as
        | UserLink
        | GetQRResponseDto
        | undefined;

      switch (params[EditLinkQrParams.EditMode]) {
        case EditMode.Link:
          this.editMode = EditMode.Link;
          this.editLinkId = params[EditLinkQrParams.Id];
          this.active = 1;
          this._loadLinkData(data as UserLink || historyState as UserLink);
          break;
        case EditMode.QrCode:
          this.editMode = EditMode.QrCode;
          this.editQrCodeId = params[EditLinkQrParams.Id];
          this.active = 2;
          this._loadQrCodeData(data as GetQRResponseDto || historyState as GetQRResponseDto);
          break;
        default:
          this.editMode = null;
          this.editLinkId = null;
          this.editQrCodeId = null;
          break;
      }
    });
  }

  private _loadLinkData(link: UserLink | undefined): void {
    if (link) {
      this.linkForm.patchValue({
        mainUrl: link.mainUrl,
        title: link.title,
        domain: this.DOMAIN_DEFAULT_VALUE
      });
    } else {

    }
  }

  private _loadQrCodeData(qrCode: GetQRResponseDto | undefined): void {
    if (qrCode) {
      this.qrForm.patchValue({
        mainUrl: qrCode.mainUrl,
        title: qrCode.title
      });
    } else {

    }
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  //  you can change the select later here
  public Placeholder = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Wyoming' },
    { id: 3, name: 'Coming' },
    { id: 4, name: 'Hanry Die' },
    { id: 5, name: 'John Deo' },
  ];
  onSaveLinkForm() {
    if (this.linkForm.invalid) {
      this.linkForm.markAllAsTouched();
      console.warn('Invalid form');
      return;
    }
    const formValues = this.linkForm.value;
    this.userLinksService
      .createLink({
        userId: 3,
        mainUrl: formValues.mainUrl,
        title: formValues.title,
      })
      .subscribe(
        (resp) => {
          console.log({ resp });

          this.linkForm.reset({
            domain: this.DOMAIN_DEFAULT_VALUE,
          });

          this._router.navigate(['/links/links']);
        },
        (error) => {
          console.error(error);
          if (error?.error?.isPlanLimitReached) {
            this._redirectToPricingPage();
          }
        }
      );
  }

  onClearLinkForm() {
    this.linkForm.reset();
  }

  public onSaveQRForm(): void {
    if (this.qrForm.invalid) {
      this.qrForm.markAllAsTouched();
      console.warn('Invalid QR form');
      return;
    }
    if (!this.qrBase64ForImg) return;
    const qrFormValues = this.qrForm.value;
    this._qrCodesService
      .saveQR({
        qrBase64: this._qrBase64,
        title: qrFormValues.title,
        mainUrl: qrFormValues.mainUrl,
      })
      .subscribe(
        (resp) => {
          console.log({ res: resp });

          this.qrForm.reset();

          this._router.navigate(['/qr-codes/qr-codes']);
        },
        (error) => {
          console.error(error);
          if (error?.error?.isPlanLimitReached) {
            this._redirectToPricingPage();
          }
        }
      );
  }

  public onClearQRForm(): void {
    this.qrForm.reset();
  }

  private _observeQrForm(): void {
    this.qrForm
      .get('mainUrl')
      ?.valueChanges.pipe(debounceTime(300), takeUntil(this._destroy$))
      .subscribe((mainUrl) => {
        if (mainUrl) {
          this._qrCodesService.generateQR(mainUrl).subscribe((qrBase64) => {
            this._qrBase64 = qrBase64;
            this.qrBase64ForImg = `data:image/png;base64,${qrBase64}`;
          });
        } else {
          this.qrBase64ForImg = null;
        }
      });
  }

  private _redirectToPricingPage(): void {
    window.location.href = 'http://localhost:4201/#pricing';
  }
}
