import { PokeBall } from '@/public/assets/svg/Pokeball'
import * as Styles from './Styles'
import { Info } from 'lucide-react'
import { useRef, useState } from 'react'

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
    const firstItem = useRef()
    const handleMenuItems = () => {

    }
    return(
        <Styles.SideMenu>
            <ul>
                <div style={{height: '32px', top: '16px'}}/>
                {itemsMenu.map((el, i) => (
                    <li ref={!i && firstItem}>
                        {el.icon}
                        <span>{el.name}</span>
                    </li>
                ))}
            </ul>
        </Styles.SideMenu>
    )
}