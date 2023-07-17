import { useSelector } from "react-redux";
import { OverlayDiv } from "./styles"
import { Dispatch, SetStateAction } from "react"


export default function Overlay({
    children,
    setState,
    state
}: {
    children?: React.ReactNode,
    setState?: Dispatch<SetStateAction<boolean>>,
    state?: boolean
}) {
    const {viewModal} = useSelector((rootReducer:any) => rootReducer.modalReducer);

    return(
        <OverlayDiv className={viewModal ? 'overlayView':''} $view={viewModal}>
            {children}
        </OverlayDiv>
    )
}