import { GetServerSidePropsContext, NextPageContext } from "next";
import { projectsApi } from "./projects";
import axios from "axios";

export type ApiReturnType = {
    projects: ReturnType<typeof projectsApi>,
}

export const serverUrl = 'http://127.0.0.1:1337';

export const Api = (): ApiReturnType => {

    const instance = axios.create({
        baseURL: serverUrl
    })

    return {
        projects: projectsApi(instance),
    }
}