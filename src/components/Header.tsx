import styled from '@emotion/styled'
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import useScrollspy from '../tools/hooks/useScrollspy';
import { IProductGroup } from '../types/types';
import CartHeader from './cart-header/CartHeader';

type Props = {
  data: any
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all .3s ease;
  border-radius: 0;
  z-index: 1;
  margin-top: 18px;

  &.sticky {
    box-shadow: -5px 0 15px rgb(0 0 0 / 20%);
  }
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  max-width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar{
    width: 0px!important;
    height: 0px!important;
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding: 5px 15px;
    border-radius: 100px;
    background: #fbf8ce;
    transition: all .3s ease;
    margin: 10px 0;
    font-family: Rubik;
    color: #1E1B26;
    font-size: 18px;
    font-weight: 300;

    &.active {
      background-color: #fcea04!important; 
    }
  }
`;

const Header = (props: Props) => {
  const { data } = props;
  const [isSticky, setIsSticky] = useState(false)
  const ids = data && getIds(data?.data)
  const activeId = useScrollspy(ids ?? [], 59)

  const listenScrollEvent = () => {
    const pizza = document.getElementById(`${data?.data[0].id}`) as HTMLElement;

    if(window.scrollY > pizza.offsetTop) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [data]);

  function getIds(products: IProductGroup[]) {
    let arr: string[] = [];

    products?.forEach((item: IProductGroup) => {
      arr.push(item.id as string)
    })

    return arr;
  }

  return (
    <>
      <Wrapper id='header' className={isSticky ? 'sticky' : ''}>
          <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <LinkList>
              {data?.data?.map((item: IProductGroup) => (
                <Link href={`#${item.id}`} key={item.id}>
                  <span className={item?.id === activeId ? 'active' : ''}>{item.name}</span>
                </Link>
              ))}
            </LinkList>
            <CartHeader />
          </Container>
      </Wrapper>
    </>
  )
}

export default Header