import axios from "axios";
import {projectsApi} from "./projects";
import {interfaceApi} from "@/api/interface";
import {postsApi} from "@/api/posts";

export type ApiReturnType = {
    projects: ReturnType<typeof projectsApi>,
    interface: ReturnType<typeof interfaceApi>,
    posts: ReturnType<typeof postsApi>
}

export const serverUrl = 'http://178.57.222.34:1337';
// export const serverUrl = 'http://127.0.0.1:1337';

export const Api = (): ApiReturnType => {

    const instance = axios.create({
        baseURL: serverUrl
    })

    return {
        projects: projectsApi(instance),
        interface: interfaceApi(instance),
        posts: postsApi(instance)
    }
}