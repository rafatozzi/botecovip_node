export interface ICreateEventoSetorLoteDTO {
  id?: string;
  id_evento_setor: string;
  data: Date;
  qtd_total: number;
  valor: number;
  taxa_adm: number;
}