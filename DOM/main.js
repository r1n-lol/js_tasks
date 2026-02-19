const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addBtn");

function addNewTask() {
  //Получаем текст из поля ввода
  const taskText = itemInput.value;

  if (!itemInput.value.trim()) {
    alert("Поле не может быть пустым");
    return;
  }

  //Создаем новый элемент списка <li>
  const newItem = document.createElement("li");

  //Заполняем его содержимое
  newItem.innerHTML = `
      ${taskText}
      <button class="delete-btn">Удалить</button>
    `;
    newItem.classList.add('task');

  //Добавляем новый элемент в список (DOM)
  taskList.appendChild(newItem);

  //Очищаем поле ввода
  itemInput.value = "";
}

addButton.addEventListener("click", addNewTask);

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    //Находим родительский <li> этой кнопки
    const listItem = event.target.parentElement;

    //Удаляем этот <li> из DOM
    listItem.remove();
  }

  if(event.target.tagName === "LI"){
    event.target.classList.toggle('completed');
  }

});
