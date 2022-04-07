import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEventosVendas1648305274912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "eventos_vendas",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "id_evento",
                    type: "varchar"
                },
                {
                    name: "id_evento_setor_lote",
                    type: "varchar"
                },
                {
                    name: "id_cliente",
                    type: "varchar"
                },
                {
                    name: "nr_lugar",
                    type: "int(7)",
                    default: 0
                },
                {
                    name: "valor",
                    type: "decimal(12,2)",
                    default: 0
                },
                {
                    name: "forma_pgto",
                    type: "varchar(50)"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKEventosVendasEvento",
                    referencedTableName: "eventos",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_evento"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    name: "FKEventosVendasSetorLote",
                    referencedTableName: "eventos_setor_lote",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_evento_setor_lote"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                },
                {
                    name: "FKEventosVendasCliente",
                    referencedTableName: "clientes",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_cliente"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("eventos_vendas");
    }

}
