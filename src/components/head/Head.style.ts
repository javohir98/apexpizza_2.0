import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    overflow-x: hidden;
`;

export const FirstPart = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 786px) {
        justify-content: center;
    }
`;

export const Service = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;

    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (max-width: 786px) {
        display: none;
    }
`;

export const Yellowimg = styled(Link)`
    border-radius: 17px;
    width: 223px;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration:none;

    h4 {
        font-family: Comfortaa;
        font-style: normal;
        font-weight: bold;
        font-size: 23px;
        line-height: 26px;
        color: #010400;
    }

    h6 {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 28px;
        color: #010400;
    }
`;

export const Dostavka = styled.div`
    h5 {
  
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #1E1B26;
    }

    h6 {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        color: rgba(30, 27, 38, 0.5);
    }
`;

export const Communicate = styled.div`
    display: flex;
  
    .tel {
        margin-left: 15px;

        h4 {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: #1E1B26;
        }

        h6 {
            font-family: Rubik;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 28px;
            color: rgba(30, 27, 38, 0.5);
        }
    }
`;

export const Mobile = styled(Link)`
    display: none;
    text-decoration: none;

    h2 {
        font-family: Comfortaa;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 33px;

        color: #1E1B26;
    }

    @media (max-width: 786px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Sertifikat = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    @media (max-width: 786px) {
        display: none;
    }
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const Mobilephone = styled.div`
    display: none;
    @media (max-width: 786px) {
        display: block;
        margin-left: 15px;
    }
`;