import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { EventosSetor } from "./EventosSetor";

@Entity("eventos_setor_lote")
export class EventosSetorLote {

  @PrimaryColumn()
  id: string;

  @Column()
  id_evento_setor: string;

  @Column()
  data: Date;

  @Column()
  qtd_total: number;

  @Column()
  valor: number;

  @Column()
  taxa_adm: number;

  @Column()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => EventosSetor)
  @JoinColumn({ name: "id_evento_setor" })
  setor: EventosSetor;

  constructor() {
    if (!this.id)
      this.id = uuidv4();
  }
}