import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"

export default function Home({ products }) {

  console.log(products)

  return (
    <div className="text-3xl">      
      <ProductList products={products}/>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()
  console.log(products)

  return {
    props: { products }, 
  }
}