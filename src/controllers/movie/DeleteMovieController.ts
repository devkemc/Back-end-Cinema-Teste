import { Request, Response } from "express";
import { DeleteMovieService } from "../../services/movies/DeleteMovieService";

class DeleteMovieController {
  async handle(request: Request, response: Response) {
    const deleteMovieService = new DeleteMovieService();
    const id= request.params.id;
    const movie = await deleteMovieService.execute({id});

    return response.json(movie);
  }
}

export { DeleteMovieController };