import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
 }

 class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {

     
      const usersRepository = getCustomRepository(UsersRepositories);
   
      if (!name) {
        throw new Error("Nome Obrigatorio!");
      }
      if(!password){
        throw new Error("Senha Origatorio!");
      }
  
      const userAlreadyExists = await usersRepository.findOne({
          email,
      });

      if (userAlreadyExists) {
        throw new Error("Usuario ja existe!");
      }

      const passwordHash = await hash(password, 8);
      console.log(passwordHash);
  
      const user = usersRepository.create({
        name,
        email,
        admin,
        password: passwordHash,
      });
      await usersRepository.save(user);

      return user;
    }
  }
  export { CreateUserService };