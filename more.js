const user = JSON.parse(localStorage.getItem("user"));
console.log("user2", user);

function createUser(user) {
  const div = document.createElement("div");
  div.classList.add("card");

  const firstName = document.createElement("h1");
  firstName.textContent = user.firstName;
  div.appendChild(firstName);

  const image = document.createElement("img");
  image.src = user.image;
  div.appendChild(image);

  const name = document.createElement("p");
  name.textContent = `NameSurname: ${user.firstName} ${user.lastName} `;
  div.appendChild(name);

  const age = document.createElement("p");
  age.textContent = `Age: ${user.age}`;
  div.appendChild(age);

  const phone = document.createElement("p");
  phone.textContent = `Сontact number: ${user.phone}`;
  div.appendChild(phone);

  const gender = document.createElement("p");
  gender.textContent = `Gender:  ${user.gender}`;
  div.appendChild(gender);

  const address = document.createElement("p");
  address.textContent = `Address: ${user.address.address}`;
  div.appendChild(address);

  const birthDate = document.createElement("p");
  birthDate.textContent = `BirthDate: ${user.birthDate}`;
  div.appendChild(birthDate);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = ` EyeColor: ${user.eyeColor}`;
  div.appendChild(eyeColor);

  const ip = document.createElement("p");
  ip.textContent = `Ip: ${user.ip}`;
  div.appendChild(ip);

  const userAgent = document.createElement("p");
  userAgent.textContent = `UserAgent:  ${user.userAgent}`;
  div.appendChild(userAgent);

  document.body.appendChild(div);
}

createUser(user);
