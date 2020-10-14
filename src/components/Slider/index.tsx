import * as S from './styles'
import { ISlider } from './types'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay, Navigation])

const Slider = ({ testID, images }: ISlider) => {
  return (
    <S.Wrapper data-testid={testID}>
      <Swiper
        centeredSlides={true}
        navigation
        autoplay
        autoHeight={true}
        loop={true}
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          ))}
      </Swiper>
    </S.Wrapper>
  )
}

export default Slider
