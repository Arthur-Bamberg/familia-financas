export class CreateTransacaoDto {
  valor: number;
  eh_gasto: boolean;
  data: Date;
  empresa_id: number;
  grupo_cartao_id: number;
}
