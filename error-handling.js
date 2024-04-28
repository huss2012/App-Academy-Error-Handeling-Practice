// 1.
function sum(array) {
  try {
    let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(`${error.name} : ${error.message}`);
    }
  }

}

let res = sum(null);
console.log(res);

// 2.
// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.log(`${error.name} : ${error.message}`);
}
// Your code here
function sayName(name) {
  if (typeof name !== "string") {
    throw new TypeError("Invalid name! Must be a string!");
  }
  console.log(name)
}


try {
  greet();
} catch (error) {
  console.log("Hello World!")
}
// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
