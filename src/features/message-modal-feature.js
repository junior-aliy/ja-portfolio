import { createSlice } from '@reduxjs/toolkit'

export const messageModalSlice = createSlice({
    name: 'messageModal',
    initialState: {
        value: false
    },
    reducers: {
        toggleModal: state => {
            state.value = !state.value
        },
        closeModal: state => {
            state.value = false
        },
    }
})

// Action creators are generated for each case reducer function
export const { toggleModal, closeModal } = messageModalSlice.actions

export default messageModalSlice.reducer