function List() {
  this.tasks = [];
  this.currentId = 0;
};

List.prototype.addTask = function(task) {
  this.assignId(task);
  this.tasks.push(task);
};

List.prototype.assignId = function(task) {
  this.currentId += 1;
  task.id = this.currentId;
}

List.prototype.findTask = function(name){
  for (let i=0; i<this.tasks.length; i++){
    if (this.tasks[i].name==name) {
      return this.tasks[i];
    }
  }
}


function Task(name) {
  this.name = name;
  this.completed = false;
  this.subtasks = [];
};


Task.prototype.changeComplete = function() {
  this.completed = !this.completed;
}

Task.prototype.addSubtasks = function(subtask) {
  this.subtasks.push(subtask);
}

function SubTask(name){
  this.name = name;
  this.completed = false;
}


// var laundry = new Task("laundry");
// laundry.isComplete();
// console.log(laundry);

// laundry.addSubtasks("sheets");
// console.log(laundry);

$(document).ready(function(){
  var list = new List();

  $("#toDoForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#item1").val();
    var userTask = new Task(userInput);

    list.addTask(userTask); 
    $("#outputList").append(`<input type="checkbox" name="checkbox" id="${userTask.id}" class="checkbox" value=""><label for=${userTask.id}>${userTask.name}</label><br>`);

    //FOLLOWING CODE NOT COMPLETED
    $("#subTaskForm").submit(function(event){
      event.preventDefault();
      var userInput2 =$("#subTask1").val();
      var subTask1 = new SubTask(userInput2);
      var choiceItemOne =$("#choiceItem1").val();
      var targetTask = list.findTask(choiceItemOne);
      if (targetTask) {
        targetTask.addSubtasks(subTask1);
        console.log(targetTask.subtasks);
      }    
    })

    $(`#${userTask.id}`).change(function() {
      userTask.changeComplete();
      if (userTask.completed) {
        $(`label[for='${userTask.id}']`).addClass("strikethrough");
      } else {
        $(`label[for='${userTask.id}']`).removeClass("strikethrough");
      }
    });

  });




});