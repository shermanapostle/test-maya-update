import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Controller } from "@mayajs/core";
import { MayaJsContext } from "@mayajs/router";
import { UsersServices } from "./user.service";

@Controller()
export class UsersController {
  constructor(private services: UsersServices) {}

  @Post({ path: "/", middlewares: [] })
  async create({ body }: MayaJsContext): Promise<any> {
    const result = await this.services.create(body);
    return result;
  }

  @Post({ path: "/login", middlewares: [] })
  async login({ body }: MayaJsContext): Promise<any> {
    const result = await this.services.login(body);
    return result;
  }

  // Update user by id
  @Patch({ path: "/:id", middlewares: [] })
  async update({ params, body }: MayaJsContext): Promise<any> {
    const result = await this.services.update(params.id, body);
    return result;
  }

  // Delete user by id
  @Delete({ path: "/:id", middlewares: [] })
  async delete({ params }: MayaJsContext): Promise<any> {
    const result = await this.services.delete(params.id);
    return result;
  }

  // Get all user
  @Get({ path: "/", middlewares: [] })
  async getAll(): Promise<any> {
    const result = await this.services.getAll();
    return result;
  }

  // Get user by id
  @Get({ path: "/:id", middlewares: [] })
  async getById({ params }: MayaJsContext): Promise<any> {
    const result = await this.services.getById(params.id);
    return result;
  }
}
