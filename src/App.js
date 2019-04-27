import React, { Component } from "react";
import { findIndex, uniq } from "lodash";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ImageStream from "./components/ImageStream";
import CinemaMode from './components/Cinema';
import Contact from './components/Contact'
import Shop from './components/Shop'

import 'normalize.css/normalize.css'
import "./styles/styles.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      stickyNav: false,
      cinemaMode: false,
      contact: false,
      shop: false,
    };
    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleSlideShow = this.handleSlideShow.bind(this);
    this.handleContactScreen = this.handleContactScreen.bind(this);
    this.handleShop = this.handleShop.bind(this);
  }

  componentDidMount() {
    this.setState({
      images: [
        {
          optimized: "london/1.jpg",
          placeholder: "london/1.svg",
          height: "525px",
          id: 1,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/2.jpg",
          placeholder: "london/2.svg",
          height: "525px",
          id: 2,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/3.jpg",
          placeholder: "london/3.svg",
          height: "233px",
          id: 3,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "london/4.jpg",
          placeholder: "london/4.svg",
          height: "525px",
          id: 4,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/5.jpg",
          placeholder: "london/5.svg",
          height: "525px",
          id: 5,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/6.jpg",
          placeholder: "london/6.svg",
          height: "525px",
          id: 6,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/7.jpg",
          placeholder: "london/7.svg",
          height: "525px",
          id: 7,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/8.jpg",
          placeholder: "london/8.svg",
          height: "525px",
          id: 8,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/9.jpg",
          placeholder: "london/9.svg",
          height: "233px",
          id: 9,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "london/10.jpg",
          placeholder: "london/10.svg",
          height: "525px",
          id: 10,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/11.jpg",
          placeholder: "london/11.svg",
          height: "233px",
          id: 11,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "london/12.jpg",
          placeholder: "london/12.svg",
          height: "525px",
          id: 12,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/13.jpg",
          placeholder: "london/13.svg",
          height: "525px",
          id: 13,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/14.jpg",
          placeholder: "london/14.svg",
          height: "525px",
          id: 14,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/15.jpg",
          placeholder: "london/15.svg",
          height: "525px",
          id: 15,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/16.jpg",
          placeholder: "london/16.svg",
          height: "525px",
          id: 16,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/17.jpg",
          placeholder: "london/17.svg",
          height: "525px",
          id: 17,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/18.jpg",
          placeholder: "london/18.svg",
          height: "525px",
          id: 18,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/19.jpg",
          placeholder: "london/19.svg",
          height: "525px",
          id: 19,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/20.jpg",
          placeholder: "london/20.svg",
          height: "525px",
          id: 20,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/21.jpg",
          placeholder: "london/21.svg",
          height: "525px",
          id: 21,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/22.jpg",
          placeholder: "london/22.svg",
          height: "525px",
          id: 22,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/23.jpg",
          placeholder: "london/23.svg",
          height: "525px",
          id: 23,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/24.jpg",
          placeholder: "london/24.svg",
          height: "525px",
          id: 24,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/25.jpg",
          placeholder: "london/25.svg",
          height: "525px",
          id: 25,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/26.jpg",
          placeholder: "london/26.svg",
          height: "525px",
          id: 26,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/27.jpg",
          placeholder: "london/27.svg",
          height: "525px",
          id: 27,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/28.jpg",
          placeholder: "london/28.svg",
          height: "233px",
          id: 28,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "london/29.jpg",
          placeholder: "london/29.svg",
          height: "525px",
          id: 29,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/30.jpg",
          placeholder: "london/30.svg",
          height: "525px",
          id: 30,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/31.jpg",
          placeholder: "london/31.svg",
          height: "525px",
          id: 31,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/32.jpg",
          placeholder: "london/32.svg",
          height: "525px",
          id: 32,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/33.jpg",
          placeholder: "london/33.svg",
          height: "233px",
          id: 33,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "london/34.jpg",
          placeholder: "london/34.svg",
          height: "525px",
          id: 34,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/35.jpg",
          placeholder: "london/35.svg",
          height: "525px",
          id: 35,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/36.jpg",
          placeholder: "london/36.svg",
          height: "525px",
          id: 36,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/37.jpg",
          placeholder: "london/37.svg",
          height: "525px",
          id: 37,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/38.jpg",
          placeholder: "london/38.svg",
          height: "525px",
          id: 38,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/39.jpg",
          placeholder: "london/39.svg",
          height: "525px",
          id: 39,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "london/40.jpg",
          placeholder: "london/40.svg",
          height: "525px",
          id: 40,
          class: "london",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/1.jpg",
          placeholder: "winchester/1.svg",
          height: "525px",
          id: 41,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/2.jpg",
          placeholder: "winchester/2.svg",
          height: "525px",
          id: 42,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/3.jpg",
          placeholder: "winchester/3.svg",
          height: "525px",
          id: 43,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/4.jpg",
          placeholder: "winchester/4.svg",
          height: "525px",
          id: 44,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/5.jpg",
          placeholder: "winchester/5.svg",
          height: "525px",
          id: 45,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/6.jpg",
          placeholder: "winchester/6.svg",
          height: "525px",
          id: 46,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/7.jpg",
          placeholder: "winchester/7.svg",
          height: "525px",
          id: 47,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/8.jpg",
          placeholder: "winchester/8.svg",
          height: "525px",
          id: 48,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/9.jpg",
          placeholder: "winchester/9.svg",
          height: "525px",
          id: 49,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/10.jpg",
          placeholder: "winchester/10.svg",
          height: "525px",
          id: 50,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/11.jpg",
          placeholder: "winchester/11.svg",
          height: "525px",
          id: 51,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/12.jpg",
          placeholder: "winchester/12.svg",
          height: "525px",
          id: 52,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/13.jpg",
          placeholder: "winchester/13.svg",
          height: "525px",
          id: 53,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "winchester/14.jpg",
          placeholder: "winchester/14.svg",
          height: "525px",
          id: 54,
          class: "winchester",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "new-york/1.jpg",
          placeholder: "new-york/1.svg",
          height: "233px",
          id: 55,
          class: "new york",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "new-york/2.jpg",
          placeholder: "new-york/2.svg",
          height: "525px",
          id: 56,
          class: "new york",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "new-york/3.jpg",
          placeholder: "new-york/3.svg",
          height: "233px",
          id: 57,
          class: "new york",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "paris/1.jpg",
          placeholder: "paris/1.svg",
          height: "525px",
          id: 58,
          class: "paris",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "paris/2.jpg",
          placeholder: "paris/2.svg",
          height: "525px",
          id: 59,
          class: "paris",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "paris/3.jpg",
          placeholder: "paris/3.svg",
          height: "525px",
          id: 60,
          class: "paris",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "paris/4.jpg",
          placeholder: "paris/4.svg",
          height: "525px",
          id: 61,
          class: "paris",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "oslo/1.jpg",
          placeholder: "oslo/1.svg",
          height: "233px",
          id: 62,
          class: "oslo",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "oslo/2.jpg",
          placeholder: "oslo/2.svg",
          height: "233px",
          id: 63,
          class: "oslo",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "nature/1.jpg",
          placeholder: "nature/1.svg",
          height: "525px",
          id: 64,
          class: "nature",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "nature/2.jpg",
          placeholder: "nature/2.svg",
          height: "525px",
          id: 65,
          class: "nature",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "nature/3.jpg",
          placeholder: "nature/3.svg",
          height: "525px",
          id: 66,
          class: "nature",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "nature/4.jpg",
          placeholder: "nature/4.svg",
          height: "525px",
          id: 67,
          class: "nature",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "nature/5.jpg",
          placeholder: "nature/5.svg",
          height: "525px",
          id: 68,
          class: "nature",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "nature/6.jpg",
          placeholder: "nature/6.svg",
          height: "525px",
          id: 69,
          class: "nature",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "snowden/1.jpg",
          placeholder: "snowden/1.svg",
          height: "525px",
          id: 70,
          class: "snowden",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "snowden/2.jpg",
          placeholder: "snowden/2.svg",
          height: "525px",
          id: 71,
          class: "snowden",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "snowden/3.jpg",
          placeholder: "snowden/3.svg",
          height: "525px",
          id: 72,
          class: "snowden",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "snowden/4.jpg",
          placeholder: "snowden/4.svg",
          height: "233px",
          id: 73,
          class: "snowden",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "falmouth/1.jpg",
          placeholder: "falmouth/1.svg",
          height: "525px",
          id: 74,
          class: "falmouth",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "falmouth/2.jpg",
          placeholder: "falmouth/2.svg",
          height: "525px",
          id: 75,
          class: "falmouth",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "falmouth/3.jpg",
          placeholder: "falmouth/3.svg",
          height: "525px",
          id: 76,
          class: "falmouth",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "portrait"
          }
        },
        {
          optimized: "falmouth/4.jpg",
          placeholder: "falmouth/4.svg",
          height: "233px",
          id: 77,
          class: "falmouth",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "falmouth/5.jpg",
          placeholder: "falmouth/5.svg",
          height: "233px",
          id: 78,
          class: "falmouth",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        },
        {
          optimized: "falmouth/6.jpg",
          placeholder: "falmouth/6.svg",
          height: "233px",
          id: 79,
          class: "falmouth",
          imageDetails: {
            title: "The image title",
            desc:
              "It is a long established fact that a reader will be distracted by the readable content of layout.",
            iso: "800 / 200",
            cost: "£15",
            type: "landscape"
          }
        }
      ]
    });
    window.addEventListener("scroll", () => {
      const headerHeight = document.getElementById("header").clientHeight;
      window.pageYOffset > headerHeight
        ? this.setState({ stickyNav: true })
        : this.setState({ stickyNav: false });
      window.pageYOffset > window.innerHeight
        ? this.setState({ scrollTopBtn: true })
        : this.setState({ scrollTopBtn: false });
    });
  }

  handleNavigation(itemClass) {
    const { images } = this.state;

    const allClasses = images.map(image => image.class);
    const classIndex = findIndex(
      allClasses,
      imageClass => imageClass === itemClass
    );
    const slideToImage = document.getElementById("image-stream-" + classIndex).offsetTop;

    window.scrollTo({
      top: slideToImage,
      left: 0,
      behavior: "smooth"
    });

    this.setState({
      navItem: itemClass
    });
  }

  handleSlideShow(id) {
    this.setState({
        cinemaMode: !this.state.cinemaMode,
        imageId: id,
    })
  }

  handleContactScreen() {
    this.setState({ contact: !this.state.contact });
  }

  handleShop() {
    this.setState({ shop: !this.state.shop })
  }

  render() {
    const {
      images,
      navItem,
      stickyNav,
      scrollTopBtn,
      index,
      url,
      cinemaMode,
      imageId,
      contact,
      shop,
    } = this.state;

    const imageClass = images.map(c => c.class);
    const uniqueClass = uniq(imageClass);
    const imagePath = images.map(p => p.optimized);
    const imageDetails = images.map(d => d.imageDetails);
    const desktopWidth = window.matchMedia('(min-width: 1000px)').matches;

    return (
      <React.Fragment>
          <Header />
          <div class="homepage-wrapper">
            {desktopWidth &&
              <Navigation
                images={images}
                uniqueClass={uniqueClass}
                handleNavigation={this.handleNavigation}
                navItem={navItem}
                stickyNav={stickyNav}
                handleContactScreen={this.handleContactScreen}
                handleShop={this.handleShop}
              />
            }
            <ImageStream
              images={images}
              imagePath={imagePath}
              uniqueClass={uniqueClass}
              navItem={navItem}
              scrollTopBtn={scrollTopBtn}
              handleSlideShow={this.handleSlideShow}
              index={index}
              url={url}
            />
        </div>
        {cinemaMode && desktopWidth &&
          <CinemaMode
              startingImage={imageId}
              imagePath={imagePath}
              imageDetails={imageDetails}
              dismiss={this.handleSlideShow}
          />
        }
        {contact && 
            <Contact
                contact={contact}
                handleContactScreen={this.handleContactScreen}
            />
        }
        {shop && 
            <Shop
                contact={contact}
                handleShop={this.handleShop}
            />
        }
      </React.Fragment>
    );
  }
}
export default App;
