const api: string = 'https://pokeapi.co/api/v2/pokemon/';
const input = document.getElementById('input') as HTMLInputElement;
const form = document.getElementById('form') as HTMLFormElement;
const data = document.getElementById('data') as HTMLElement;

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputUrl = input.value;

    function poke():void{
        fetch(api + inputUrl)
            .then(res => {return res.json()})
            .then(data => pokeData(data))
            .catch(error => console.log(error))
    }

    function pokeData(data:any):void{
        // const name = data.name
        console.log(data)
        console.log(data.name)
        console.log(data.types[0].type.name)
        console.log(data.weight)
        console.log(data.location_area_encounters)
    }



    poke();
})