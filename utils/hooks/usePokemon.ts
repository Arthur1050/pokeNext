import { useCallback, useEffect, useState } from "react";

export interface Pokemon {
    name: string,
    id: number,
    base_experience: number,
    height: number,
    weight: number
    types: Array<{
        slot: number,
        type: {name: string, url: string}
    }>,
    stats: Array<{
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }>
}

export const getPokemon = async (id:number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: "no-cache"
    });

    const data = (await res.json()) as Pokemon;

    return data;
}