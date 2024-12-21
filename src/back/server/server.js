const express = require("express"); // Импортируем Express
const app = express(); // Создаем приложение Express
const port = 4000; // Порт, на котором будет работать сервер

// Маршрут для корневой страницы
app.get("/", (req, res) => {
  res.send("Привет! Это мой первый сервер на Node.js 🚀");
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
