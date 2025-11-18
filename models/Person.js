import { Schema, model } from "mongoose";

const personSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    state: { type: String, required: true },
    role: { type: String, default: "" },
    status: {
      type: String,
      enum: ["contact", "lead", "participant"],
      default: "contact"
    }
  },
  { timestamps: true }
);

export default model("Person", personSchema);
