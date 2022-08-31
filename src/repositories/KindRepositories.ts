import { EntityRepository, Repository } from "typeorm";
import { Kind } from "../entities/Kind";

@EntityRepository(Kind)
class KindRepositories extends Repository<Kind> {}

export { KindRepositories };