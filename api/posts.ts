import {AxiosInstance} from "axios";
import {ContactsType, PaginationType, PostType, TagType} from "@/types";

export const postsApi = (instance: AxiosInstance) => ({
    async getPosts() {
        const {data} = await instance.get<{ data: PostType[], meta: PaginationType }>('/api/posts?populate=*')
        return data
    },
    async getPopularPosts() {
        const {data} = await instance.get<{ data: PostType[], meta: PaginationType }>('/api/posts?filters[popular][$eq]=true&populate=*')
        return data
    },
    async getPost(id: string) {
        const {data} = await instance.get(`/api/posts/${id}?populate=*`)
        return data
    },
    async getTags() {
        return await instance.get<{ data: TagType[] }>('/api/tags').then(res => res.data.data)
    }
})