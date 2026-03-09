const Order = require("../Model/Order");

exports.placeOrder = async (req, res) => {
  try {
    const { userId, customer, items, totalAmount } = req.body;

    if (
      !userId ||
      !customer ||
      !customer.name ||
      !customer.mobile ||
      !customer.address ||
      !customer.city ||
      !customer.pincode ||
      !items ||
      items.length === 0
    ) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const newOrder = new Order({
      userId,
      name: customer.name,
      mobile: customer.mobile,
      email: customer.email,
      address: customer.address,
      city: customer.city,
      pincode: customer.pincode,
      items,
      totalAmount,
    });

    await newOrder.save();

    console.log("✅ Order Saved:", newOrder);

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });

  } catch (error) {
    console.log("❌ Order Error:", error);
    res.status(500).json({
      success: false,
      message: "Order failed",
      error: error.message,
    });
  }
};
