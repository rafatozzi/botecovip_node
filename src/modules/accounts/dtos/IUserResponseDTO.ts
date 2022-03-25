import { UsersCidades } from "../infra/typeorm/entities/UsersCidades";

export interface IUserResponseDTO {
  id: string;
  nome: string;
  user: string;
  admin: boolean;
  cidades: UsersCidades[];
}