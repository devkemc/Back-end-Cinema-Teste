import { Request, Response } from "express";
import { CreateMovieService } from "../../services/movies/CreateMovieService";

class CreateMovieController {

    async handle(request: Request, response: Response) {
      const { name, sinopse, id_kind, release_date_of } = request.body;
  
      const createMovieService = new CreateMovieService();
  
      const movie = await createMovieService.execute({
        name,
        sinopse,
        id_kind,
        release_date_of
      });
  
      return response.json(movie);
    }
  }
  
  export { CreateMovieController };