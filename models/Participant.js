import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    phone: String,
    ndisNumber: String,
    status: {
      type: String,
      enum: ["Active", "Under review", "On leave"],
      default: "Active"
    },
    state: String,
    serviceType: [String],
    lastContacted: Date,
    staff: String
  },
  { timestamps: true }
);

export default mongoose.model("Participant", participantSchema);
