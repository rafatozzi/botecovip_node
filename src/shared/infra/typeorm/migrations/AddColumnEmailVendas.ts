import { MigrationInterface, QueryRunner } from "typeorm"

export class AddColumnEmailVendas1650374101438 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE eventos_vendas ADD COLUMN `email_cliente` varchar(100) DEFAULT NULL AFTER `id_cliente`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("eventos_vendas", "email_cliente");
    }

}
