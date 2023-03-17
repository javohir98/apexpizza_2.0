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
                <Typography variant='h4' mb={4}>{item.name}</Typography>
                <Grid container>
                    {item?.products?.map((product: any) => (
                        <ProductItem product={product} />
                    ))}
                </Grid>
            </section>
        ))}
    </Container>
  )
}

export default ProductList