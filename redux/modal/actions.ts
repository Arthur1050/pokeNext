import { modalActionsTypes } from "./action-types"

export const openModal = () => ({
    type: modalActionsTypes.VIEW,
    payload: true
})

export const closeModal = () => ({
    type: modalActionsTypes.VIEW,
    payload: false
})