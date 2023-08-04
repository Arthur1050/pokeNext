import Overlay from '@/components/atoms/overlay/Overlay'
import GridPokemons from '@/components/organisms/GridPokemons/GridPokemons'
import ModalPokeDetails from '@/components/organisms/ModalPokeDetails/ModalPokeDetails'
import { Suspense } from 'react'
import { GridPokemonsStyle } from '@/components/organisms/GridPokemons/styles'
import { SkeletonDiv } from '@/components/atoms/SkeletonDiv/SkeletonDiv'

function SKDGridPokemon() {
  const cards = [];
  for(let i = 0; i <= 27; i++) {
    cards.push(
      <SkeletonDiv className='rounded-lg bg-red-700 w-[8rem] h-[11rem] flex-grow'/>
    )
  }
  return(
    <GridPokemonsStyle className=''>
      {cards}
    </GridPokemonsStyle>
  )
}

export default function Home() {

  return (
    <>
      <main className='bg-slate-100 rounded-lg overflow-auto'>
        <Suspense fallback={<SKDGridPokemon />}>
          <GridPokemons />
        </Suspense>
      </main>
      <Overlay>
        <ModalPokeDetails/>
      </Overlay>
    </>
  )
}
