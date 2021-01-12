import React, { Component } from "react";
import Card from "../components/Card";
import Row from "../components/Row";


function Project() {
  return (
    <div>
      <h2>Main Projects</h2>
      <Row small="1" medium="2" large="2">
        <Card github="https://github.com/lionhatt/project-WeatherWear" deploy="https://lionhatt.github.io/project-WeatherWear/" image="project1.PNG" title="WeatherWear"></Card>
        <Card github="https://github.com/willwoodburn1/Group-Project-2" deploy="https://vast-crag-85624.herokuapp.com/" image="project2.PNG" title="Meal Budgeter"></Card>
      </Row>
      <h2>Side Projects</h2>
      <Row small="2" medium="3" large="4">
        <Card github="https://github.com/sid-666/READMEGenerator" deploy="https://drive.google.com/file/d/12z0OsGMMME8Tzi64P5_zmmlFppqTb7bE/view?usp=sharing" image="READMEGeneratorAs.PNG" title="ReadMeGenerator"></Card>
        <Card github="https://github.com/sid-666/Weather-Dashboard" deploy="https://sid-666.github.io/Weather-Dashboard/" image="WeatherDashboardAs.PNG" title="Weather Dashboard"></Card>
        <Card github="https://github.com/sid-666/Note-Taker" deploy="https://evening-woodland-84909.herokuapp.com/" image="NoteTakerAs.PNG" title="Note Taker"></Card>
        <Card github="https://github.com/sid-666/Employee-Summary" deploy="https://drive.google.com/file/d/1Jx6C5dmul-EavYTdLhC8XK7gyVsAw-nt/view?usp=sharing" image="EmployeeSummaryAs.PNG" title="Employee Summary"></Card>
      </Row>
    </div>
  );
}

export default Project;
