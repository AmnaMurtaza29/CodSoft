document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("inputbox");
    const taskList = document.getElementById("taskList");

    inputBox.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && inputBox.value.trim() !== "") {
            addTask(inputBox.value);
            inputBox.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentElement.remove();
        }
    });

    function addTask(task) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item");
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
    }
});
