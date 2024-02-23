import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import { Anchor, AnchorContainer } from '../../Anchor';
import { Button, H2, P } from '../../Typography';
import blur1 from './blur1.jpg';
import blur2 from './blur2.jpg';
import website1 from './website1.png';
import website2 from './website2.png';
import website3 from './website3.png';

const Container = styled('div')`
    background: white;
    padding: 120px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    h2,
    p {
        text-align: center;
        max-width: 750px;
    }
`;

const ImageAnimation = styled('div')`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const ImageTransition = styled('div')`
    position: relative;
    margin: 0 20px;
    img:nth-child(1) {
        left: 10px;
        top: 10px;
        position: relative;
    }

    img:nth-child(2) {
        left: 0;
        top: 0;
        position: absolute;
    }
`;

export default function DecentralisedWebsites(properties) {
    const { t } = useTranslation();
    const [reference, inView] = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: '-200px',
    });

    return (
        <Container id="home-decentralised-websites">
            <AnchorContainer href={'#home-decentralised-websites'}>
                <H2>
                    {t('home.decentralisedWebsites.title')}
                    <Anchor />
                </H2>
            </AnchorContainer>

            <P>{t('home.decentralisedWebsites.text')}</P>
            <ImageAnimation ref={reference}>
                <ImageTransition>
                    <motion.img
                        src={website2}
                        style={{ opacity: inView ? 0 : 1 }}
                    />
                    <motion.img
                        src={blur1}
                        style={{ opacity: inView ? 1 : 0 }}
                    />
                </ImageTransition>
                <ImageTransition>
                    <img src={website1} alt={t('website')} />
                </ImageTransition>
                <ImageTransition>
                    <motion.img
                        src={website3}
                        animate={{ opacity: inView ? 0 : 1 }}
                    />
                    <motion.img
                        src={blur2}
                        animate={{ opacity: inView ? 1 : 0 }}
                    />
                </ImageTransition>
            </ImageAnimation>
            <Button href="https://support.ens.domains/en/articles/7890637-create-a-decentralized-website">
                {t('c.learnMore')}
            </Button>
        </Container>
    );
}
