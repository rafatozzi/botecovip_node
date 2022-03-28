export interface ICreateEventoSetorLoteDTO {
  id?: string;
  id_evento_setor: string;
  data: Date;
  valor: number;
  taxa_adm: number;
}