import * as React from "react";

// TODO: add styles from client2 to client
import { HeaderDiv, InnerHeader, Title, MyAccountContainer } from "./styled";


export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => (
  <HeaderDiv>
    <InnerHeader>
      <Title>why buy</Title>
      <MyAccountContainer>
        {isLoggedIn ? (
          <div>my account</div>
        ) : (
          <>
            <div>log in</div>
            <div>register</div>
          </>
        )}
      </MyAccountContainer>
    </InnerHeader>
  </HeaderDiv>
);
