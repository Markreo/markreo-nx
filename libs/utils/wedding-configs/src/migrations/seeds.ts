import { MigrationInterface, QueryRunner } from "typeorm"

export class migration1673606380420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "persons" ALTER COLUMN "City" RENAME TO "City2"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
