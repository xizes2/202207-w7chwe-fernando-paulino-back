import { model, Schema } from "mongoose";

export interface UserData {
  id: string;
  userName: string;
  userEmail: string;
  password: string;
  image: string;
}

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  image: { type: String, required: true },
});

export const User = model("User", userSchema, "users");
