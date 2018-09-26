import React from 'react';
import { HeaderDiv, InnerHeader, Title, MyAccountContainer } from './styled';

export const Header = () => (
    <HeaderDiv>
        <InnerHeader>
            <Title>why buy</Title>
            <MyAccountContainer>
                <div>log in</div>
                <div>register</div>
            </MyAccountContainer>
        </InnerHeader>
    </HeaderDiv>
);
