const str1 = document.querySelector('#str1');
const str2 = document.querySelector('#str2');
const compareStr = document.querySelector('#compareStr');
const resultStr = document.querySelector('#resultStr');

compareStr.addEventListener('click', () => {
  console.log('ok');
  if (str1.value.length > str2.value.length) {
    resultStr.innerHTML = `${str1.value} is bigger than ${str2.value}`;
  } else if (str1.value.length < str2.value.length) {
    resultStr.innerHTML = `${str1.value} is smaller than ${str2.value}`;
  } else {
    resultStr.innerHTML = `Strings have same length`;
  }
});