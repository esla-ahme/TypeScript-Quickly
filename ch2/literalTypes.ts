//note head is writte wrong in the return function
const flipCoin = (): "head" | "tail" => {
  let randVal = Math.floor((Math.random() * 2) + 1);
  return randVal == 1 ? "head" : "tail"
}
//try iy for five times  
for (let i = 0; i < 5; i++)
  console.log(flipCoin())
