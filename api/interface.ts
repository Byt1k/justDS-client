import {AxiosInstance} from "axios"
import {ContactsType} from "@/types";

export const interfaceApi = (instance: AxiosInstance) => ({
    async getContacts() {
        return await instance.get<{ data: { attributes: ContactsType } }>('/api/contact')
            .then(res => res.data.data.attributes)
    },
    async getServices() {
        const {data} = await instance.get('/api/services')
        return data
    },
    async getStages() {
        const {data} = await instance.get('/api/stages')
        return data
    }
})