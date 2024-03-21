import styled from '@emotion/styled';
import React from 'react';

import logo from '../assets/logo.svg';

const LogoContainer = styled('div')`
    .ens-logo {
        width: 104px;
        margin-right: 10px;
    }

    .ens-logo--dark {
        filter: invert(1);
    }
`;

export default function Logo({ className, style }) {
    return (
        <LogoContainer className={className}>
            <img
                src={logo}
                alt="ENS Logo"
                className={`ens-logo ens-logo--${style}`}
            />
        </LogoContainer>
    );
}
