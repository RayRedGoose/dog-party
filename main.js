// navigation

var howNav = document.getElementById('how-nav');

howNav.onmouseover = function () {
  var howPreview = document.getElementById('how-preview');
    howPreview.classList.remove('hidden');
    howPreview.classList.add('shadow-animation');
}

howNav.onmouseout = function () {
  var howPreview = document.getElementById('how-preview');
    howPreview.classList.add('hidden');
    howPreview.classList.remove('shadow-animation');
}

var whatNav = document.getElementById('what-nav');

whatNav.onmouseover = function () {
  var whatPreview = document.getElementById('what-preview');
    whatPreview.classList.remove('hidden');
    whatPreview.classList.add('shadow-animation');
}

whatNav.onmouseout = function () {
  var whatPreview = document.getElementById('what-preview');
    whatPreview.classList.add('hidden');
    whatPreview.classList.remove('shadow-animation');
}

var factsNav = document.getElementById('facts-nav');

factsNav.onmouseover = function () {
  var factsPreview = document.getElementById('facts-preview');
  factsPreview.classList.remove('hidden');
  factsPreview.classList.add('shadow-animation');
}

factsNav.onmouseout = function () {
  var factsPreview = document.getElementById('facts-preview');
  factsPreview.classList.add('hidden');
  factsPreview.classList.remove('shadow-animation');
}

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

var wrapper = document.querySelector('.text-wrapper');
var howButton = document.getElementById('how-button');

howButton.onclick = function() {
    var howText = document.getElementById('how-text');

    if (howText.style.display !== 'none') {
        wrapper.style.display = 'none';
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
        wrapper.style.display = 'none';
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
        wrapper.style.display = 'none';
        factsButton.style.width = '200px';
    } else {
        factsText.style.display = 'block';
        factsButton.style.width = '300px';
    }
};

// changer block - show block

var showButton = document.getElementById('show-button');

showButton.onclick = function() {
    var anyForm = document.querySelector('.column-modification');
    var howForm = document.getElementById('how-column-modification');
    var whatForm = document.getElementById('what-column-modification');
    var factsForm = document.getElementById('facts-column-modification');

    if (anyForm.classList.contains('hidden')) {
        howForm.classList.remove('hidden');
        whatForm.classList.remove('hidden');
        factsForm.classList.remove('hidden');
        howForm.classList.add('slide-animation');
        whatForm.classList.add('slide-animation');
        factsForm.classList.add('slide-animation');
    } else {
        howForm.classList.add('hidden');
        whatForm.classList.add('hidden');
        factsForm.classList.add('hidden');
        howForm.classList.remove('slide-animation');
        whatForm.classList.remove('slide-animation');
        factsForm.classList.remove('slide-animation');
    }
};

// changer block - adding information to colomn "how"

var howChangeButton = document.getElementById('how-change-button');

howChangeButton.onclick = function () {
  event.preventDefault()

  var howText = document.getElementById('how-text');
  var howColorPicker = document.getElementById("how-color-picker");
  var howColor = howColorPicker.options[howColorPicker.selectedIndex].value;
  var howTextSize = document.getElementById('how-pixel').value;

  if (howColor == 'red') {

    if (howTextSize != '' && howTextSize < 40) {
      howText.style.fontSize = howTextSize + "px";
      howText.style.color = "red";
    } else {
      howText.style.fontSize = "18px";
      howText.style.color = "red";
    }

  } else if (howColor == 'green') {

    if (howTextSize != '' && howTextSize < 40) {
      howText.style.fontSize = howTextSize + "px";
      howText.style.color = "green";
    } else {
      howText.style.fontSize = "18px";
      howText.style.color = "green";
    }

  } else if (howColor == 'blue') {

    if (howTextSize != '' && howTextSize < 40) {
      howText.style.fontSize = howTextSize + "px";
      howText.style.color = "blue";
    } else {
      howText.style.fontSize = "18px";
      howText.style.color = "blue";
    }

  } else {

    if (howTextSize != '' && howTextSize < 40) {
      howText.style.fontSize = howTextSize + "px";
      howText.style.color = "black";
    } else {
      howText.style.fontSize = "18px";
      howText.style.color = "black";
    }

  }

  document.getElementById("how-column-modification").reset();

};

// changer block - adding information to colomn "what"

var whatChangeButton = document.getElementById('what-change-button');

whatChangeButton.onclick = function () {
  event.preventDefault()

  var whatText = document.getElementById('what-text');
  var whatColorPicker = document.getElementById("what-color-picker");
  var whatColor = whatColorPicker.options[whatColorPicker.selectedIndex].value;
  var whatTextSize = document.getElementById('what-pixel').value;

  if (whatColor == 'red') {

    if (whatTextSize != '' && whatTextSize < 40) {
      whatText.style.fontSize = whatTextSize + "px";
      whatText.style.color = "red";
    } else {
      whatText.style.fontSize = "18px";
      whatText.style.color = "red";
    }

  } else if (whatColor == 'green') {

    if (whatTextSize != '' && whatTextSize < 40) {
      whatText.style.fontSize = whatTextSize + "px";
      whatText.style.color = "green";
    } else {
      whatText.style.fontSize = "18px";
      whatText.style.color = "green";
    }

  } else if (whatColor == 'blue') {

    if (whatTextSize != '' && whatTextSize < 40) {
      whatText.style.fontSize = whatTextSize + "px";
      whatText.style.color = "blue";
    } else {
      whatText.style.fontSize = "18px";
      whatText.style.color = "blue";
    }

  } else {

    if (whatTextSize != '' && whatTextSize < 40) {
      whatText.style.fontSize = whatTextSize + "px";
      whatText.style.color = "black";
    } else {
      whatText.style.fontSize = "18px";
      whatText.style.color = "black";
    }

  }

  document.getElementById("what-column-modification").reset();

};

// changer block - adding information to colomn "facts"

var factsChangeButton = document.getElementById('facts-change-button');

factsChangeButton.onclick = function () {
  event.preventDefault()

  var factsText = document.getElementById('facts-text');
  var factsColorPicker = document.getElementById("facts-color-picker");
  var factsColor = factsColorPicker.options[factsColorPicker.selectedIndex].value;
  var factsTextSize = document.getElementById('facts-pixel').value;

  if (factsColor == 'red') {

    if (factsTextSize != '' && factsTextSize < 40) {
      factsText.style.fontSize = factsTextSize + "px";
      factsText.style.color = "red";
    } else {
      factsText.style.fontSize = "18px";
      factsText.style.color = "red";
    }

  } else if (factsColor == 'green') {

    if (factsTextSize != '' && factsTextSize < 40) {
      factsText.style.fontSize = factsTextSize + "px";
      factsText.style.color = "green";
    } else {
      factsText.style.fontSize = "18px";
      factsText.style.color = "green";
    }

  } else if (factsColor == 'blue') {

    if (factsTextSize != '' && factsTextSize < 40) {
      factsText.style.fontSize = factsTextSize + "px";
      factsText.style.color = "blue";
    } else {
      factsText.style.fontSize = "18px";
      factsText.style.color = "blue";
    }

  } else {

    if (factsTextSize != '' && factsTextSize < 40) {
      factsText.style.fontSize = factsTextSize + "px";
      factsText.style.color = "black";
    } else {
      factsText.style.fontSize = "18px";
      factsText.style.color = "black";
    }

  }

  document.getElementById("facts-column-modification").reset();

};
