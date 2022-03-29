const cats = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}
function appendCat(name){
    cats.slice(name);
    return [...cats, name];
}
function prependCat(name){
    cats.slice(name);
    return [name, ...cats];
}
function removeLastCat() {
  let removeLastCat = cats.slice(0, cats.length - 1)
  return removeLastCat
}
function removeFirstCat() {
  let removeFirstCat = cats.slice(1)
  return removeFirstCat
}


// For manual testing
console.log(cats);
console.log(destructivelyAppendCat('Ralph'));
console.log(destructivelyPrependCat("Bob"));
console.log(destructivelyRemoveLastCat());
console.log(destructivelyRemoveFirstCat());
console.log(appendCat("Broom"));
console.log(prependCat("Arnold"));
console.log(removeLastCat());
console.log(removeFirstCat());