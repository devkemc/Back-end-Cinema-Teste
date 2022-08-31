import { Request, Response } from "express";
import { ListMovieReleaseService } from "../../services/movies/ListMovieReleaseService";

class ListMovieReleaseController {
  async handle(request: Request, response: Response) {
    const listMovieReleaseService = new ListMovieReleaseService();
    const release_date_of = request.params.release_date_of;
    const movie = await listMovieReleaseService.execute({release_date_of});


    return response.json(movie);
  }
}

export { ListMovieReleaseController };