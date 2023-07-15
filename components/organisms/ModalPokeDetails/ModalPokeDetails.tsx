import ModalLeftRight from "@/components/atoms/modalLeftRight/ModalLeftRight";
import { useSelector } from "react-redux";

export default function ModalPokeDetails() {
    const {viewModal} = useSelector((rootReducer:any) => rootReducer.modalReducer);

    return(
        <ModalLeftRight state={viewModal}>
            <p></p>
        </ModalLeftRight>
    )
}