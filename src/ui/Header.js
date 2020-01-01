import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeaderSection, LogoImg, CompanyLogoAndName } from "ui/common";
import { useThemeService } from "services/theme";
import  Logo  from "../logo.jpg";

const Nav = styled.nav`
  &&& {
    a {
      margin-left: 5px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export function Header({ children }) {
  const { toggleTheme, themeName, setTheme, themeNames } = useThemeService();
  return (
    <HeaderSection>
      <CompanyLogoAndName>
        <LogoImg src={Logo} alt="logo"></LogoImg>
        <h1 onClick={toggleTheme}>{children}</h1>
      </CompanyLogoAndName>
      <select value={themeName} onChange={e => setTheme(e.target.value)}>
        {themeNames.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shopping Cart</Link>
        <Link to="/history">Order History</Link>
      </Nav>
    </HeaderSection>
  );
}