import Image from "next/image";

interface Props {
    pokemonId: number
}

export default function Podium({pokemonId}:Props) {
    return(
        <div className="flex flex-col items-center">
            <Image 
                className="translate-y-8"
                /* src={`https://nexus.traction.one/images/pokemon/pokemon/${viewPokemon.id}.png`} */
                src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${pokemonId}.gif`}
                height={'120'}
                width={'120'}
                alt={pokemonId + '.png'}
            />
            <div className="podium inline-flex flex-col">
                <svg height={50} width={220}>
                    <defs>
                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="50%" style={{stopColor: 'rgb(255,255,255);stop-opacity:1'}} />
                        <stop offset="100%" style={{stopColor: 'rgb(220,220,220);stop-opacity:1'}} />
                        </radialGradient>
                    </defs>
                    <path fill="url(#grad1)" d="M0 50 L20 0 L200 0 L220 50 Z"/>
                </svg>
                <div className="h-[150px] w-[220px] bg-white"></div>
                <div className="h-[300px] w-[220px] bg-white"></div>
            </div>
        </div>
    )
}