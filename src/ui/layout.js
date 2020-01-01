import React from "react";
import styled from "styled-components";
import { FooterSection, Main } from "ui/common";




export function Footer({ copyrightExpiary, name }) {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const showFooter = year <= copyrightExpiary;
  if (!showFooter) {
    return null;
  }
  return (
    <FooterSection>
      <small>
        &copy; Copyright {copyrightExpiary}, {name}
      </small>
    </FooterSection>
  );
}

export function MainSection({ children, heading }) {
  return (
    <Main>
      <h2>{heading}</h2>
      {children}
    </Main>
  );
}

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`;
