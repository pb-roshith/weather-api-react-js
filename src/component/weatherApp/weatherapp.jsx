import React from "react";
import Search_icon from "../assests/search.png";
import Cloud_icon from "../assests/cloud.png";
import Clear_icon from "../assests/clear.png";
import Drizzle_icon from "../assests/drizzle.png";
import Humidity_icon from "../assests/humidity.png";
import Rain_icon from "../assests/rain.png";
import Snow_icon from "../assests/snow.png";
import Wind_icon from "../assests/wind.png";
import "./weatherapp.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Weatherapp = () => {
  const [wicon, setwicon] = useState();
  let api_key = "5ccb7042601880d3820ccff7541bac80";
  const search = async () => {
    const element = document.getElementsByClassName("city");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let res = await fetch(url);
    let data = await res.json();
    const humidity = document.getElementsByClassName("humidity-prec");
    const wind = document.getElementsByClassName("wind-spee");
    const temp = document.getElementsByClassName("weather-temp");
    const loca = document.getElementsByClassName("weather-loc");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/hr";
    temp[0].innerHTML = data.main.temp + " °C";
    loca[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setwicon(Clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setwicon(Cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setwicon(Drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setwicon(Drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setwicon(Rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setwicon(Rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setwicon(Snow_icon);
    } else {
      setwicon(Clear_icon);
    }
  };
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div style={{ color: "#fff" }} className="containerr">
                <div className="bar">
                  <input type="text" className="city" placeholder="Search" />
                  <div
                    className="search"
                    onClick={() => {
                      search();
                    }}
                  >
                    <img src={Search_icon} alt="" />
                  </div>
                </div>
                <div className="weather-image">
                  <img src={wicon} alt="" />
                </div>
                <div className="weather-temp">24*C</div>
                <div className="weather-loc">London</div>
                <hr />
                <div style={{ color: "#fff" }} className="data-container">
                  <div className="element">
                    <img src={Humidity_icon} alt="" className="icon" />
                    <div className="data">
                      <div className="humidity-prec">50%</div>
                      <div className="text">Humidity</div>
                    </div>
                  </div>
                  <div className="element">
                    <img src={Wind_icon} alt="" className="icon" />
                    <div className="data">
                      <div className="wind-spee">50kmph</div>
                      <div className="text">wind speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Weatherapp;
