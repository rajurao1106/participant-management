import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, default: "Participant" },
    email: String,
    phone: String,
    status: {
      type: String,
      enum: ["Active", "On leave", "Inactive"],
      default: "Active"
    },
    lastContacted: Date
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
