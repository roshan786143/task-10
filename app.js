let form = document.getElementById("addForm");
form.addEventListener("submit", storeData);
function storeData(e) {
  e.preventDefault();
  //storing input data on variables

  let name1 = document.getElementById("name");
  console.log(name1.value);
  let email = document.getElementById("email");
  console.log(email.value);
  let mobile = document.getElementById("mobile");
  console.log(mobile.value);
  let time = document.getElementById("time");
  console.log(time.value);
  let times = document.getElementById("times");
  console.log(times.value);

  console.log("------------------------------------------------------");

  // console.log(e.target.name1.value);

  // storing input data on local storage

  localStorage.setItem("name", name1.value);
  console.log(localStorage.getItem("name"));
  localStorage.setItem("email", email.value);
  console.log(localStorage.getItem("email"));
  localStorage.setItem("mobile", mobile.value);
  console.log(localStorage.getItem("mobile"));
  localStorage.setItem("date", time.value);
  console.log(localStorage.getItem("time"));
  localStorage.setItem("time", times.value);
  console.log(localStorage.getItem("time"));
}
