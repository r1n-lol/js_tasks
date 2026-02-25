const button = document.getElementById("loadBtn");

button.addEventListener("click", async () => {
  try {
    const module = await import("./greeting.js");
    const message = module.sayHello("Анна");
    console.log(message);
  } catch (error) {
    console.error("Ошибка загрузки модуля:", error);
  }
});