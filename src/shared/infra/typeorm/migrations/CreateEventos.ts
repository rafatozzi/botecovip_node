import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEventos1648299318104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "eventos",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "id_cidade",
                    type: "varchar"
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "local",
                    type: "varchar"
                },
                {
                    name: "endereco",
                    type: "varchar"
                },
                {
                    name: "data",
                    type: "timestamp",
                    default: null
                },
                {
                    name: "inicio_vendas",
                    type: "timestamp",
                    default: null
                },
                {
                    name: "descricao",
                    type: "text",
                },
                {
                    name: "obs",
                    type: "varchar"
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
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("eventos")
    }

}
