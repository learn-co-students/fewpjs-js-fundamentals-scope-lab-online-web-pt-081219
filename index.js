animal = ""

function myAnimal() {
  const animal = "dog"
  // let animal = "dog" works too
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal = "cat"
  return animal
}

function add2(n) {
  let two = 2
  return n + two

}

// ReferenceError: two is not defined...means you didnt put let or const infront of variable