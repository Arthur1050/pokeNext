`use server`
export async function getDataPokemon(selectedId:string):Promise<{}> {
    'use server'
    const api = 'https://pokeapi.co/api/v2/pokemon/';
  
    const res = await fetch(`${api + selectedId}`);
    const data = await res.json();
  
    return new Promise(resolve => resolve(data))
  }