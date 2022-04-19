import { MigrationInterface, QueryRunner } from "typeorm"

export class AddColumnCpfVendas1650374094570 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE eventos_vendas ADD COLUMN `cpf_cliente` bigint(16) NOT NULL DEFAULT '0' AFTER `id_cliente`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("eventos_vendas", "cpf_cliente");
    }

}
