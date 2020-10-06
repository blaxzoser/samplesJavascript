let items = new Set([1, 2, 3, 7, 7, 7, 7, 7]);
console.log(items);
console.log(items.size);
console.log(items.has(7));
console.log(items.has("7"));

console.log(items.delete(7));
console.log(items.size);

items.clear();
console.log(items.size);