function print(fn) {
    const result = fn(2)
    console.log(result)
  }

  function fn (number = 5)  {
    return number * 2;
  };


print(fn)