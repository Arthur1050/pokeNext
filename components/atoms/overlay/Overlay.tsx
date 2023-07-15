import { OverlayDiv } from "./styles"
import { Dispatch, SetStateAction } from "react"

export default function Overlay({
    children,
    setState,
    state
}: {
    children?: React.ReactNode,
    setState?: Dispatch<SetStateAction<boolean>>,
    state: boolean
}) {
    return(
        <OverlayDiv $view={state}>
            {children}
        </OverlayDiv>
    )
}