import Overlay from '@/components/atoms/overlay/Overlay'
import GridPokemons from '@/components/organisms/GridPokemons/GridPokemons'
import ModalPokeDetails from '@/components/organisms/ModalPokeDetails/ModalPokeDetails'
import { Suspense } from 'react'

export default function Home() {

  return (
    <>
      <main className='bg-slate-100 rounded-lg overflow-auto'>
        <GridPokemons />
      </main>
      <Overlay>
        <ModalPokeDetails/>
      </Overlay>
    </>
  )
}
