//function composition: is aprinciple in functional programmming. It involves combinning multiple function to a single function where the output becomes the input of the next.
//const fn = compose[f(x), g(x), h(x)]
//f(x) = x => 2 * x
//g(x) = x => 1 + x
//h(x) = x => 3 - x

//application goes thus
//h(x) computes first followed by g(x), followed by f(x) called RIGHT TO LEFT despite f(x) comes last

//const fn = compose([x => 2 * x, x => 1 + x, x => 3 - x]);
//console.log(fn(4))

//solution

var compose = (functions) => (x) => {
  let result = x;
  if (functions.length <= 0) return result;
  for (let i = functions.length - 1; i >= 0; i-- ) {
    result = functions[i](result);
  }
  
  return result;
  
}

//function composition: is aprinciple in functional programmming. It involves combinning multiple function to a single function where the output becomes the input of the next.
//const fn = compose[f(x), g(x), h(x)]
//f(x) = x => 2 * x
//g(x) = x => 1 + x
//h(x) = x => 3 - x

//application goes thus
//h(x) computes first followed by g(x), followed by f(x) called RIGHT TO LEFT despite f(x) comes last

//const fn = compose[x => 2 * x, 1 + x, 3 - x];
//console.log(fn(4))

//solution








const fn = compose([x => 2 * x, x => 1 + x, x => 3 - x]);
console.log(fn(5))
