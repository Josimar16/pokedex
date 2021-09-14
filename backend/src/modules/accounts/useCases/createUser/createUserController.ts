import {Injectable, Req} from "@nestjs/common";
import * as yup from 'yup';
import {AppResponse} from "../../../../shared/responses/AppResponse";
import {CreateUserUseCase} from "./createUserUseCase";

const schemaCreateUser = yup.object().shape({
    name: yup.string().required('O nome completo é obrigatório!'),
    email: yup.string().required('o Email é obrigatório!').email('O email precisa ser válido!')
});

@Injectable()
export class CreateUserController {
    constructor(
       private readonly createUserUseCase: CreateUserUseCase
    ) {}
    public async handle(@Req() request): Promise<AppResponse> {
        const { name, email } = request.body;

        schemaCreateUser.validate({ name, email })
            .catch((error) => {
                return new AppResponse(422, error.errors[0],null);
            })

        return await this.createUserUseCase.execute({name, email});
    }
}