'use client'
import Overlay from '@/components/atoms/overlay/Overlay'
import GridPokemons from '@/components/organisms/GridPokemons/GridPokemons'
import ModalPokeDetails from '@/components/organisms/ModalPokeDetails/ModalPokeDetails'
import { closeModal } from '@/redux/modal/actions'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch();

  
  const closeOverlay = () => {
    dispatch(closeModal());
  }

  return (
    <>
      <main className='bg-slate-100 rounded-lg overflow-auto'>
        <GridPokemons />
      </main>
      <Overlay>
        <div onClick={closeOverlay} className='inset-0 absolute'></div>
        <ModalPokeDetails />
      </Overlay>
      {
        /* viewModal && (
        ) */
      }
    </>
  )
}
