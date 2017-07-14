let firstVal = 0;
let found = false;

function checkOne(pV) {
  if (pV % 1 === 0) {
  console.log(pV);
  firstVal = pV;
  found = true;
  }
}

function checkTwo(pV) {
  if (pV % 2 === 0) {
  checkOne(pV)
  }
}

function checkThree(pV) {
  if (pV % 3 === 0) {
  checkTwo(pV)
  }
}

function checkFour(pV) {
  if (pV % 4 === 0) {
  checkThree(pV)
  }
}

function checkFive(pV) {
  if (pV % 5 === 0) {
  checkFour(pV)
  }
}


function checkSix(pV) {
  if (pV % 6 === 0) {
  checkFive(pV)
  }
}


function checkSeven(pV) {
  if (pV % 7 === 0) {
  checkSix(pV)
  }
}


function checkEight(pV) {
  if (pV % 8 === 0) {
  checkSeven(pV)
  }
}


function checkNine(pV) {
  if (pV % 9 === 0) {
  checkEight(pV)
  }
}


function checkTen(pV) {
  if (pV !== 0 && pV % 10 === 0) {
  checkNine(pV)
  }
}

for (var i = 0; i < 10000; i++) {
  if(found === false) {
    checkTen(i);
  }
}
document.getElementById("num").innerHTML = `<p>${firstVal}</p>`;
