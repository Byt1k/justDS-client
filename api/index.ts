import { GetServerSidePropsContext, NextPageContext } from "next";
import { projectsApi } from "./projects";
import axios from "axios";

export type ApiReturnType = {
    projects: ReturnType<typeof projectsApi>,
}

export const serverUrl = 'http://178.57.222.34:1337';

export const Api = (): ApiReturnType => {

    const instance = axios.create({
        baseURL: serverUrl
    })

    return {
        projects: projectsApi(instance),
    }
}