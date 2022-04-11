export interface ICreateEventosVendasDTO {
  id?: string;
  id_evento: string;
  id_evento_setor_lote: string;
  id_cliente: string;
  nr_lugar: number;
  valor: number;
  forma_pgto: string;
  order_id?: string;
  status?: string;
}