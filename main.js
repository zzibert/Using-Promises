// an "immediately" resolved Promise
const executor = resolve => resolve("done!");
const promise = new Promise(executor);

promise.then(alert); // this alert shows last (*)

alert("code finished"); // this alert shows first