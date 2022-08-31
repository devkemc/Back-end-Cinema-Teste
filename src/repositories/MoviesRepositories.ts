import { EntityRepository, Repository } from "typeorm";
import { Movies } from "../entities/Movies";

@EntityRepository(Movies)
class MoviesRepositories extends Repository<Movies> {}

export { MoviesRepositories };