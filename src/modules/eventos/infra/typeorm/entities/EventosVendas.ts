import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Clientes } from "../../../../clientes/infra/typeorm/entities/Clientes";
import { Eventos } from "./Eventos";
import { EventosSetorLote } from "./EventosSetorLote";

@Entity("eventos_vendas")
export class EventosVendas {
  @PrimaryColumn()
  id: string;

  @Column()
  id_evento: string;

  @Column()
  id_evento_setor_lote: string;

  @Column()
  id_cliente: string;

  @Column()
  nr_lugar: number;

  @Column()
  valor: number;

  @Column()
  forma_pgto: number;

  @Column()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Eventos)
  @JoinColumn({ name: "id_evento" })
  evento: Eventos;

  @ManyToOne(() => EventosSetorLote)
  @JoinColumn({ name: "id_evento_setor_lote" })
  lote: EventosSetorLote;

  @ManyToOne(() => Clientes)
  @JoinColumn({ name: "id_cliente" })
  cliente: Clientes;

  constructor() {
    if (!this.id)
      this.id = uuidv4();
  }
}