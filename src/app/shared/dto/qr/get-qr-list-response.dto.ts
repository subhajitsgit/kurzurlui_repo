export interface GetQRResponseDto {
    createdBy: string;
    createdOn: string;
    id: number;
    isActive: boolean;
    mainUrl: string;
    modifiedBy: string | null;
    modifiedOn: string | null;
    qrImage: string;
    title: string;
}