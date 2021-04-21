import { UsersController } from "./user/user.controller";
import { RouterModule } from "@mayajs/router";

export const routes = [
  {
    path: "user",
    controller: UsersController,
  },
];
