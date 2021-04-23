import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { MongoDbModule, MongoDbServices } from "@mayajs/mongo";
import users from "./user/user.model";
import { UsersController } from "./user/user.controller";
import { UsersServices } from "./user/user.service";

const mongodbOptions = {
  connectionString: "mongodb+srv://mayajs:123456Q@cluster0.tskd6.mongodb.net/test?retryWrites=true&w=majority",
  name: "test",
  options: { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true },
  schemas: [users],
};

@Module({
  declarations: [AppController, UsersController],
  imports: [RouterModule.forRoot(routes), MongoDbModule.forRoot(mongodbOptions)],
  providers: [UsersServices, MongoDbServices],
  bootstrap: AppController,
})
export class AppModule {}
