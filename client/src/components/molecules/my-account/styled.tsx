import styled from "styled-components";

export const NotLoggedIn = styled.div`
   {
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    ${({ horizontal }: { horizontal: boolean }) =>
      horizontal && `flex-column: column;}`}
`;
