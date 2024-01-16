// Selecting DOM elements
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container'); // Corrected typo in id

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        // Create a span for the delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7 ";

        // Append the span to the list item
        li.appendChild(span);

        // Append the list item to the list container
        listContainer.appendChild(li);
    }

    // Clear the input box after adding a task
    inputBox.value = '';

    // Save data to local storage
    saveData();
}

// Event listener for selecting completed task and deleting task
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class for completed tasks
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent list item when the delete button is clicked
        e.target.parentElement.remove();

        // Save data to local storage after deletion
        saveData();
    }
}, false);

// Function to save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Initial display of tasks on page load
showTask();
