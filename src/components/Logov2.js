import styled from '@emotion/styled';
import React from 'react';

import { ENSLogo } from '../assets/ENSLogoWithText';

const LogoContainer = styled('div')`
    width: 104px;
    margin-right: 10px;
`;

export default function Logo({ className, style }) {
    return (
        <LogoContainer className={className}>
            <ENSLogo style={style} />
        </LogoContainer>
    );
}
