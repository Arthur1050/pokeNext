'use client'
import { useDispatch, useSelector } from "react-redux";
import { OverlayDiv } from "./styles"
import { Dispatch, SetStateAction } from "react"
import { closeModal } from "@/redux/modal/actions";
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
    const {viewModal} = useSelector((rootReducer:any) => rootReducer.modalReducer);
    const closeOverlay = () => {
      dispatch(closeModal());
      setTimeout(() => dispatch(selPokemon({})), 200)
    }
    return(
        /* viewModal ? ( */
            <OverlayDiv className={viewModal ? 'overlayView':''} $view={viewModal}>
                <div onClick={closeOverlay} className='inset-0 absolute'></div>
                {children}
            </OverlayDiv>
        /* ) : (<></>) */
    )
}