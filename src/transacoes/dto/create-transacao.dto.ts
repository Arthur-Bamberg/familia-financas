export class CreateTransacaoDto {
  valor: number;
  eh_gasto: boolean;
  data: Date;
  lojaId: number;
  grupoCartaoId: number;
}
