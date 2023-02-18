export type PostType = {
    id: number,
    img: string,
    title: string,
    text: string,
    tags?: string[],
    views: number
}

type ImageUrl = {
    data: {
        attributes: {
            url: string
        }
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

export type PaginationType = {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}