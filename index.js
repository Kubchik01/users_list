const USERS_LIST_API = "https://dummyjson.com/users";
const USER_DETAILS_API = (id) => "https://dummyjson.com/users/${id} ";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

document.body.appendChild(wrapper);

function getUsers() {
  fetch(USERS_LIST_API)
    .then((response) => response.json())
    .then((data) => {
      console.log("data: ", data);

      const { users } = data;

      users.forEach((user) => {
        card(user);
      });
    });
}

getUsers();

function card(user) {
  const div = document.createElement("div");
  const image = document.createElement("img");
  const h1 = document.createElement("h1");
  const email = document.createElement("p");

  const button = document.createElement("button");
  button.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify(user));
    window.open("../more.html", "_self");
  });
  button.classList.add("button");
  button.textContent = "More";

  // const lastName = document.createElement["h2"];

  // lastName.textContent = user.lastName;
  email.textContent = user.email;
  h1.innerHTML = `${user.firstName} ${user.lastName} `;
  // div.appendChild(lastName);

  image.src = user.image;
  image.classList.add("image");

  div.classList.add("card");
  div.appendChild(h1);
  div.appendChild(email);
  div.appendChild(image);
  div.appendChild(button);
  div.appendChild(button);
  wrapper.appendChild(div);
}

const footer = document.createElement("footer");

const div = document.createElement("div");
div.classList.add("footer-div");

const h1 = document.createElement("h1");
h1.textContent = "O ur contact number:";

const br = document.createElement("br");

const p = document.createElement("p");
p.textContent = "+996 777 17 27 37";
p.classList.add("footer-p");

footer.appendChild(div);
footer.appendChild(h1);
footer.appendChild(p);
footer.appendChild(br);

document.body.appendChild(footer);

// !НЕ ВАЖНО

// // Создаем таблицу
// const tableUser = document.createElement("table");

// // Проходимся по свойствам объекта USER
// for (const key in USER) {
//   // Создаем строку таблицы
//   const row = document.createElement("tr");

//   // Создаем ячейку для ключа
//   const keyCell = document.createElement("td");
//   keyCell.textContent = key;
//   row.appendChild(keyCell);

//   // Создаем ячейку для значения
//   const valueCell = document.createElement("td");
//   valueCell.textContent = USER[key];
//   row.appendChild(valueCell);

//   // Добавляем строку в таблицу
//   tableUser.appendChild(row);
// }

// // Добавляем таблицу на страницу
// document.body.appendChild(tableUser);

// const properties = [
//   "firstName",
//   "lastName",
//   "age",
//   "email",
//   "phone",
//   "image",
//   "address",
//   "company",
// ];

// const list = document.createElement("ul");

// for (const property of properties) {
//   if (property === "image") {
//     const listItem = document.createElement("li");
//     const imageElement = document.createElement("img");
//     imageElement.src = USER[property];
//     listItem.appendChild(imageElement);
//     list.appendChild(listItem);
//   } else if (property === "address" || property === "company") {
//     const listItem = document.createElement("li");
//     const subList = document.createElement("ul");
//     listItem.textContent = property;

//     for (const subProperty in USER[property]) {
//       const subListItem = document.createElement("li");
//       subListItem.textContent = `${subProperty}: ${USER[property][subProperty]}`;
//       subList.appendChild(subListItem);
//     }

//     listItem.appendChild(subList);
//     list.appendChild(listItem);
//   } else if (USER.hasOwnProperty(property)) {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${property}: ${USER[property]}`;
//     list.appendChild(listItem);
//   }
// }

// document.body.appendChild(list);
