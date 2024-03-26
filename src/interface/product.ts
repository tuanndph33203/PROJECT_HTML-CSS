export interface IProduct{
    id?:number | string,
    name: string,
    price: number,
    tag: string,
    image: string,
    description: string,
    discount: number,
    active: boolean,
    featured: boolean,
    inStock: number,
    category:string
}