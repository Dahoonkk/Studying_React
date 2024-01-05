import Container from "@/components/Container";
import getProducts, { ProductsParams } from "../actions/getProducsts";
import EmptyState from "@/components/EmptyState";
import ProductCard from "@/components/ProductCard";
import getCurrentUser from "../actions/getCurrentUser";
import FloatingButton from "@/components/FloatingButton";
import Categories from "@/components/categories/Categories";

interface HomeProps {
  searchParams: ProductsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  // console.log('@@@@@', products)
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <Categories />
      {products?.data.length === 0 ? (
        <EmptyState showReset/>
      ) : (
        <>
          <div className="grid gid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 2xl:gird-cols-6">
            {products.data.map((product) => (
              <ProductCard
                currentUser={currentUser}
                key={product.id}
                data={product}
              />
            ))}
          </div>
        </>
      )}
      <FloatingButton 
        href="/products/upload"
      >+</FloatingButton>
    </Container>
  );
}
