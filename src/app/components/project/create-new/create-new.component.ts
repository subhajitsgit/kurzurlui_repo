import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLinksService } from '../../links/links.service';
import { Router } from '@angular/router';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { QrCodesService } from '../../qr-codes/qr-codes.service';
// this is the create new
@Component({
  selector: 'app-create-new',
  standalone: true,
  imports: [FileUploadComponent, NgbNavModule, NgSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss'],
  providers: [UserLinksService, QrCodesService]
})
export class CreateNewComponent implements OnInit, OnDestroy {
  public active = 1;
  public selectedCityId: number = 0;
  public linkForm: FormGroup;
  public qrForm: FormGroup;
  public userId: number;
  public qrBase64ForImg: string | null;

  private _destroy$ = new Subject<void>();
  private _qrBase64: string;

  private readonly DOMAIN_DEFAULT_VALUE: string;

  constructor(
    private userLinksService: UserLinksService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _qrCodesService: QrCodesService
  ) {
    this.userId = 1;
    this.DOMAIN_DEFAULT_VALUE = '1';
    this.qrBase64ForImg = null;
    this._qrBase64 = '';

    this.linkForm = this._formBuilder.group({
      mainUrl: ['', [Validators.required]],
      domain: [this.DOMAIN_DEFAULT_VALUE, [Validators.required]],
      title: ['', [Validators.required]],
    });
    this.qrForm = this._formBuilder.group({
      mainUrl: [''],
      title: ['', [Validators.required]]
    });
  }

  public ngOnInit(): void {
    this._observeQrForm();
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
    this.userLinksService.createLink({
      userId: 3,
      mainUrl: formValues.mainUrl,
      title: formValues.title
    })
      .subscribe(
        resp => {
          console.log({ resp })

          this.linkForm.reset({
            domain: this.DOMAIN_DEFAULT_VALUE
          });

          this._router.navigate(['/links/links']);
        },
        error => {
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
    this._qrCodesService.saveQR({
      qrBase64: this._qrBase64,
      title: qrFormValues.title,
      mainUrl: qrFormValues.mainUrl
    })
      .subscribe(
        resp => {
          console.log({ res: resp });

          this.qrForm.reset();

          this._router.navigate(['/qr-codes/qr-codes']);
        },
        error => {
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
    this.qrForm.get('mainUrl')?.valueChanges
      .pipe(
        debounceTime(300),
        takeUntil(this._destroy$)
      )
      .subscribe(mainUrl => {
        if (mainUrl) {
          this._qrCodesService.generateQR(mainUrl)
            .subscribe(qrBase64 => {
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