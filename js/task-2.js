function getShippingMessage(country, price, deliveryFee) {
  // додаємо ціну товару та вартість доставки
  const msg = `Shipping to ${country} will cost ${price + deliveryFee} credits.`;
  console.log(msg);
}
getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);
