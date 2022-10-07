import { UserGFController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserGFController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserGFController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserGFController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserGFController,
    action: "remove"
}]