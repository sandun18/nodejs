function fetchData(callback) {
  setTimeout(() => {
    callback('Data received!');
  }, 1000);
}

fetchData((message) => {
  console.log(message);
});