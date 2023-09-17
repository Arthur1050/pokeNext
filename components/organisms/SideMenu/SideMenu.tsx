'use client'
import { PokeBall } from '@/public/assets/svg/Pokeball'
import * as Styles from './Styles'
import { Award, Info } from 'lucide-react'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface IMenuItem {
    icon: JSX.Element
    name: string
    route: string
}

export const itemsMenu = [
    {
        icon: <PokeBall />,
        name: 'Pokemons',
        route: '/'
    },
    {
        icon: <Award size={21}/>,
        name: 'Ranking',
        route: '/ranking'
    },
    {
        icon: <Info size={21}/>,
        name: 'Sobre',
        route: '/About'
    },
]

export default function SideMenu() {
    const [selState, setSelState] = useState({})
    const firstItem = useRef<HTMLLIElement>(null)

    const router = useRouter()

    const handleMenuItems = (ev:MouseEvent<HTMLLIElement, globalThis.MouseEvent>, obj:IMenuItem) => {
        setSelState({
            height: `${ev.currentTarget.offsetHeight}px`,
            top: `${ev.currentTarget.offsetTop}px`
        })
        router.push(obj.route)
    }

    useEffect(() => {
        setSelState({
            height: `${firstItem.current?.offsetHeight}px`,
            top: `${firstItem.current?.offsetTop}px`
        })
    }, [])

    return(
        <Styles.SideMenu>
            <ul>
                <div style={selState} />
                {itemsMenu.map((el, i) => (
                    <li key={i} ref={i ? null : firstItem} onClick={ev => handleMenuItems(ev, el)}>
                        {el.icon}
                        <span>{el.name}</span>
                    </li>
                ))}
            </ul>
        </Styles.SideMenu>
    )
}