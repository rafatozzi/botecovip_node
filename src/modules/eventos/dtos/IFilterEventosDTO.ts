export interface IFilterEventosDTO {
  nome?: string;
  local?: string;
  endereco?: string;
  cidades?: string[];
  data?: Date;
  inicioVendas?: Date;
  inicioVendasAte?: Date;
}