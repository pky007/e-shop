export type NavLinkType = {
    name: string,
    to: string,
    status: boolean,
}
export type HeaderRightIconType = {
    name: string,
    to: string,
    status: boolean,
    text?: string,
    icon: string
}

export type ProductType = {
    name: string,
    price: string,
    cutPrice: string,
    image?: string[],
    thumbnail: string,
    status: boolean,
    inStock: boolean,
    saleTag?: string
}

export type CategoryType = {
    name: string,
    thumbnail?: string,
    status: boolean,
    inStock?: boolean,
}

export type AdsType = {
    thumbnail: string,
    to?:string
}