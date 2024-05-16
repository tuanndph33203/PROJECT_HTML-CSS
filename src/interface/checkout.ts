export interface ICheckout {
    userId: string;
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    streetAddress: string;
    city: string;
    zipCode: string;
    phone: string;
    email: string;
    additionalInfo: string;
    total: number;
    items: { productId: string, price: number, quantity: number }[];
}
