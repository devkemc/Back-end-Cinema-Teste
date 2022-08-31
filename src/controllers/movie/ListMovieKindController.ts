import { Request, Response } from "express";
import { ListMovieKindService } from "../../services/movies/ListMovieKindService";

class ListMovieKindController {
  async handle(request: Request, response: Response) {
    const listMovieKindService = new ListMovieKindService();
    const id_kind =  request.params.id_kind;
    const movie = await listMovieKindService.execute({id_kind});


    return response.json(movie);
  }
}

export { ListMovieKindController };