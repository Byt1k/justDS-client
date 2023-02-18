import {AxiosInstance} from "axios";
import {PaginationType, ProjectType} from "@/types";

export const projectsApi = (instance: AxiosInstance) =>  ({
    async getAllProjects() {
        const {data} = await instance.get<{data: ProjectType[], meta: PaginationType}>('/api/projects?populate=*')
        return data
    },
    async getProject(id: string) {
        const {data} = await instance.get(`/api/projects/${id}?populate=*`)
        return data
    }
})