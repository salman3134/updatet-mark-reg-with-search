const main = document.querySelector(".main");
const search = document.getElementById("search");
const searches = document.getElementById("searches");
const register = document.getElementById("register");
const users = [
  {
    name: "Sami Salman",
    image:
      "https://uploads.nialler9.com/wp-content/uploads/2013/02/03213745/ryan-vail1.jpg",
    roll: 1,
    reg: 555,
    mark: 220,
  },
  {
    name: "Bayzide Ahmed",
    image: "https://athleticsillustrated.com/wp-content/uploads/Vail_Flash.jpg",
    roll: 2,
    reg: 666,
    mark: 160,
  },
  {
    name: "Rizon Ahmed",
    image:
      "https://uploads.nialler9.com/wp-content/uploads/2023/05/30093738/Ryan-Vail-no.1-copy.webp",
    roll: 3,
    reg: 777,
    mark: 120,
  },
  {
    name: "Junayed Chur",
    image:
      "https://uploads.nialler9.com/wp-content/uploads/2023/05/30093738/Ryan-Vail-no.1-copy.webp",
    roll: 4,
    reg: 720,
    mark: 20,
  },
  {
    name: "Sahed Biswas",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/articles/2016/10/vail-ryan-nycm14-1-1488553948.jpg?resize=1200:*",
    roll: 5,
    reg: 333,
    mark: 220,
  },
  {
    name: "Sajeed Ahmed",
    image:
      "https://www.famemagazine.co.uk/wp-content/uploads/2013/10/ryan-vail-e1381500719683.jpg",
    roll: 6,
    reg: 450,
    mark: 20,
  },
  {
    name: "Nirzon Ahmed",
    image:
      "https://www.famemagazine.co.uk/wp-content/uploads/2013/10/ryan-vail-e1381500719683.jpg",
    roll: 1,
    reg: 220,
    mark: 220,
  },
  {
    name: "Samsu",
    image:
      "https://www.famemagazine.co.uk/wp-content/uploads/2013/10/ryan-vail-e1381500719683.jpg",
    roll: 1,
    reg: 555,
    mark: 220,
  },
  {
    name: "Sami Salman",
    image:
      "https://www.famemagazine.co.uk/wp-content/uploads/2013/10/ryan-vail-e1381500719683.jpg",
    roll: 1,
    reg: 20,
    mark: 220,
  },
];

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  const query = Number(search.value);
  main.innerHTML = ""; // Clear previous results

  users.forEach((item) => {
    if (item.mark === query) {
      main.innerHTML += `
       <div class="midium">
       <img src="${item.image}" alt="#"/>
       <h1>Name:${item.name}</h1>
       <p>Roll:${item.roll}</p>
       <span>Register:${item.reg}</span>
       <span>Mark:${item.mark}</span>
       </div>
      `;
    }
  });

  if (main.innerHTML === "") {
    main.innerHTML = "<p>No users found</p>";
  }
});

register.addEventListener("keyup", (e) => {
  e.preventDefault();
  const numtext = Number(register.value);
  users.forEach((item, index) => {
    if (item.reg === numtext) {
      main.innerHTML += `
    <div class="midium">
    <img src="${item.image}" alt="#"/>
    <h1>Name:${item.name}</h1>
    <p>Roll:${item.roll}</p>
    <span>Register:${item.reg}</span>
    <span>Mark:${item.mark}</span>
    </div>
    `;
    }
    if (main.innerHTML === "") {
      main.innerHTML = "<p>No users found</p>";
    }
  });
});
