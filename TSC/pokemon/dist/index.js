"use strict";
const api = 'https://pokeapi.co/api/v2/pokemon/';
const input = document.getElementById('input');
const form = document.getElementById('form');
const data = document.getElementById('data');
form.addEventListener('submit', e => {
    e.preventDefault();
    const inputUrl = input.value;
    function poke() {
        fetch(api + inputUrl)
            .then(res => { return res.json(); })
            .then(data => pokeData(data))
            .catch(error => console.log(error));
    }
    function pokeData(data) {
        // const name = data.name
        console.log(data);
    }
    poke();
});
