import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovie1661913029790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "movies",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                   name: "sinopse",
                   type: "varchar",
                },
                {
                  name: "id_kind",
                  type: "uuid",
                },
                {
                    name: "release_date_of",
                    type: "varchar",
        
                  },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movies");

    }

}
