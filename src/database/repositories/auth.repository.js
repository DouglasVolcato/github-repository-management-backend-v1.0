import { userModel } from "../Schemas/user.Schema.js";

export class AuthRepository {
  async getByEmail(userEmail) {
    return await userModel.findOne({ email: userEmail }).select("+password");
  }
  async getById(userId) {
    return await userModel.findOne({ id: userId });
  }
}
