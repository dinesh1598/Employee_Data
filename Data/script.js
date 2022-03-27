var userlist;

fetch(`https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5`).then(
  (res) => {
    res.json().then((data) => {
      console.log(data);
      if (data.length > 0) {
        this.userlist = data;

        var temp = "";
        let i = 0;
        data.forEach((itemData) => {
          temp += `<tr onclick='displaydata(${i})'>`;
          temp += "<td>" + itemData.first_name + "</td>";
          temp += "<td>" + itemData.last_name + "</td>";
          temp += "<td>" + itemData.username + "</td>";
          temp += "<td>" + itemData.employment.title + "</td>";
          temp += "<td>" + itemData.address.country + "</td></tr>";

          i++;
        });
        document.getElementById("data").innerHTML = temp;
      }
    });
  }
);
function displaydata(index) {
  console.log("data", index);
  console.log(this.userlist[index]);
  const {
    id,
    uid,
    first_name,
    last_name,
    password,
    phone_number,
    email,
    date_of_birth,
    avatar,
  } = this.userlist[index];
  document.getElementById("id").textContent = id;
  document.getElementById("id").textContent = id;
  document.getElementById("uid").textContent = uid;
  document.getElementById("first_name").textContent = first_name;
  document.getElementById("last_name").textContent = last_name;
  document.getElementById("password").textContent = password;
  document.getElementById("phone_number").textContent = phone_number;
  document.getElementById("email").textContent = email;
  document.getElementById("date_of_birth").textContent = date_of_birth;
  document.getElementById("avatar").src = avatar;

  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  document.getElementById("greet").innerHTML =
    "<b>" + greet + "</b> " + first_name;
}
