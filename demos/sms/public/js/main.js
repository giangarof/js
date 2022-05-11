const numberInput = document.getElementById('number');
const textInput = document.getElementById('msg');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click', send, false);

function send(){
    const number = numberInput.value.replace(/\D/g, '');
    const text = textInput.value;

    fetch('/', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({number:number, text:text})
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}