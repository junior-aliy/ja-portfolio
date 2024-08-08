import React, { useState } from 'react'
import MessageModal from './message-modal'
import { useSelector } from 'react-redux'

const Modall = () => {
    const msgModal = useSelector(state => state.messageModal.value)
  return (
    <>
        {/* message modall */}
        {
            msgModal ? (
                <MessageModal />   
            ) : ''
        }
    </>
  )
}

export default Modall