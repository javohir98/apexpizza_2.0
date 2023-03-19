import { Container } from '@mui/system';
import { Communicate, Dostavka, FirstPart, Mobile, Mobilephone, Sertifikat, Service, Wrapper, Yellowimg } from './Head.style';
import yellowlogo from "../../assets/icons/logo22.svg"
import tel from "../../assets/icons/tel-green.svg"
import sertifikat from "../../assets/icons/sertifikat-xalol.svg";
import { Typography } from '@mui/material';

type Props = {}

const Head = (props: Props) => {
  return (
    <Wrapper>
      <Container style={{ marginTop: "16px" }}>
        <FirstPart>
          <Service>
            <Yellowimg to={'/'}>
              <img src={`${yellowlogo}`} alt=""/>
              <div>
                  <h4>apexpizza</h4>
                  <h6>Нет места для теста</h6>
              </div>
            </Yellowimg>
            <Dostavka>
              <Typography variant='h5'>Доставка пиццы за 35 мин.</Typography>
              <h6>Работаем круглосуточно 24/7</h6>
            </Dostavka>
            <Communicate>
              <img src={`${tel}`} alt=""/>
              <div className="tel">
                  <Typography variant='h4'>(71) 202-20-20</Typography >
                  <h6>Звоните сейчас!</h6>
              </div>
            </Communicate>
          </Service>
          <Mobile to='/'>
            <h2>apexpizza</h2>
          </Mobile>
          <Sertifikat>
            <img src={`${sertifikat}`} alt=""/>
          </Sertifikat>
          <Mobilephone>
            <div className="mobilephone">
                <a href="tel:+99871 202-20-20">
                  <img src={`${tel}`} alt=""/>
                </a>
            </div>
          </Mobilephone>
        </FirstPart>
      </Container>
    </Wrapper>
  )
}

export default Head