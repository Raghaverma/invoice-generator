const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  invoiceDate: { type: Date, default: Date.now },
  dueDate: { type: Date },
  items: [
    {
      description: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "Pending" }, // "Paid" or "Pending"
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
