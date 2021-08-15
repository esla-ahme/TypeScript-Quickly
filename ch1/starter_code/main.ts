const getFinalPrice = (price: number, discount: number): Number => {
  return price - price / discount;
}
console.log(getFinalPrice(100, 20));