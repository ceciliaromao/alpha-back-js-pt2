const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const compareNum = document.querySelector('#compareNum');
const resultNum = document.querySelector('#resultNum');

compareNum.addEventListener('click', () => {
  if (num1.value > num2.value) {
    resultNum.innerHTML = `${num1.value} > ${num2.value}`;
  } else if (num1.value < num2.value) {
    resultNum.innerHTML = `${num1.value} < ${num2.value}`;
  } else {
    resultNum.innerHTML = `${num1.value} = ${num2.value}`;
  }
});
