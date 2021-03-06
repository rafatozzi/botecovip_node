import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Cidades } from "../../../../cidades/infra/typeorm/entities/Cidades";
import { EventosSetor } from "./EventosSetor";
import { EventosVendas } from "./EventosVendas";

@Entity("eventos")
export class Eventos {

  @PrimaryColumn()
  id: string;

  @Column()
  id_cidade: string;

  @Column()
  nome: string;

  @Column()
  local: string;

  @Column()
  endereco: string;

  @Column()
  data: Date;

  @Column()
  inicio_vendas: Date;

  @Column()
  descricao: string;

  @Column()
  obs: string;

  @Column()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Cidades)
  @JoinColumn({ name: "id_cidade" })
  cidade: Cidades;

  @OneToMany(() => EventosSetor, e => e.evento)
  setores: EventosSetor[];

  @OneToMany(() => EventosVendas, e => e.evento)
  vendas: EventosVendas[];

  constructor() {
    if (!this.id)
      this.id = uuidv4();
  }

}