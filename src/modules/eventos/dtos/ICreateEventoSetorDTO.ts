export interface ICreateEventoSetorDTO {
  id?: string;
  id_evento: string;
  nome: string;
  tipo: number;
  qtd_por_linha: number;
  qtd_lugar: number;
  dividir_ate: number;
}