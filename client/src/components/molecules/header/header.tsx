import * as React from "react";
import { MyAccount } from "../my-account/my-account";

// TODO: add styles from client2 to client
import { HeaderDiv, InnerHeader, Title } from "./styled";

export const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => (
  <HeaderDiv>
    <InnerHeader>
      <Title>why buy</Title>
      <MyAccount isLoggedIn={isLoggedIn} />
    </InnerHeader>
  </HeaderDiv>
);
