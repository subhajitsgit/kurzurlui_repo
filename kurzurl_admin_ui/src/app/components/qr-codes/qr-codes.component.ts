import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../shared/components/feather-icons/feather-icons.component';
import { QrCodesService } from './qr-codes.service';
import { Subject, takeUntil } from 'rxjs';
import { GetQRListResponseDto } from '@dto/qr/get-qr-list-response.dto';

@Component({
  selector: 'app-qr-codes',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './qr-codes.component.html',
  styleUrl: './qr-codes.component.scss',
  providers: [QrCodesService]
})
export class QrCodesComponent implements OnInit, OnDestroy {
  public qrList: GetQRListResponseDto[];
  private _qrCodesService = inject(QrCodesService);
  private _destroy$ = new Subject<any>();

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
}
