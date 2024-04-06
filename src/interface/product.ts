export interface IProduct {
    _id?: number | string,
    name: string,
    slug?: string,
    price: number,
    tags: string[],
    gallery: string[], 
    attributes: any[], 
    image: string,
    description: string,
    discount: number,
    featured: boolean,
    category: string
}
