import { Container, Grid, Typography } from '@mui/material'
import { IProductGroup } from '../../types/types'
import ProductItem from './ProductItem'

type Props = {
    data: any
}

const ProductList = (props: Props) => {
    const { data } = props;

  return (
    <Container id='con'>
        {data?.data?.map((item: IProductGroup) => (
            <section id={item.id} key={item.id}>
                <Typography variant='h4' mt={4} mb={2}>{item.name}</Typography>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {item?.products?.map((product: any) => (
                        <ProductItem product={product} key={product?.id} />
                    ))}
                </Grid>
            </section>
        ))}
    </Container>
  )
}

export default ProductList