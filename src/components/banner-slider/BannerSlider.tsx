import { useEffect, useState } from 'react'
import { useGetBannersQuery } from '../../redux/slices/bannerSlice'
import { IBanner } from '../../types/types'
import { Carousel, Carousels, MainCarousel } from './BannerSlider.style'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}

const BannerSlider = (props: Props) => {
  const { data: banners } = useGetBannersQuery(window.innerWidth < 425 ? 'app' : 'site')
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const renderSlides = banners?.banners?.map((banner: IBanner, index: number) => (
    <div className="karousel" key={index}>
      <div className="carusel-img">
        <img src={`${window.innerWidth < 425 ? banner?.photo_medium : banner?.photo_original}`} style={{}} loading="lazy" />
      </div>
    </div>
  ))

  const checkWidth = () => {
    window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false)
  }

  useEffect(() => {
    checkWidth()
    window.addEventListener('resize', checkWidth)

    return () => {
      window.removeEventListener('resize', checkWidth)
    }
      
  }, [])

  return (
    <MainCarousel>
      <Carousel>
        <Slider
          dots={true}
          autoplay={true}
          slidesToShow={1}
          centerMode={true}
          infinite={true}
          accessibility={true}
          autoplaySpeed={4000}>
          {renderSlides}
        </Slider>

        <div className="leftposition"></div>
        <div className="rightposition"></div>
      </Carousel>

      <Carousels>
        <Slider
          dots={!isMobile}
          autoplay={true}
          centerMode={!isMobile}
          arrows={false} 
          autoplaySpeed={3000}>
          {renderSlides}
        </Slider>
      </Carousels>
    </MainCarousel>
  )
}

export default BannerSlider