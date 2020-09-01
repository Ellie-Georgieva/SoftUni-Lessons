const test = document.querySelector('.test')

test.addEventListener('click', function(){
    alert('nqkakuv tekst');
})

const firstNum = document.querySelector('.firstNum')
const secondNum = document.querySelector('.secondNum')
const result = document.querySelector('.result')


const button = document.querySelector('#fun')

button.addEventListener('click', function() {
    result.value = +firstNum.value % +secondNum.value
})