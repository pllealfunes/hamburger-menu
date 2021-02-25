"use strict"

let currDate = document.getElementById("currDate");
let form = document.getElementById("form");
let newToDo = document.getElementById("newBtn");
let clear = document.getElementById("clear");
let newItem = document.getElementById("newItem");
let itemList = document.getElementById("itemList");
let checkedItems = document.getElementById('checkedItems');
let array = [];
let id = 0;

window.addEventListener("load", function () {

   // On page load display Weekday, Month and Day
   let options = { weekday: "long", month: "long", day: "numeric" };
   let today = new Date();
   currDate.innerHTML = today.toLocaleDateString("en-US", options);

   // Look at local storage and display any saved todos
   let results = JSON.parse(localStorage.getItem("task"));

   for (let i in results) {
      let item = document.createElement("LI");
      id++;
      item.setAttribute("id", id);
      item.setAttribute("class", "incomplete");
      let checkBox = document.createElement("input");
      checkBox.setAttribute("id", "checkbox");
      let label = document.createElement("label");
      label.setAttribute("for", "checkbox");
      label.innerText = results[i];

      //ADD PROPERTIES
      checkBox.type = "checkbox";
      item.appendChild(checkBox);
      item.appendChild(label);

      let deleteButton = document.createElement("BUTTON");
      deleteButton.innerHTML = "&#xd7";
      deleteButton.setAttribute("id", "delete");



      item.appendChild(deleteButton);


      itemList.appendChild(item);


      deleteButton.onclick = deleteTask;
      checkBox.onclick = checkedItem;
      array.push(results[i]);

   }
   //});

   //Create a todo
   newToDo.addEventListener("click", function (e) {
      if (newItem.value.trim() !== "") {
         let item = document.createElement("LI");
         id++;
         item.setAttribute("id", id);
         item.setAttribute("class", "incomplete");


         let checkBox = document.createElement("input");
         checkBox.setAttribute("id", "checkbox");
         let label = document.createElement("label");
         label.setAttribute("for", "checkbox");
         label.innerText = newItem.value;

         //ADD PROPERTIES
         checkBox.type = "checkbox";
         item.appendChild(checkBox);
         item.appendChild(label);

         let deleteButton = document.createElement("BUTTON");
         deleteButton.innerHTML = "&#xd7";
         deleteButton.setAttribute("id", "delete");



         item.appendChild(deleteButton);


         itemList.appendChild(item);

         array.push(newItem.value);


         localStorage.setItem("task", JSON.stringify(array));

         deleteButton.onclick = deleteTask;
         checkBox.onclick = checkedItem;
         newItem.value = "";
      }
   });

   //Clear the whole list, array, and localstorage
   clear.addEventListener("click", function () {
      itemList.remove();
      array = [];
      localStorage.clear();
   });



   //Delete a todo
   function deleteTask(e) {
      console.log(array);
      const task = e.target.parentNode.id - 1;
      console.log(task);
      e.target.parentNode.remove();
      array.splice(task, 1);
      localStorage.setItem("task", JSON.stringify(array));
      console.log(array);
   }

   // Click on All radio buttons to see al todos
   allItems.addEventListener("click", function (e) {
      if (this.checked) {
         let incompleteTask = document.getElementsByClassName("incomplete");
         for (let i = 0; i < incompleteTask.length; i++) {
            incompleteTask[i].style.display = "block";
         }
         var completedTask = document.getElementsByClassName("completed");
         for (let j = 0; j < completedTask.length; j++) {
            completedTask[j].style.display = "block";
         }
      }
   });

   // Click on Complete radio button to see all completed todos
   checkedItems.addEventListener("click", function (e) {
      if (this.checked) {
         let incompleteTask = document.getElementsByClassName("incomplete");
         for (let i = 0; i < incompleteTask.length; i++) {
            incompleteTask[i].style.display = "none";
         }
      }
   });

   // Click on Incomplete radio button to see all incomplete todos
   uncheckedItems.addEventListener("click", function (e) {
      if (this.checked) {
         let incompleteTask = document.getElementsByClassName("incomplete");
         for (let i = 0; i < incompleteTask.length; i++) {
            incompleteTask[i].style.display = "block";
         }
         let completedTask = document.getElementsByClassName("completed");
         for (let j = 0; j < completedTask.length; j++) {
            completedTask[j].style.display = "none";
         }
      }
   });

   // Adding or removing a check mark if the task is complete or incomplete
   function checkedItem(e) {
      if (e.target.checked) {
         e.target.parentNode.setAttribute("class", "completed");
      } else {
         e.target.parentNode.classList.remove("completed");
         e.target.parentNode.setAttribute("class", "incomplete");
      }
   }
});