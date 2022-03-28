import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEventosSetor1648300405226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "eventos_setor",
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
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "tipo",
                    type: "tinyint(1)"
                },
                {
                    name: "qtd_por_linha",
                    type: "int(5)",
                    default: 0
                },
                {
                    name: "qtd_lugar",
                    type: "int(7)",
                    default: 1
                },
                {
                    name: "dividir_ate",
                    type: "int(4)",
                    default: 1
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
                    name: "FKEventosSetorEvento",
                    referencedTableName: "eventos",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_evento"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("eventos_setor");
    }

}
