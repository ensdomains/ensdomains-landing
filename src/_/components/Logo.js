import styled from '@emotion/styled';
import React from 'react';

import logo from '../assets/logo.svg';

const LogoContainer = styled('div')`
    height: 48px;
    display: flex;

    img {
        display: block;
    }

    .ens-logo {
        width: 35px;
        margin-right: 10px;
    }

    .ens-logo-text {
        width: 57px;
    }
`;

export default function Logo({ className }) {
    return (
        <LogoContainer className={className}>
            <img src={logo} alt="ENS Logo" />
        </LogoContainer>
    );
}
