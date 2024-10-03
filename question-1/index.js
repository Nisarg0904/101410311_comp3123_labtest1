function lowerCaseWord(array) {
  return new Promise((resolve, reject) => {
    if (array.length == 0) {
      reject("The array is Empty");
    } else {
      const arr = array.filter((item) => typeof item == "string");
      const newArr = arr.map((item) => item.toLowerCase());
      resolve(newArr);
    }
  });
}
lowerCaseWord(["PIZZA", 10, true, 25, false, "Wings"])
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
