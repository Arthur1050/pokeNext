import Overlay from '@/components/atoms/overlay/Overlay'
import GridPokemons from '@/components/organisms/GridPokemons/GridPokemons'
import ModalsView from '@/components/organisms/ModalsView/ModalsView';

export default function Home() {

  return (
    <>
      <main>
        <GridPokemons />
      </main>
      <Overlay>
        <ModalsView/>
      </Overlay>
    </>
  )
}
