function getSippingMessage(country, price, deliveryFee) { 
    const totalPrice = price + deliveryFee;
    return `Sipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getSippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getSippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getSippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"