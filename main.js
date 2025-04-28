class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static checkAgeGap(instance1, instance2) {
    return instance1.age > instance2.age ? "first person is older" : "second person is older";
  }
}

const user1 = new User("Marco", "Rossi", 30, "bologna");
const user2 = new User("Silvio", "Bianchi", 29, "milano");

console.log(User.checkAgeGap(user1, user2));

/////////////////////////////////////////////////////////////pet exercise
const petList = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  static checkOwner(instance1, instance2) {
    return instance1.ownerName === instance2.ownerName ? true : false;
  }
}

const myForm = document.getElementById("myForm");

const listIt = function (obj) {
  const container = document.getElementsByClassName("container")[0];
  console.log(obj);

  const myList = document.createElement("ul");

  const itemPet = document.createElement("li");
  itemPet.innerText = `pet name: ${obj.petName}, owner: ${obj.ownerName}, species: ${obj.species}, breed: ${obj.breed}`;

  myList.appendChild(itemPet);
  container.appendChild(myList);
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("input");
  const inputValues = Array.from(inputs).map((input) => input.value);

  let currentPet = new Pet(...inputValues);
  listIt(currentPet);
  petList.push(currentPet);
});

function ctrlOwner() {
  console.log(Pet.checkOwner(petList[0], petList[1]));
}

const checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click", ctrlOwner);
