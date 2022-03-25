import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { UsersCidades } from "./UsersCidades";

@Entity("users")
export class Users {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  user: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => UsersCidades, e => e.user)
  cidades: UsersCidades[];

  constructor() {
    if (!this.id)
      this.id = uuidv4();
  }

}
