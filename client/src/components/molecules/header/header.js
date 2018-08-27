import React from 'react';
import { HeaderDiv, Title, MyAccountContainer } from './styled';

export const Header = () => (
    <HeaderDiv>
        <Title>why buy</Title>
        <MyAccountContainer>
            <div>log in</div>
            <div>register</div>
        </MyAccountContainer>
    </HeaderDiv>
);
