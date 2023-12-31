import { PRODUCTS_PER_PAGE } from '@/constants';
import prisma from '@/helpers/prismadb';

export interface ProductsParams {
    latitude?: number;
    longitude?: number;
    category: string;
    skip?: number;
    page?: number;
}

export default async function getProducts(params: ProductsParams) {
    try {
        const { latitude, longitude, category, skip} = params;

        let query: any = {};

        if(category) {
            query.category = category;
        }

        if(latitude) {
            query.latitude = {
                gte: Number(latitude) - 0.01,
                lte: Number(latitude) + 0.01
            }
            query.longitude = {
                gte: Number(longitude) - 0.01,
                lte: Number(latitude) + 0.01
            }
        }

        const products = await prisma.product.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            },
            skip:skip ? Number(skip) : 0,
            take: PRODUCTS_PER_PAGE,
        })

        const totalItems = await prisma.product.count({ where: query})

        return {
            data: products,
            totalItems
        }

    } catch(error: any) {
        throw new Error(error)
    }
}