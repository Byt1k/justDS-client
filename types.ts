import {ParsedUrlQuery} from "querystring";
import {ReactMarkdownNames} from "react-markdown/lib/ast-to-react";

type ImageUrl = {
    data: {
        attributes: {
            url: string
        }
    }
}

export type TagType = {
    id: number,
    attributes: {
        key: string,
        value: string
    }
}

export type PostType = {
    id: number,
    attributes: {
        title: string,
        readingTime: string,
        author: {
            data: UserType
        }
        cover: ImageUrl,
        previewText: string,
        content: ReactMarkdownNames,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        source: string
        tags: {
            data: TagType[]
        },
        views: number
    }
}

export type ProjectType = {
    id: number,
    attributes: {
        type: string,
        title: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        preview: ImageUrl,
        presentation: ImageUrl
    }
}

export type CommonBlock = {
    id: number,
    attributes: {
        title: string,
        description: string,
        link: string,
    }
}

export type UserType = {
    id: number,
    attributes: {
        username: string,
        fullName: string
    }
}

export type PaginationType = {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}

export type ContactsType = {
    email: string,
    tel: string
}

export type Service = {
    id: number,
    attributes: {
        title: string,
        description: string
    }
}

export type Stage = {
    id: number,
    attributes: {
        title: string,
        description: string
    }
}

export interface IParams extends ParsedUrlQuery {
    id: string
}

export type ContactForm = {
    values: {
        project: string,
        tel: string
    },
    isSubmitting: boolean
}