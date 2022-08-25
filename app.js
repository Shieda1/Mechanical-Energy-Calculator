// https://calculator.swiftutors.com/mechanical-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mechanicalEnergyRadio = document.getElementById('mechanicalEnergyRadio');
const massofanObjectRadio = document.getElementById('massofanObjectRadio');
const velocityRadio = document.getElementById('velocityRadio');
const heightfromtheGroundRadio = document.getElementById('heightfromtheGroundRadio');

let mechanicalEnergy;
const g = 9.80665;
let massofanObject = v1;
let velocity = v2;
let heightfromtheGround = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

mechanicalEnergyRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass of an Object (kg)';
  variable2.textContent = '(v) Velocity (m/s)';
  variable3.textContent = '(h) Height from the Ground (m)';
  massofanObject = v1;
  velocity = v2;
  heightfromtheGround = v3;
  result.textContent = '';
});

massofanObjectRadio.addEventListener('click', function() {
  variable1.textContent = '(M.E) Mechanical Energy (J)';
  variable2.textContent = '(v) Velocity (m/s)';
  variable3.textContent = '(h) Height from the Ground (m)';
  mechanicalEnergy = v1;
  velocity = v2;
  heightfromtheGround = v3;
  result.textContent = '';
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = '(M.E) Mechanical Energy (J)';
  variable2.textContent = '(m) Mass of an Object (kg)';
  variable3.textContent = '(h) Height from the Ground (m)';
  mechanicalEnergy = v1;
  massofanObject = v2;
  heightfromtheGround = v3;
  result.textContent = '';
});

heightfromtheGroundRadio.addEventListener('click', function() {
  variable1.textContent = '(M.E) Mechanical Energy (J)';
  variable2.textContent = '(m) Mass of an Object (kg)';
  variable3.textContent = '(v) Velocity (m/s)';
  mechanicalEnergy = v1;
  massofanObject = v2;
  velocity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mechanicalEnergyRadio.checked)
    result.textContent = `Mechanical Energy = ${computeMechanicalEnergy().toFixed(2)} J`;

  else if(massofanObjectRadio.checked)
    result.textContent = `Mass of an Object = ${computeMassofanObject().toFixed(2)} kg`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)} m/s`;

  else if(heightfromtheGroundRadio.checked)
    result.textContent = `Height from the Ground = ${computeHeightfromtheGround().toFixed(2)} m`;
})

// calculation

function computeMechanicalEnergy() {
  return 0.5 * Number(massofanObject.value) * Math.pow(Number(velocity.value), 2) + Number(massofanObject.value) * g * Number(heightfromtheGround.value);
}

function computeMassofanObject() {
  return Number(mechanicalEnergy.value) / (0.5 * Math.pow(Number(velocity.value), 2) + g * Number(heightfromtheGround.value));
}

function computeVelocity() {
  return Math.sqrt(((Number(mechanicalEnergy.value) - (Number(massofanObject.value) * g * Number(heightfromtheGround.value))) * 2) / Number(massofanObject.value));
}

function computeHeightfromtheGround() {
  return (Number(mechanicalEnergy.value) - (0.5 * Number(massofanObject.value) * Math.pow(Number(velocity.value), 2))) / (Number(massofanObject.value) * g);
}