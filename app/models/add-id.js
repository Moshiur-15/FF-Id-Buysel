import mongoose from "mongoose";

const AddIdSchema = new mongoose.Schema(
  {
    name: String,
    description: { type: String, default: "" },
    uid: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
    evoGun: { type: Number, default: 0 },
    evoMax: { type: Number, default: 0 },
    totalVolt: { type: Number, default: 0 },
    totalMask: { type: Number, default: 0 },
    totalHere: { type: Number, default: 0 },
    totalPanth: { type: Number, default: 0 },
    totalEmote: { type: Number, default: 0 },
    animation: { type: String, default: "" },
    skywing: { type: String, default: "" },
    diamondClaimable: { type: Number, default: 0 },
    diamond: { type: Number, default: 0 },
    images: [String],
    video: String,
    status: { type: String, default: "available" },
  },
  { timestamps: true }
);

const AddId = mongoose.models.AddId || mongoose.model("AddId", AddIdSchema);
export default AddId;
