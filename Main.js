let speedLimit = 95, maxSpeed = 150;


container2 = document.getElementById('subContainer2');

speed = document.getElementById('speed');

speedBrake = document.getElementById('brake');

gas = document.getElementById('gas');

// Acceleration function
gas.onclick = () => {
  speed.innerText++;
  
  if (speed.innerText < speedLimit) {
    container2.setAttribute('class', 'subContainers moving');
  }
  if (speed.innerText >= speedLimit) {

    container2.setAttribute('class', 'subContainers speeding')

    navigator.vibrate(10000, 3000);
  }
  
  if (speed.innerText > maxSpeed) {
    speed.innerText = maxSpeed;
  }
}


// Brake function
speedBrake.onmousedown = () => {
  speed.innerText--;

  if (speed.innerText < speedLimit) {
    container2.setAttribute('class', 'subContainers slowing');
  }

  if (speed.innerText < 0) {
    speed.innerText = 0;
    container2.setAttribute('class', 'subContainers');
  }
}
