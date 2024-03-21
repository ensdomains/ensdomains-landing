import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import mq from '../../../mediaQuery';
import { Button } from '../../Typography';
import manageImg from './manage.png';
import ManageIcon from './ManageIcon';
import registerImg from './register.png';
import RegisterIcon from './RegisterIcon';
import searchImg from './search.png';
import SearchIcon from './SearchIcon';

const CarouselContainer = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .slide {
        background: transparent;
        div {
            flex-direction: column;
        }
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
            display: none;
            justify-content: center;

            ${mq.medium`
        display: flex;
      `}
        }

        .thumb {
            border: none;
            margin: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: auto !important;

            &:hover {
                cursor: pointer;
            }

            &:hover h3 {
                opacity: 1;
            }

            img {
                align-self: center;
            }
        }

        .thumb.selected {
            border: none;
        }

        .thumb.selected g {
            opacity: 1;
        }

        .thumb.selected h3 {
            opacity: 1;
        }
    }
`;

const Bg = styled('div')`
    position: absolute;
    height: 150px;
    width: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);

    ${mq.medium`
    height: 400px
  `}
`;

const Slide = styled('div')`
    display: flex;
    justify-content: center;
    img {
        max-width: 100%;
    }
`;

const Title = styled('h3')`
    font-family: Satoshi;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 1px;
    text-align: center;
    transition: 0.2s;
    opacity: 0.7;
`;

const Launch = styled(Button)`
    margin: 0 auto 0;
`;

const customRenderThumb = ({ children, t }) => {
    return children.map((item, index) => {
        if (index === 0) {
            return (
                <React.Fragment key={index}>
                    <SearchIcon />
                    <Title>{t('home.carousel.search')}</Title>
                </React.Fragment>
            );
        }

        if (index === 1) {
            return (
                <React.Fragment key={index}>
                    <RegisterIcon />
                    <Title>{t('home.carousel.register')}</Title>
                </React.Fragment>
            );
        }

        if (index === 2) {
            return (
                <React.Fragment key={index}>
                    <ManageIcon />
                    <Title>{t('home.carousel.manage')}</Title>
                </React.Fragment>
            );
        }
    });
};

export default function HeroCarousel(properties) {
    const { t } = useTranslation();

    return (
        <CarouselContainer>
            <Bg />
            <Carousel
                autoPlay
                infiniteLoop
                centerMode
                swipeable={true}
                stopOnHover={false}
                centerSlidePercentage={65}
                selectedItem={1}
                showIndicators={false}
                showStatus={false}
                showArrows={false}
                renderThumbs={(children) => customRenderThumb({ children, t })}
            >
                <Slide>
                    <img src={searchImg} alt={t('search')} />
                </Slide>
                <Slide>
                    <img src={registerImg} alt={t('register')} />
                </Slide>
                <Slide>
                    <img src={manageImg} alt={t('manage')} />
                </Slide>
            </Carousel>
            <Launch href="https://app.ens.domains">
                {t('home.carousel.launch')}
            </Launch>
        </CarouselContainer>
    );
}
