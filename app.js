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

  // for (let n = 1; n <= 10; n++) {
  //   console.log("Roshan" + " ");
  // }
  // console.log(name1.value);

  // console.log("------------------------------------------------------");

  // console.log(e.target.name1.value);
  // let greet = document.createElement("h1");
  // let ok = document.createTextNode("hello " + name);
  // greet.style.color = "green";
  // greet.appendChild(ok);
  // let call = document.getElementById("call");
  // call.appendChild(greet);

  // console.log(ok);
  // storing input data on local storage

  let user_details = {
    name: name,
    email: email,
    mobile: mobile,
    date: date,
    times: time,
  };

  let user_json_data = JSON.stringify(user_details);

  //                   (step-1)------------storing users details in local storage

  localStorage.setItem(user_details.email, user_json_data);

  //                     (step-2)--------------------showing the user details on the screen

  let users;
  let para = document.createElement("p");
  para.className = "par";
  let br = document.createElement("br");

  for (let i = 0; i < localStorage.length - 1; i++) {
    users = localStorage.getItem(localStorage.key(i));

    let pars = JSON.parse(users);

    let cont = document.createTextNode(
      pars.name +
        " " +
        pars.email +
        " " +
        pars.mobile +
        " " +
        pars.date +
        " " +
        pars.time
    );
    console.log(cont);
    para.style.fontSize = "15px";
    para.appendChild(cont);

    call.appendChild(para);
    console.log(para.appendChild(br));
    para.appendChild(br);

    //                    (step-3)---------------delete the existing user from the screen

    let key = localStorage.key(i);

    if (user_details.email == key) {
    //   // call.removeChild(par);
      localStorage.removeItem(key);
      localStorage.setItem(user_details.email,JSON.stringify(user_details));
    }
  }
}
