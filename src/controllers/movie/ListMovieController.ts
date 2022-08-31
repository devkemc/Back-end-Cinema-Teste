import { Request, Response } from "express";
import { ListMovieService } from "../../services/movies/ListMovieService";

class ListMovieController {
  async handle(request: Request,response: Response) {
    
    const listMovieService = new ListMovieService();

    const movie = await listMovieService.execute();

    return response.json(movie);
  }
}

export { ListMovieController };