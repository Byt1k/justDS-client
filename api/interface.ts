import {AxiosInstance} from "axios"
import {ContactsType} from "@/types";

export const interfaceApi = (instance: AxiosInstance) => ({
    async getContacts() {
        const contacts = await instance.get<{ data: { attributes: ContactsType } }>('/api/contact')
            .then(res => res.data.data.attributes)
        return contacts
    }
})