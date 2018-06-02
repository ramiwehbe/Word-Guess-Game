window.onload = function () {

  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let categories = [
    ["elvis presley", "madonna", "beyonce", "michael jackson", "prince", "lady gaga", "celine dion"],
    ["barack-obama", "cristiano-ronaldo", "angelina-jolie", "muhammad-ali", "albert-einstein"],
    ["delhi", "shanghai", "tokyo", "mumbai", "beijing"]
  ];
  let hints = [
    ["Mystery Train", "Like a Prayer", "Single Ladies", "Billie Jean", "My Name Is Prince", "Pocker Face", "My heart will go on"],
    ["44th President of the United States", "Portuguese professional footballer", "American actress, filmmaker, and humanitarian", "Olympic and World Champion boxer", "The most celebrated scientist of the Twentieth Century"],
    ["Capital of India", "Largest city in China", "Japan’s busy capital", "India's largest city", "China’s massive capital"]
  ];
  var picI00 = new Image()
  picI00.src = "assets/images/pic1.jpg"
  var picI01 = new Image()
  picI01.src = "assets/images/pic2.jpg"
  var picI02 = new Image()
  picI02.src = "assets/images/pic3.jpg"
  var picI03 = new Image()
  picI03.src = "assets/images/pic4.jpg"
  var picI04 = new Image()
  picI04.src = "assets/images/pic5.jpg"
  var picI05 = new Image()
  picI05.src = "assets/images/pic6.jpg"
  var picI06 = new Image()
  picI06.src = "assets/images/pic7.jpg"
  var picI10 = new Image()
  picI10.src = "assets/images/pic8.jpg"
  var picI11 = new Image()
  picI11.src = "assets/images/pic9.jpg"
  var picI12 = new Image()
  picI12.src = "assets/images/pic10.jpg"
  var picI13 = new Image()
  picI13.src = "assets/images/pic11.jpg"
  var picI14 = new Image()
  picI14.src = "assets/images/pic12.jpg"
  var picI20 = new Image()
  picI20.src = "assets/images/pic13.jpg"
  var picI21 = new Image()
  picI21.src = "assets/images/pic14.jpg"
  var picI22 = new Image()
  picI22.src = "assets/images/pic15.jpg"
  var picI23 = new Image()
  picI23.src = "assets/images/pic16.jpg"
  var picI24 = new Image()
  picI24.src = "assets/images/pic17.jpg"
  let categoryNames = ['Best Singers of All Time', 'Most Famous People Around the World', 'Most Populated Cities']       // Array of topics
  let chosenCategory = [];
  var getHint;
  var word;
  var guess;
  let storedGuesses = [];
  let lives = 10;
  let counter = 0;
  let numberOfBlankSpaces = 0;
  let chosenCategoryIndex = 0;
  let chosenElementIndex = 0;
  let win = new Audio('assets/audio/win.mp3');
  let losing = new Audio('assets/audio/losing.mp3')

  // Get elements
  var showLives = document.getElementById("myLives");
  var showcategory = document.getElementById("scategory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  let buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select category
  let selectCat = function () {
    categoryName.innerHTML = categoryNames[chosenCategoryIndex];
  }

  // Create storedGuesses ul
  result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
    numberOfBlankSpaces = 0;
    for (let i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === '-' || word[i] === ' ') {
        guess.innerHTML = "-";
        numberOfBlankSpaces++;
      }
      else {
        guess.innerHTML = "_";
      }
      storedGuesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      losing.play();

    }
    for (var i = 0; i < storedGuesses.length; i++) {
      if (counter + numberOfBlankSpaces === storedGuesses.length) {
        showLives.innerHTML = "You Win!";
        win.play();
        document.images.p1.src = eval("picI" + chosenCategoryIndex + chosenElementIndex + ".src");
      }
    }
  }

  // Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  }


  // Hangman
  canvas = function () {

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


  // OnClick Function
  check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          storedGuesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    lives = 10;
    counter = 0;
  
    chosenCategoryIndex = Math.floor(Math.random() * categories.length);
    chosenCategory = categories[chosenCategoryIndex];

    chosenElementIndex = Math.floor(Math.random() * chosenCategory.length);
    word = chosenCategory[chosenElementIndex];
    word = word.replace(/\s/g, "-");

    buttons();
    storedGuesses = [];
    result();
    comments();
    selectCat();
    canvas();
  }
  play();

  // Hint
  hint.onclick = function () {
    showClue.innerHTML = "Clue: - " + hints[chosenCategoryIndex][chosenElementIndex];
  };

  // Play Again
  document.getElementById("reset").onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "Clue: - ";
    context.clearRect(0, 0, 400, 400);
    document.images.p1.src  = "assets/images/pic0.jpg"
    play();
  }
};


