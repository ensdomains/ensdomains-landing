import React from "react"
import styled from "@emotion/styled"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import manageImg from "./manage.png"
import searchImg from "./search.png"
import registerImg from "./register.png"
import ManageIcon from "./ManageIcon"
import SearchIcon from "./SearchIcon"
import RegisterIcon from "./RegisterIcon"

const CarouselContainer = styled("div")`
  position: relative;
  .slide {
    background: transparent;
  }

  .carousel-root {
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
      order: 2;
    }
    div:nth-child(2) {
      order: 1;
    }

    .thumbs {
      margin: 0;
      display: flex;
      justify-content: center;
    }

    .thumb {
      border: none;
      margin: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 85px !important;
    }

    .thumb.selected. {
      border: none;
    }

    .thumb.selected g {
      opacity: 1;
    }

    .dot {
      display: none;
    }

    .thumb:hover {
      transform: translateY(-20px);
    }

    .thumb.selected .dot {
      display: block;
    }
  }
`

const BG = styled("div")`
  position: absolute;
  height: 400px;
  width: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
`

const Slide = styled("div")`
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
  }
`

const Dot = styled("div")`
  background: white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`

const customRenderThumb = children =>
  children.map((item, i) => {
    if (i === 0) {
      return (
        <>
          <SearchIcon />
          <Dot className="dot" />
        </>
      )
    }
    if (i === 1) {
      return (
        <>
          <RegisterIcon />
          <Dot className="dot" />
        </>
      )
    }
    if (i === 2) {
      return (
        <>
          <ManageIcon />
          <Dot className="dot" />
        </>
      )
    }
  })

export default function HeroCarousel(props) {
  return (
    <CarouselContainer>
      <BG />
      <Carousel
        centerMode
        centerSlidePercentage={65}
        selectedItem={1}
        showIndicators={false}
        renderThumbs={customRenderThumb}
      >
        <Slide>
          <img src={searchImg} />
        </Slide>
        <Slide>
          <img src={registerImg} />
        </Slide>
        <Slide>
          <img src={manageImg} />
        </Slide>
      </Carousel>
    </CarouselContainer>
  )
}
