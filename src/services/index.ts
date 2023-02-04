import axios from "axios"
import { CardManipulation } from "./interfaces"

export const CodeleapApis = {
    getCards: async () => {
        try {
            const response = await axios.get('https://codeleap-crud-back-production.up.railway.app/item')
            return response.data
        } catch (error) {
            throw error
        }
    },

    getCardsById: async (id: string) => {
        try {
            const response = await axios.get(`https://codeleap-crud-back-production.up.railway.app/item/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    },

    deleteCard: async (id: string) => {
        try {
            const response = await axios.delete(`https://codeleap-crud-back-production.up.railway.app/item/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    },

    createNewcard: async ({userName, content, createdAt, title}: CardManipulation) => {
        const payload = {
            userName, 
            content, 
            createdAt, 
            title
        }

        try {
            const response = await axios.post(`https://codeleap-crud-back-production.up.railway.app/item/`, payload)
            return response.data
        } catch (error) {
            throw error
        }
    },

    updateNewCard: async ({userName, content, createdAt, title}: CardManipulation) => {
        const payload = {
            userName, 
            content, 
            createdAt, 
            title
        }

        try {
            const response = await axios.patch(`https://codeleap-crud-back-production.up.railway.app/item/`, payload)
            return response.data
        } catch (error) {
            throw error
        }
    }
}