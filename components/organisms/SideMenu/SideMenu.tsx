import { PokeBall } from '@/public/assets/svg/Pokeball'
import * as Styles from './Styles'
import { Info } from 'lucide-react'
import { MouseEvent, useEffect, useRef, useState } from 'react'

export const itemsMenu = [
    {
        icon: (<PokeBall />),
        name: 'Pokemons'
    },
    {
        icon: (<Info size={21}/>),
        name: 'Sobre'
    }
]

export default function SideMenu() {
    const [selState, setSelState] = useState({})
    const firstItem = useRef<HTMLLIElement>(null)

    const handleMenuItems = (ev:MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
        setSelState({
            height: `${ev.currentTarget.offsetHeight}px`,
            top: `${ev.currentTarget.offsetTop}px`
        })
    }

    useEffect(() => {
        setSelState({
            height: `${firstItem.current?.offsetHeight}px`,
            top: `${firstItem.current?.offsetTop}px`
        })
    }, [firstItem.current])

    return(
        <Styles.SideMenu>
            <ul>
                <div style={selState}/>
                {itemsMenu.map((el, i) => (
                    <li key={i} ref={i ? null : firstItem} onClick={ev => handleMenuItems(ev)}>
                        {el.icon}
                        <span>{el.name}</span>
                    </li>
                ))}
            </ul>
        </Styles.SideMenu>
    )
}