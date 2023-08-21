import Overlay from '@/components/atoms/overlay/Overlay'
import GridPokemons from '@/components/organisms/GridPokemons/GridPokemons'
import ModalPokeDetails from '@/components/organisms/ModalPokeDetails/ModalPokeDetails'
import { getDataPokemon } from "@/app/actions";

export default function Home() {

  return (
    <>
      <main className='bg-slate-100 rounded-lg overflow-auto'>
        <GridPokemons getData={getDataPokemon}/>
      </main>
      <Overlay>
        <ModalPokeDetails/>
      </Overlay>
    </>
  )
}
