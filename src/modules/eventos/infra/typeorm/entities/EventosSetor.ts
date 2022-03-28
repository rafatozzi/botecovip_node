import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Eventos } from "./Eventos";
import { EventosSetorLote } from "./EventosSetorLote";

@Entity("eventos_setor")
export class EventosSetor {

  @PrimaryColumn()
  id: string;

  @Column()
  id_evento: string;

  @Column()
  nome: string;

  @Column()
  tipo: number;

  @Column()
  qtd_por_linha: number;

  @Column()
  qtd_lugar: number;

  @Column()
  dividir_ate: number;

  @Column()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Eventos)
  @JoinColumn({ name: "id_evento" })
  evento: Eventos;

  @OneToMany(() => EventosSetorLote, e => e.setor)
  lotes: EventosSetorLote[];

  constructor() {
    if (!this.id)
      this.id = uuidv4();
  }
}