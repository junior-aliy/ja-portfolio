import React, { useCallback, useEffect, useState } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import HomePage from '../pages/home-page'
import { Modall, Navbar, TopBar } from '../components/root'
import { ButtonCommon } from '../components/common'
import { BsPhoneLandscape } from 'react-icons/bs'
import { MdMessage } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, toggleModal } from '../features/message-modal-feature'

const App = () => {
  const msgModal = useSelector(state => state.messageModal.value)
  const dispatch = useDispatch()

  return (
    <div className='max-w-[1920px] w-full mx-auto '>
        <TopBar />
        <Navbar />
        <main className='relative w-full h-full'>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
            <Modall />
            <ButtonCommon icon={<MdMessage className='size-7' />} clickHandler={() => {
              console.log('clicked')
              dispatch(toggleModal())
            }} classHandler={`fixed bottom-10 right-10 text-white bg-green-600 animate-[pulse_3s_infinite] ${msgModal ? 'opacity-[0.5]' : 'opacity-[1]'}`}/>
        </main>
    </div>
  )
}

export default App