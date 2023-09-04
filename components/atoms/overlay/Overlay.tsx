'use client'
import { useDispatch, useSelector } from "react-redux";
import { OverlayDiv } from "./styles"
import { Dispatch, SetStateAction } from "react"
import { closeModalPokemon, closeModalSearch } from "@/redux/modal/actions";
import { selPokemon } from "@/redux/pokemon/actions";


export default function Overlay({
    children,
    setState,
    state
}: {
    children?: React.ReactNode,
    setState?: Dispatch<SetStateAction<boolean>>,
    state?: boolean
}) {
    const dispatch = useDispatch();
    const {pokemonView, searchView} = useSelector((rootReducer:any) => rootReducer.modalReducer);

    const closeOverlay = () => {
      pokemonView && dispatch(closeModalPokemon());
      pokemonView && setTimeout(() => dispatch(selPokemon({})), 200)
      
      searchView && dispatch(closeModalSearch());
    }

    return(
        /* viewModal ? ( */
            <OverlayDiv $view={pokemonView || searchView}>
                <div onClick={closeOverlay} className='inset-0 absolute'></div>
                {children}
            </OverlayDiv>
        /* ) : (<></>) */
    )
}