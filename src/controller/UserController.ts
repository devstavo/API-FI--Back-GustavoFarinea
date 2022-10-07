import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { UserGF } from "../entity/UserGF"

export class UserGFController {

    private userGFRepository = getRepository(UserGF)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userGFRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userGFRepository.findOne(request.params.id)
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userGFRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userGFToRemove = await this.userGFRepository.findOneBy({ id: request.params.id })
        await this.userGFRepository.remove(userGFToRemove)
    }

}