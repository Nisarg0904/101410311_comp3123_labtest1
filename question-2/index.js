function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve({ message: "delayed Sucess!" }), 500);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(reject({ error: "delayed Exception!" }), 500);
  });
}
resolvedPromise().then((msg) => {
  console.log(msg);
});
rejectedPromise()
  .then()
  .catch((msg) => {
    console.log(msg);
  });
