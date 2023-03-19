import styled from "@emotion/styled";

export const MainCarousel = styled.div`
    .karousel{
        padding:0 10px;
        width: 100%!important;
        height: 100%;
        border-radius: 20px;
    
        .carusel-img {
  
            img{
                width: 100%;
                height: 100%;
                border-radius:20px;
            }
        }
    }
`;

export const Carousel = styled.div`
    margin-top: 25px;
    overflow:hidden;
    position: relative;

    @media (max-width: 1000px) {
        display: none;
    }
    .slick-list {
        padding: 13px 50px !important;
    }
    .slick-prev {
        width:30px !important;
        height: 30px !important;
        left: 4% !important;
        color: black !important;
        display: none!important;

        :hover{
            display: block!important;
        }

        &::before{
            font-size: 30px!important;
            color: black !important;
            opacity: 1!important;
        }
    }
    .slick-next {
        width:30px !important;
        height: 30px !important;
        right: 4% !important;
        color: black !important;
        display: none!important;

        :hover{
            display: block!important;
        }

        &::before{
            font-size: 30px!important;
            color: black !important;
            opacity: 1!important;
        }
    }
    .slick-track {
        display: flex;
        justify-content: center;

        @media (max-width: 1000px) {
          height:auto!important;
        }

        .slick-slide{
            border-radius: 33px;
            opacity: 0.2;

            .karousel{
                .carusel-img{
                    width: 100%;
                    @media (min-width: 1300px) {
                        height: 373px;
                    }
  
                }
            }
        }
        .slick-active {
            opacity: 1;
            .karousel {
    
                .carusel-img{
                    width: auto;
                }
            }
            @media (min-width: 1400px) {
                width: 82rem!important;
            }
            @media (max-width:1400px) {
                width: 71rem!important;
            }
            @media (max-width: 1200px) {
                width: 65rem!important;
            }
            @media (max-width: 1000px) {
                width: 55rem!important;  
            }
            @media (max-width: 800px) {
                width: 10%!important; 
            }
            @media (max-width: 630px) {
                width: 70vh!important;
            }
        }
    }
    .slick-center {
        overflow: hidden;
    }
    .slick-slider {
        .slick-dots {
            bottom: -6px!important;
            li {
                button {
                    &::before{
                        font-size: 13px!important;
                    }
                }
            }
        }
        &:hover {
            .slick-dots {
                opacity: 1!important;
            }
        }
    }
    .leftposition {
        position: absolute;
        left: 0;
        top: 0;
        width: 16%;
        height: 100%;
        background-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, white 40%);
        opacity: 1;
        @media (max-width: 2200px) {
            width: 8%;
        }
        @media (max-width: 1700px) {
            width: 3%;
        }
        @media (max-width: 1500px) {
            display: none;
        }
    }
    .rightposition {
        position: absolute;
        right: 0;
        top: 0;
        width: 16%;
        height: 100%;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, white 40%);
        opacity: 1;
        @media (max-width: 2200px) {
            width: 8%;
        }
        @media (max-width: 1700px) {
            width: 3%;
        }
        @media (max-width: 1500px) {
            display: none;
        }
    }
`;

export const Carousels = styled.div`
    display: none;
    margin-top: 25px;

    @media (max-width: 1000px) {
        display: block;

        .slick-arrow {
            display: none;
        }
    }
`;