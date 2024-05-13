'use client';

import { clsx } from 'clsx';

import { useIntersectionObserver } from '~/utils/useIntersectionObserver';

import styles from './MessageAnimation.module.css';
import ui from '~/styles/ui.module.css';
import { TFunction } from 'i18next';
import { ReactNode } from 'react';
import { MessageBubbleIcon } from '~/components/icons';

const MessageBox = ({ children, isIntersecting }: { children: ReactNode;isIntersecting: boolean }) => {
    return (
        <div className={clsx(
            styles.box,
            isIntersecting ? styles.animating : undefined,
        )}
        >
            <span className={styles.boxContent}>{children}</span>
            <MessageBubbleIcon className={styles.bubble} />
        </div>
    );
};

export const MessageAnimation = ({ t }: { t: TFunction }) => {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.75,
    });

    return (
        <div className={clsx(styles.container, ui.flex, ui['flex-col'])} ref={ref}>
            <MessageBox {...{ isIntersecting }}>
                { t('home.features.farewell.animation.m1')}
            </MessageBox>
            <MessageBox {...{ isIntersecting }}>
                { t('home.features.farewell.animation.m2')}
            </MessageBox>
            <MessageBox {...{ isIntersecting }}>
                { t('home.features.farewell.animation.m3')}
            </MessageBox>
            <MessageBox {...{ isIntersecting }}>
                { t('home.features.farewell.animation.m4')}
            </MessageBox>
        </div>
    );
};
