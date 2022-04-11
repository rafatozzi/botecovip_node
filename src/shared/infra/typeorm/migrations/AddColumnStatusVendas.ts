import { MigrationInterface, QueryRunner } from "typeorm"

export class AddColumnStatusVendas1649683774800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE eventos_vendas ADD COLUMN `status` varchar(50) NOT NULL DEFAULT '0' AFTER `order_id`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("eventos_vendas", "status");
    }

}
