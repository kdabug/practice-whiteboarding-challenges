//PRACTICE WITH REDUCE

const pets = [
  { name: "Brady", age: 3 },
  { name: "Moe", age: 1 },
  { name: "Sadie", age: 10 },
  { name: "Winston", age: 14 }
];

const oldPets = pets.filter(el => el.age > 5).map(el => el.name);

console.log(oldPets);

const youngPets = pets.reduce((acc, currentPet) => {
  if (currentPet.age < 5) {
    acc = [...acc, currentPet.name];
  }
  return acc;
}, []);
console.log(youngPets);
