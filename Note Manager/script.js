var ul = document.getElementById("list");

/***************************** ADDING NEW NOTE *****************************/

document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  addInput = document.getElementById("add-input");

  if (addInput.value != "") {
    var newLi = document.createElement("li");
    var firstPara = document.createElement("p");
    var secondPara = document.createElement("p");
    var firstIcon = document.createElement("i");
    var secondIcon = document.createElement("i");
    var input = document.createElement("input");

    firstIcon.setAttribute("class", "fa fa-pencil-square-o");
    secondIcon.setAttribute("class", "fa fa-times");
    input.setAttribute("class", "edit-note");
    input.setAttribute("type", "text");

    firstPara.textContent = addInput.value;

    secondPara.appendChild(firstIcon);
    secondPara.appendChild(secondIcon);

    newLi.appendChild(firstPara);
    newLi.appendChild(secondPara);
    newLi.appendChild(input);

    var notes_list = ul.getElementsByTagName("li");
    Array.from(notes_list);


    ul.appendChild(newLi);
    
  }
});



/***************************** EDITING NOTES *****************************/

ul.addEventListener("click", function (e) {
  if (e.target.classList[1] === "fa-pencil-square-o") {
    var parentPara = e.target.parentNode;
    console.log(parentPara.style.display);
    parentPara.style.display = "none";
    var note = parentPara.previousElementSibling;
    var input = parentPara.nextElementSibling;

    input.style.display = "block";
    input.value = note.textContent;

    input.addEventListener("keypress", function (e) {
      if (e.charCode === 13) {
        if (input.value !== "") {
          note.textContent = input.value;
          parentPara.style.display = "block";
          input.style.display = "none";
        } else {
          var li = input.parentNode;
          li.parentNode.removeChild(li);
        }
      }
    });
  }

  if (e.target.classList[1] === "fa-times") {
    var list = e.target.parentNode.parentNode;
    list.parentNode.removeChild(list);
  }
});



/***************************** HIDE ITEMS *****************************/

var hideItems = document.getElementById("hide");

hideItems.addEventListener("click", function (e) {
  var label = document.querySelector("label");

  if (e.target.checked) {
    ul.style.display = "none";
    label.textContent = "UnHide notes";
  } else {
    ul.style.display = "block";
    label.textContent = "Hide notes";
  }
});




/***************************** SEARCH BAR *****************************/

var searchInput = document.querySelector("#search-note input");

searchInput.addEventListener("keyup", function (e) {
  var searchChar = e.target.value.toUpperCase();

  var notes = ul.getElementsByTagName("li");
  console.log(notes)

  Array.from(notes).forEach(function (note) {
    var parText = note.firstElementChild.textContent;

    if (parText.toUpperCase().indexOf(searchChar) !== -1) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
});

