# Part 1 Chapter 1 : Getting familiar with TypeScript

**Typescript is a superset of javascript** 

![versions](./images/js-v.png)
<hr>

**Typical TypeScript workflows**

![ts-workflow](./images/ts-workflow.png)

and here with js library called lodash 
  (supporst piplines and many functional programming features)
![ts-workflow](./images/ts-workflow2.png)
<hr>

### Code Example
suppose we created a `main.ts` file containing the following code
>**Typescript**
<pre style="background:#eef">
const getFinalPrice = (price: <span style="color:green">Number</span>, discount:<span style="color:green">Number</span>): <span style="color:red">Number</span> => {
  return price - price / discount;
}
console.log(getFinalPrice(100, 20));
</pre>
where 

<span style="color:green">Number</span>: is type of parameter 

<span style="color:red">Number</span>: is type of the return value 

in terminal `tsc main.ts`

>**Javascript** output is generated in `main.js` file
<pre style="background:#fee">
const getFinalPrice = (price: <span style="color:green">Number</span>, discount:<span style="color:green">Number</span>): <span style="color:red">Number</span> => {
  return price - price / discount;
}
console.log(getFinalPrice(100, 20));
</pre>
<hr>

### Configuration options
there are many configuratio options are provided by tsc (Typescript compiler)
such as 
`tsc --t ES5 (or ES6) main ` to generate js cod compatible with ES5 or ES6 also 
`tsc main --noEmitOnError true` to prevent generating js files if there are compilation errors.
A **` tsconfig.json`** file could be created to contain the configuration options and tsc will look on them every time (see [tsconfig.json](./starter_code/tsconfig.json) of starter_code)
