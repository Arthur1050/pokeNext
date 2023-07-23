'use client'
import ModalLeftRight from "@/components/atoms/modalLeftRight/ModalLeftRight";
import Image from "next/image";
import { useSelector } from "react-redux";

interface Pokemon {
    selected: {
        name: string,
        id: string,
        base_experience: number,
        height: number,
        weight: number
    }
}

export default function ModalPokeDetails() {
    const {selected}:Pokemon = useSelector((rootReducer:any) => rootReducer.pokemonReducer);
    const {viewModal} = useSelector((rootReducer:any) => rootReducer.modalReducer);
    
    console.log(selected)

    return(
        <ModalLeftRight state={viewModal}>
            {selected && (
                <>
                    <div>
                        <Image 
                            src={`https://nexus.traction.one/images/pokemon/pokemon/${selected.id}.png`}
                            height={'120'}
                            width={'120'}
                            alt={selected.name + '.png'}
                        />
                        <p>{selected.name}</p>
                        <p>EXP Base: {selected.base_experience}</p>
                        <p>Altura: {selected.height}</p>
                        <p>Peso: {selected.weight}</p>
                    </div>
                </>
            )}
        </ModalLeftRight>
    )
}