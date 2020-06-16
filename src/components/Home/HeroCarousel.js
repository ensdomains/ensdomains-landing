import React from "react"
import styled from "@emotion/styled"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import manageImg from "./Carousel/manage.png"
import searchImg from "./Carousel/search.png"
import registerImg from "./Carousel/register.png"

const HeroContainer = styled("div")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
`

export default function HeroCarousel(props) {
  return (
    <HeroContainer>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <img src={manageImg} />
          </Slide>
          <Slide index={1}>
            <img src={manageImg} />
          </Slide>
          <Slide index={2}>
            <img src={manageImg} />.
          </Slide>
        </Slider>
      </CarouselProvider>
    </HeroContainer>
  )
}
