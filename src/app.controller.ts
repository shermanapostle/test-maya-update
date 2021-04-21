import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Controller } from "@mayajs/core";

@Controller()
export class AppController {
  
  @Get({ path: "/" })
  hello() {
    return "Hello World!";
  }
}