import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEventosSetorLote1648304809985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "eventos_setor_lote",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "id_evento_setor",
                    type: "varchar"
                },
                {
                    name: "data",
                    type: "timestamp"
                },
                {
                    name: "valor",
                    type: "decimal(12,2)",
                    default: 0
                },
                {
                    name: "taxa_adm",
                    type: "decimal(12,2)",
                    default: 0
                },
                {
                    name: "excluir",
                    type: "boolean"
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
                    name: "FKEventosSetorLoteSetor",
                    referencedTableName: "eventos_setor",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_evento_setor"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("eventos_setor");
    }

}
