import { BannerSlider, Head, Header } from "./components"
import ProductList from "./components/product-list/ProductList"
import { useGetProductsQuery } from "./redux/slices/productSlice"

const App = () => {
  const { data } = useGetProductsQuery({})

  return (
    <>
      <Head />
      <BannerSlider />
      <Header data={data} />
      <ProductList data={data} />
    </>
  )
}

export default App