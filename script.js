<<<<<<< HEAD
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => disPlayFetchedData(data)); //

// let mainContainer = document.getElementById("displayData");
// let h1 = document.createElement("h1");
// h1.innerHTML = "Aditya";
// mainContainer.appendChild(h1);

let disPlayFetchedData = (data) => {
  data.forEach((element) => {
    let mainContainer = document.getElementById("displayData");
    let div = document.createElement("div");
    div.innerHTML = "<strong>Name: </strong>" + element.name;
    mainContainer.appendChild(div);

    let p = document.createElement("span");
    p.innerHTML = "<strong>Email: </strong>" + element.email;
    mainContainer.appendChild(p);
  });
};

const OuterFun = () => {
  var outerVar = 20;
  function Innerfun() {
    console.log(outerVar);
  }
  return Innerfun;
};

let fun = OuterFun();
fun();
=======
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => disPlayFetchedData(data)); //

// let mainContainer = document.getElementById("displayData");
// let h1 = document.createElement("h1");
// h1.innerHTML = "Aditya";
// mainContainer.appendChild(h1);

let disPlayFetchedData = (data) => {
  data.forEach((element) => {
    let mainContainer = document.getElementById("displayData");
    let div = document.createElement("div");
    div.innerHTML = "<strong>Name: </strong>" + element.name;
    mainContainer.appendChild(div);

    let p = document.createElement("span");
    p.innerHTML = "<strong>Email: </strong>" + element.email;
    mainContainer.appendChild(p);
  });
};

const OuterFun = () => {
  var outerVar = 20;
  function Innerfun() {
    console.log(outerVar);
  }
  return Innerfun;
};

let fun = OuterFun();
fun();
>>>>>>> 1a6f01befce903c129259587054a1c13663d4694
