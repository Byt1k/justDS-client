import {AxiosInstance} from "axios";
import {CommonBlock, PaginationType, ProjectType} from "@/types";

export const projectsApi = (instance: AxiosInstance) =>  ({
    async getAllProjects() {
        const {data} = await instance.get<{data: ProjectType[], meta: PaginationType}>('/api/projects?populate=*')
        return data
    },
    async getProject(id: string) {
        const {data} = await instance.get<{data: ProjectType}>(`/api/projects/${id}?populate=*`)
        return data
    },
    async getPopularProjects() {
        const {data} = await instance.get<{data: ProjectType[], meta: PaginationType}>(`/api/projects?filters[popular][$eq]=true&populate=*`)
        return data
    },
    async getCommonBlocks() {
        const {data} = await instance.get<{data: CommonBlock[]}>('/api/common-blocks')
        return data
    }
})