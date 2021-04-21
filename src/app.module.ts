import { Module } from "@mayajs/core";
import { RouterModule } from "@mayajs/router";
import { routes } from "./app.routing.module";
import { AppController } from "./app.controller";
import { MongoDbModule } from "@mayajs/mongo";
import User from "./user/user.model";

const mongodbOptions = {
  connectionString: "mongodb+srv://mayajs:123456Q@cluster0.tskd6.mongodb.net/test?retryWrites=true&w=majority",
  name: "test",
  options: { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true },
  schemas: [User],
};

@Module({
  declarations: [AppController],
  imports: [RouterModule.forRoot(routes), MongoDbModule.forRoot(mongodbOptions)],
  providers: [],
  bootstrap: AppController,
})
export class AppModule {}
