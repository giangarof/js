type Pokemon = {
    id:number,
    name: string,
    height:number,
    weight:number,
    image:string,
    abilities: string[]
}

const fetchData = async (pokemon: string):Promise<void> => {
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const data = await fetch(api)
    const res = await data.json()

    // in functionAbility() Remember to threat the parameter as object type
    const functionAbility = (abilities_param:{ability:{name:string}} []):string[] => {
        const abilities: string[] = []
        for(let x = 0; x < abilities_param.length; x++){
            abilities.push(abilities_param[x].ability.name)
            console.log(abilities_param[x].ability.name)
        }
        return abilities
    }
    
    const poke:Pokemon = {
        id: res.id,
        name: res.species.name,
        height: res.height,
        weight: res.weight,
        image: res.sprites.front_default,
        abilities: functionAbility(res.abilities)
        
    }
    // console.log(poke)
}

// fetchData('giratina-altered')



