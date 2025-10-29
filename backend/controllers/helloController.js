// backend/controllers/helloController.js
export const getHelloMessage = (req, res) => {
  res.json({ message: "Hello from Express MVC backend 👋" });
};
