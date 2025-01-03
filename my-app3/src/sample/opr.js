let a, b, rest;
({a, ...rest} = {d : 30, e : 40, b : 20, c : 10});
console.log(a);
console.log(b);
console.log(rest);

function f(x) {
  x = 20;
}
let value = 10;
f(value);
console.log(value);

function f2(x) {
  x.a = 20;
}
let val = {a:10} // object
f2(val);
console.log(val);