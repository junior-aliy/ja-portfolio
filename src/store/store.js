import { configureStore } from '@reduxjs/toolkit'
import messageModalReducer from '../features/message-modal-feature.js'

export default configureStore({
  reducer: {
    messageModal: messageModalReducer
  }
})

