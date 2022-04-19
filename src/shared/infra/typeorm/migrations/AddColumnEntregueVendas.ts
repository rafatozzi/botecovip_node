import { MigrationInterface, QueryRunner } from "typeorm"

export class AddColumnEntregueVendas1650373199551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE eventos_vendas ADD COLUMN `entregue` tinyint(1) NOT NULL DEFAULT '0' AFTER `status`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("eventos_vendas", "entregue");
    }

}
