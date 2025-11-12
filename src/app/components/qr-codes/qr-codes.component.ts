import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';
import { QrCodesService } from './qr-codes.service';
import { Subject, takeUntil } from 'rxjs';
import { GetQRResponseDto } from '@dto/qr/get-qr-list-response.dto';
import { Router } from '@angular/router';
import { EditLinkQrParams, EditMode } from '@shared/enums';

@Component({
  selector: 'app-qr-codes',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './qr-codes.component.html',
  styleUrl: './qr-codes.component.scss',
  providers: [QrCodesService]
})
export class QrCodesComponent implements OnInit, OnDestroy {
  public qrList: GetQRResponseDto[];
  private _qrCodesService = inject(QrCodesService);
  private _destroy$ = new Subject<any>();

  constructor (private _router: Router) {}

  ngOnInit(): void {
    this._qrCodesService.getQRList()
      .pipe(takeUntil(this._destroy$))
      .subscribe(newQrList => {
        this.qrList = newQrList;
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  onEditQrCode(qrCode: GetQRResponseDto): void {
    this._router.navigate(['/project/create'], {
      queryParams: {
        [EditLinkQrParams.Id]: qrCode.id,
        [EditLinkQrParams.EditMode]: EditMode.QrCode
      },
      state: { [EditLinkQrParams.Data]: qrCode }
    })
  }
}
