function fn(number) {
  return number * 2;
}

const cn = number => number * 2;

console.log(fn(2))
console.log(cn(2))

const fnArrow = number => ({
  result: number * 2
})

console.log(fnArrow(2))