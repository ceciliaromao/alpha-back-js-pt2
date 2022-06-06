const birthday = document.querySelector('#birthday');
const gender = document.querySelector('#gender').value;
const calculate = document.querySelector('#calculate');
const result = document.querySelector('#result');

const maleLimit = 26699;
const femaleLimit = 29255;

calculate.addEventListener('click', () => {
  const birth = new Date(birthday.value);
  const now = new Date();
  const diffTime = Math.abs(now - birth);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

  if (gender == 'male') {
    result.innerHTML = `You have ${maleLimit - diffDays} days left.`;
  } else {
    result.innerHTML = `You have ${femaleLimit - diffDays} days left.`;
  }

})