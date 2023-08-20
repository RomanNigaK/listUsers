const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({
    result: "Список пользователей сформирован",
    data: [
      {
        id: 1,
        name: "Blade",
        age: 125,
        city: "New-York",
        photo: "/profile/blade.jpg",
        contacts: [2, 3],
      },
      {
        id: 2,
        name: "Женщина кошка",
        age: 30,
        city: "New-York",
        photo: "/profile/cat.jpg",
        contacts: [1],
      },
      {
        id: 3,
        name: "д. Федор",
        age: 12,
        city: "Простоквашино",
        photo: "/profile/fedor.jpg",
        contacts: [1, 2, 4],
      },
      {
        id: 4,
        name: "Anna",
        age: 25,
        city: "3деваятое царство",
        photo: "/profile/gerl.jpg",
        contacts: [1, 2, 3],
      },
      {
        id: 5,
        name: "Legolas",
        age: 1520,
        city: "Мордор",
        photo: "/profile/legolas.jpg",
        contacts: [1, 2, 3, 4],
      },
      {
        id: 6,
        name: "Leonardo",
        age: 20,
        city: "New-York",
        photo: "/profile/leo.jpg",
        contacts: [8],
      },
      {
        id: 7,
        name: "Зайка",
        age: 5,
        city: "Лес",
        photo: "/profile/rabbit.png",
        contacts: [3, 4],
      },
      {
        id: 8,
        name: "Шредер",
        age: 45,
        city: "New-York",
        photo: "/profile/shreder.jpg",
        contacts: [6],
      },
      {
        id: 9,
        name: "Йода",
        age: 900,
        city: "Корусант",
        photo: "/profile/yoda.jpg",
        contacts: [1, 2, 3, 4, 5, 6, 7, 8],
      },
    ],
  });
});

module.exports = router;
