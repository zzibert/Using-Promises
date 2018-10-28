new Promise(function(resolve, reject) {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!

//works the same as

new Promise(function(resolve, reject) {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!

new Promise(function(resolve, reject) {
  resolve("ok");
}).then(function(result) {
  throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!

new Promise(function(resolve, reject) {
  resolve("ok");
}).then(function(result) {
  blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined