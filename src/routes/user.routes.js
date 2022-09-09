export class UserRoutes {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post("/create", (req, res) =>
      this.controller.createUserController(req, res)
    );

    this.router.put("/update/:id", (req, res) =>
      this.controller.updateUserController(req, res)
    );

    this.router.delete("/delete/:id", (req, res) =>
      this.controller.deleteUserController(req, res)
    );

    this.router.get("/get-all", (req, res) =>
      this.controller.getAllUserController(req, res)
    );

    this.router.get("/get-by-email/", (req, res) =>
      this.controller.getUserByEmailController(req, res)
    );

    this.router.get("/get-by-id/:id", (req, res) =>
      this.controller.getUserByIdController(req, res)
    );

    return this.router;
  }
}
