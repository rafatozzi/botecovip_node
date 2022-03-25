import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("clientes")
export class Clientes {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  telefone: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id)
      this.id = uuidv4();
  }

}