const set = new Set([1,2,3,4,4,3,2,1]); // 중복이 안되서 1,2,3,4
set.add(5);
set.add(3);
set.delete(1);
console.log(set.add(5)); 
console.log(set.delete(1)); 

console.log(set.has(1)); 
console.log(set.has(2)); 
console.log(set.size); 
console.log(Array.from(set)); 
console.log(new Set(set));
console.log(set);