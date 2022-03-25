import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Cidades } from "../../../../cidades/infra/typeorm/entities/Cidades";
import { Users } from "./Users";

@Entity("users_cidades")
export class UsersCidades {

  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  id_cidade: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @ManyToOne(() => Cidades)
  @JoinColumn({ name: "id_cidade" })
  cidade: Cidades;

  constructor() {
    if (!this.id)
      this.id = uuidv4();
  }
}