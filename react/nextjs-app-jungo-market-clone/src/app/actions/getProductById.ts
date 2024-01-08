import prisma from "@/helpers/prismadb";

interface Params {
    productId? : string
}

export default async function getProductById(params: Params) {
    try {
        const {productId} = params;
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                user: true
            }
        })

        console.log('@@@@@@@@product ', product);

        if(!product) return null;

        return product;

        // return {
        //     ...product,
        //     createdAt: product.createdAt.toString(),
        //     updatedAt: product.updatedAt.toString(),
        //     user: {
        //         ...product.user,
        //         createdAt: product.user.createdAt.toString(),
        //         updatedAt: product.user.updatedAt.toString()
        //     }
        // }

    } catch (error: any) {
        throw new Error(error);
    }
}