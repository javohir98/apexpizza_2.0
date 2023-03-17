import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { IProduct } from '../../types/types'

type Props = {
  product: IProduct
}

const ProductCard = styled.div`
  height: 100%;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 1px 2px;
  padding: 20px;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img:hover {
    transform: translateY(10px);
    transition: 0.5s;
  }
`;

const Title = styled.h5`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(30, 27, 38, 0.8);
    margin: 30px 0 10px 0;
`;

const P = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: rgba(30, 27, 38, 0.5);
`

const ProductItem = (props: Props) => {
  return (
    <Grid item lg={3} md={4} sm={6} p={1} xs={6} height='100%'>
      <ProductCard>
        <ImgBox>
          <img src={props.product.photo_medium} width={'100%'} alt="" />
        </ImgBox>
        <Title>{props.product.name}</Title>
        <P>{props.product.description?.slice(0,50)}</P>
      </ProductCard>
    </Grid>
  )
}

export default ProductItem