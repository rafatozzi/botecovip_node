export interface ICreateEventoDTO {
  id?: string;
  id_cidade: string;
  nome: string;
  local: string;
  endereco: string;
  data: Date;
  inicio_vendas: Date;
  descricao?: string;
  obs?: string;
}