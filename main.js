// name-the-dog block

var namingButton = document.getElementById('name-button');

namingButton.onclick = function (event) {
  event.preventDefault()

  var nameDog = document.getElementById("name-the-dog").value;
  var nameSpan = document.getElementById("dog-name");

  if (nameDog != '') {
    nameSpan.innerHTML = nameDog;
  } else {
    nameSpan.innerHTML = "Some dog";
  }

  document.getElementById("name-form").reset();
}

// how-what-facts block js

var howButton = document.getElementById('how-button');

howButton.onclick = function() {
    var howText = document.getElementById('how-text');

    if (howText.style.display !== 'none') {
        howText.style.display = 'none';
        howButton.style.width = '200px';
    } else {
        howText.style.display = 'block';
        howButton.style.width = '300px';
    }
};

var whatButton = document.getElementById('what-button');

whatButton.onclick = function() {
    var whatText = document.getElementById('what-text');

    if (whatText.style.display !== 'none') {
        whatText.style.display = 'none';
        whatButton.style.width = '200px';
    } else {
        whatText.style.display = 'block';
        whatButton.style.width = '300px';
    }
};

var factsButton = document.getElementById('facts-button');

factsButton.onclick = function() {
    var factsText = document.getElementById('facts-text');

    if (factsText.style.display !== 'none') {
        factsText.style.display = 'none';
        factsButton.style.width = '200px';
    } else {
        factsText.style.display = 'block';
        factsButton.style.width = '300px';
    }
};
