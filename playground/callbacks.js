var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Benjamin"
  }
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(33, (user) => {
  console.log(user);
})
