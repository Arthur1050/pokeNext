import { Dispatch, SetStateAction } from "react"
import { ModalLeftRightDiv } from "./styles"

export default function ModalLeftRight({
    children,
    setState,
    state
}:{
    children?: React.ReactNode,
    setState?: Dispatch<SetStateAction<boolean>>,
    state: boolean
}) {
    return(
        <ModalLeftRightDiv className={state ? 'viewModal' : ''} $view={state}>
            {children}
        </ModalLeftRightDiv>
    )
}