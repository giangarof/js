class Pokemon{
    constructor(){
        this.api = `https://pokeapi.co/api/v2/pokemon?limit=151`
        this.arrayPokemons = []
        this.score = 0
        this.findPokemon = ''
    }

    // Fetch data from api
    async fetchData(){
        fetch(this.api)
            .then(res => res.json())
            .then(data => {
                this.setRandom(data.results)
                
            })
            .catch(err => console.log(err))
    }

    // Randomize name and url. 
    async setRandom(pokemon){
        const shuffled = pokemon.sort(() => 0.5 - Math.random());
        const select6 = shuffled.slice(0,6)     // select the first 6
        this.random(select6)                    // random url from the first 6
        
    }
    
    // from setRandom(), we get the url of the selected pokemons.
    // In this method, I'm fetching those links and storing them in an array
    async random(pokemons){
        const name = pokemons.map(p => p.name)
        // this.randomOneName(name)
        const selected = Math.floor(Math.random() * name.length)
        const findName = name[selected]
        this.findPokemon = findName
        document.getElementById('findName').innerHTML = `Find this Pokemon: ${findName}`


        const arr = pokemons.map(p => (p.url))
        const arrimgs = []
        const findup = []
        const store = []
        for (const url of arr) {
            try {
                let response = await fetch(url);
                let data = await response.json();

                let alt = data.forms[0].name
                let image = data.sprites.front_default
    
                store.push({alt, image})
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        
        this.setImg(store)
        

    }

    // In this method, I do set the url in the dom
    // also, i do set the pokemon name in the alt attribute
    async setImg(store){
        console.log(store)
        const container = document.getElementById('img-container');
        container.innerHTML = ''
        // Create and append new img elements for each image URL
        store.forEach(data => {
            const img = document.createElement('img');
            img.src = data.image;
            img.alt = data.alt
            img.id = 'poke'

            img.addEventListener('click', () => { this.scoretrack(img.alt)})
            container.appendChild(img);
            // console.log(data)
            
            
        });

    }

    //keep score track
    async scoretrack(alt){
        const wrong = document.getElementById('error')
        if(alt === this.findPokemon){
            this.score += 1
            this.updatescore()
            this.start()
        } else if (alt !== this.findPokemon){
            this.score -= 1
            wrong.innerText = 'Wrong, try again!'
            this.updatescore()
            if(this.score === 0){

                wrong.innerText = 'Game Over!'
                setTimeout(() => {
                    this.score = 0;
                    this.updatescore();
                    this.start();
                }, 2000);
            }
        }
        // console.log(alt)
    }

    updatescore(){
        const scoreElement = document.getElementById('score');
        scoreElement.innerHTML = `Score: ${this.score}`;
    }

    async start(){
        const documentDiv = document.getElementById('div')
        const btn = document.getElementById('btn')

        if(documentDiv){
            documentDiv.innerHTML = ""
            btn.innerHTML = 'Shuffle again'

            // Structure
            const game = document.createElement('div')
            game.id='game'

            const p = document.createElement('p')
            p.id = 'findName'
            
            const img = document.createElement('img')
            // img.id = 'img'

            const wrong = document.createElement('p')
            wrong.id = 'error'

            const score = document.createElement('p')
            score.id = 'score'
            score.innerHTML = `Score: ${this.score}`
        
            
            // Append
            game.appendChild(p)
            game.appendChild(wrong)
            // game.appendChild(img)
            documentDiv.appendChild(game)
            game.appendChild(score)
        }
        
        this.fetchData()
    }

 }



// start the game
const game = new Pokemon()
function start(){
    game.start()
}