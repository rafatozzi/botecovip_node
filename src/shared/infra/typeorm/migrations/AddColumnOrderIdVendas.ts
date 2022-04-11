import { MigrationInterface, QueryRunner } from "typeorm"

export class AddColumnOrderIdVendas1649683727098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE eventos_vendas ADD COLUMN `order_id` varchar(55) DEFAULT NULL AFTER `forma_pgto`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("eventos_vendas", "order_id");
    }

}
