const arrOfObjects = [
  {
    id: 1,
    name: "Jonas",
    lastName: "Doe",
    hobbies: ["fishing", "sowing", "driving"],
    isAvailable: true
  },
  {
    id: 2,
    name: "Jonas",
    lastName: "Doe",
    hobbies: ["fishing", "sowing", "driving"],
    isAvailable: true
  },
  {
    id: 3,
    name: "Jonas",
    lastName: "Doe",
    hobbies: ["fishing", "sowing", "driving"],
    isAvailable: false
  }
];

const hobbies = arrOfObjects
  .filter(available => {
    return available.isAvailable === true;
  })
  .map(hobby => {
    return hobby.hobbies;
  });

console.log(hobbies);
