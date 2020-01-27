function List() {
  this.tasks = [];
};

List.prototype.addTask = function(task) {
  this.tasks.push(task);
};

function Task(name) {
  this.name = name;
  this.completed = false;
  this.subtasks = [];
};

Task.prototype.isComplete = function() {
  this.completed = true;
}

Task.prototype.addSubtasks = function(subtask) {
  this.subtasks.push(subtask);
}

var laundry = new Task("laundry");
laundry.isComplete();
console.log(laundry);

laundry.addSubtasks("sheets");
console.log(laundry);

var list = new List();
list.addTask("laundry");
console.log(list);

$(document).ready(function(){
  $("#toDoForm").submit(function(event) {
    event.preventDefault();
    var item1 = $("#item1").val();
    $("#output").text(item1);
  });
  

});