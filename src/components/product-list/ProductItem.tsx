import styled from '@emotion/styled'
import { Button, Grid } from '@mui/material'
import { IProduct } from '../../types/types'
import labelCart from "../../assets/icons/aIcon.svg"

type Props = {
  product: IProduct
}

const ProductCard = styled.div`
  height: 100%;
  border-radius: 14px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 1px 2px; */
  padding: 20px;
  cursor: pointer;
  /* padding-bottom: 57px; */
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
  font-weight: 400;
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
`;

const PriceCartBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 12px;

  /* position: absolute;
  bottom: 0; */
`;

const ButtonWrap = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;

  button {
    height: 42px;
    min-width: 42px;
    border-radius: 50%;
    background-color: #FFDB27;

    &:hover {
      background-color: #FFDB27;
    }
  }

  &:hover button {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
`;

const Price = styled.h6`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #1E1B26;
`;

const ProductItem = (props: Props) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={6}>
      <ProductCard style={{height: '100%'}}>
        <ImgBox>
          <img src={props.product.photo_medium} width={'100%'} alt="" />
        </ImgBox>
        <Title>{props.product.name}</Title>
        <P>{props.product.description?.slice(0,50)}</P>
        <PriceCartBlock>
          <ButtonWrap>
            <Button><img src={labelCart} /></Button>
          </ButtonWrap>
          <Price>От {props.product.price} сум</Price>
        </PriceCartBlock>
      </ProductCard>
    </Grid>
  )
}

export default ProductItem