let form = document.getElementById("addForm");
form.addEventListener("submit", storeData);
function storeData(event) {
  event.preventDefault();
  //storing input data on variables

  console.log("------------");

  let name = event.target.name.value;
  console.log(name);

  let email = event.target.email.value;
  console.log(email);

  let mobile = event.target.mobile.value;
  console.log(mobile);

  let date = event.target.date.value;
  console.log(date);

  let time = event.target.time.value;
  console.log(time);

  console.log("******************************");

  for (let n = 1; n <= 10; n++) {
    console.log("Roshan" + " ");
  }
  // console.log(name1.value);

  // console.log("------------------------------------------------------");

  // console.log(e.target.name1.value);

  // storing input data on local storage

  let user_details = {
    name: name,
    email: email,
    mobile: mobile,
    date: date,
    times: time,
  };

  // user_details.name = name1;
  // user_details.email = this.email;
  // user_details.mobile = this.mobile;
  // user_details.time = this.date;
  // user_details.times = this.times;

  let greet = document.createElement("h1");
  let ok = document.createTextNode("hello " + name);
  greet.style.color = "green";
  greet.appendChild(ok);
  let call = document.getElementById("call");
  call.appendChild(greet);

  console.log(ok);

  let user_json_data = JSON.stringify(user_details);

  // localStorage.setItem("user details", user_json_data);

  // localStorage.setItem("user details1", user_json_data);
  localStorage.setItem(user_details.email, user_json_data);
  
  let users;
  
  for (let i = 0; i < localStorage.length-1; i++) {
    users = localStorage.getItem(localStorage.key(i));
    console.log(JSON.parse(users));
    // console.log(localStorage.getItem("user details"));
  }

  // localStorage.setItem("name", name1.value);
  // console.log(localStorage.getItem("name"));
  // localStorage.setItem("email", email.value);
  // console.log(localStorage.getItem("email"));
  // localStorage.setItem("mobile", mobile.value);
  // console.log(localStorage.getItem("mobile"));
  // localStorage.setItem("date", time.value);
  // console.log(localStorage.getItem("time"));
  // localStorage.setItem("time", times.value);
  // console.log(localStorage.getItem("time"));
}
