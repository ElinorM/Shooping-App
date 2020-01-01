import React, { Component } from "react";
import { Footer, MainContainer } from "ui/layout";
import { Header } from "ui/Header";
import { MainView } from "ui/MainView";

export class App extends Component {
  render() {
    return (
      <MainContainer>
        <Header>EliExpress.</Header>
        <MainView />
        <Footer copyrightExpiary={2058} name="Example Corporation" />
      </MainContainer>
    );
  }
}