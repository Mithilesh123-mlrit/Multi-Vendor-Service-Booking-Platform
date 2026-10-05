// @ts-check
import { module } from "@prisma/composer";
import servicehubService from "./service.mjs";

export default module("servicehub", ({ provision }) => {
  provision(servicehubService);
});
