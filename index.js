// Object to keep track of each task's state

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const task3 = newTask("Change Lightbulb", "\ud83d\udc0e\ud83d\udc71\u2764"); //task 2
const tasks = [task1, task2, task3];

task1.logState();
task1.markCompleted();
task1.logState();




