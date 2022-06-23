var btn = document.getElementById("button");
var input = document.getElementById("input");
var list = document.getElementById("list");

function inputLength() {
  return input.value.length;
}

function labelPrep() {
  var label = document.createElement("label");
  label.className = "label-text";
  label.appendChild(document.createTextNode(input.value));

  return label;
}

function checkboxPrep() {
  var inpt = document.createElement("input");
  inpt.type = "checkbox";
  inpt.name = input.value;
  inpt.id = input.value;
  inpt.className = "checkbox-list";
  inpt.addEventListener("click", doneItem);

  return inpt;
}

function deletePrep() {
  var del = document.createElement("button");
  del.appendChild(document.createTextNode("Delete"));
  del.addEventListener("click", deleteItem);

  return del;
}

function listPrep() {
  var li = document.createElement("li");
  li.append(checkboxPrep(), labelPrep(), deletePrep());

  list.appendChild(li);

  input.value = "";
}

function btnAddList() {
  if (inputLength() > 0) {
    listPrep();
  }
}

function keyAddList(event) {
  if (inputLength() > 0 && event.key == "Enter") {
    listPrep();
  }
}
function deleteItem(event) {
  var item = event.target;
  item.parentNode.remove();
}

function doneItem(event) {
  var item = event.target;
  item.nextSibling.classList.toggle("done");
}

btn.addEventListener("click", btnAddList);
input.addEventListener("keypress", keyAddList);
