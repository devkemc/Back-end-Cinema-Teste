import { Router } from "express";
import { CreateKindController } from "./controllers/kind/CreateKindController";
import { DeleteKindController } from "./controllers/kind/DeleteKindController";
import { ListKindController } from "./controllers/kind/ListKindController";
import { AuthenticateUserController } from "./controllers/login/AuthenticateUserController";
import { CreateMovieController } from "./controllers/movie/CreateMovieController";
import { DeleteMovieController } from "./controllers/movie/DeleteMovieController";
import { ListMovieController } from "./controllers/movie/ListMovieController";
import { ListMovieKindController } from "./controllers/movie/ListMovieKindController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";


const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const createKindController = new CreateKindController();
const listKindController = new ListKindController();
const createMovieController = new CreateMovieController();
const listMovieController = new ListMovieController();
const listMovieKindController = new ListMovieKindController();
const listMovieReleaseController = new ListMovieController();
const authenticateUserController = new AuthenticateUserController();
const deleteMovieController = new DeleteMovieController();
const deleteKindController = new DeleteKindController();

router.post("/user", createUserController.handle);
router.post("/login", authenticateUserController.handle);
//precisa estar logo para usar
router.use(ensureAuthenticated);
router.get("/kind", listKindController.handle);
router.put("/user", updateUserController.handle);
router.get("/movie", listMovieController.handle);
router.get("/movieKind/:id_kind", listMovieKindController.handle);
router.get("/movieRelease/:release_date_of", listMovieReleaseController.handle);
//precisa ser admin
router.use(ensureAdmin);
router.delete("/user/:id", deleteUserController.handle);
router.get("/users", listUsersController.handle);
router.post("/kind", createKindController.handle);
router.post("/movie", createMovieController.handle);
router.delete("movie/:id", deleteMovieController.handle);
router.delete("/kind/:id", deleteKindController.handle);

export {router};