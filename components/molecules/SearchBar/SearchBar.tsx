'use client'
import { Search } from "lucide-react";
import { SearchBarStyles } from "./Styles";
import { useDispatch } from "react-redux";
import { openModalSearch } from "@/redux/modal/actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    return(
        <SearchBarStyles onClick={() => dispatch(openModalSearch())}>
            <Search className="text-zinc-400" size={20}/>
            <span className="text-sm text-zinc-400">Pesquisar por Pokemon...</span>
        </SearchBarStyles>
    )
}