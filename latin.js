const vowels = ['a', 'e', 'u', 'i', 'y', 'o'];

const output = document.querySelector('#output');
const button = document.querySelector('#translate');


function pigLatin() {
  const input = document.getElementById('input').value.toLowerCase().split(' ');
  for (let i = 0; i<input.length; i++) {
    input[i] = replace(input[i]);
  }
  output.innerHTML = input.join(' ');
}

function replace(str) {
  let vowelIndex = 0;
  if(vowels.includes(str[0])) {
    return str.slice(vowelIndex) + 'ay';
  }else {
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char);
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
      }
    }
  }
}

button.addEventListener('click', pigLatin);