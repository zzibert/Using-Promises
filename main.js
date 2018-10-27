let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  promise.then(alert); // shows "done!" after 1 second