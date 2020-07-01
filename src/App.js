	import React, { Component } from "react";
	import { findIndex, uniq } from "lodash";

	import Header from "./components/Header";
	import Navigation from "./components/Navigation";
	import ImageStream from "./components/ImageStream";
	import CinemaMode from './components/Cinema';
	import Contact from './components/Contact';
	import About from './components/About';
	import Shop from './components/Shop';

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
				about: false,
				shop: false,
			};
			this.handleNavigation = this.handleNavigation.bind(this);
			this.handleSlideShow = this.handleSlideShow.bind(this);
			this.handleContactScreen = this.handleContactScreen.bind(this);
			this.handleAboutScreen = this.handleAboutScreen.bind(this);
			this.handleShop = this.handleShop.bind(this);
		}

		componentDidMount() {
			this.setState({
				images: [
					{
						optimized: "lifestyle/cup1.jpg",
						placeholder: "lifestyle/cup1.svg",
						height: "525px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/bike.jpg",
						placeholder: "lifestyle/bike.svg",
						height: "233px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/glasses2.jpg",
						placeholder: "lifestyle/glasses2.svg",
						height: "525px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/glasses.jpg",
						placeholder: "lifestyle/glasses.svg",
						height: "233px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/watch.jpg",
						placeholder: "lifestyle/watch.svg",
						height: "525px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/watch2.jpg",
						placeholder: "lifestyle/watch2.svg",
						height: "525px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/desk.jpg",
						placeholder: "lifestyle/desk.svg",
						height: "233px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/coffeeupdate.jpg",
						placeholder: "lifestyle/coffeeupdate.svg",
						height: "525px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "lifestyle/knife.jpg",
						placeholder: "lifestyle/knife.svg",
						height: "525px",          
							subNav: {
								subheading: 'Lifestyle',
								anchor: 'product',
							}
					},
					{
						optimized: "ape/1.jpg",
						placeholder: "ape/1.svg",
						height: "525px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/2.jpg",
						placeholder: "ape/2.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/3.jpg",
						placeholder: "ape/3.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/7.jpg",
						placeholder: "ape/7.svg",
						height: "525px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/8.jpg",
						placeholder: "ape/8.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/9.jpg",
						placeholder: "ape/9.svg",
						height: "525px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/4.jpg",
						placeholder: "ape/4.svg",
						height: "525px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/5.jpg",
						placeholder: "ape/5.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/6.jpg",
						placeholder: "ape/6.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/10.jpg",
						placeholder: "ape/10.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/11.jpg",
						placeholder: "ape/11.svg",
						height: "525px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/12.jpg",
						placeholder: "ape/12.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "ape/13.jpg",
						placeholder: "ape/13.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'all points east 2019',
							}
					},
					{
						optimized: "winchestival/winchestival-2.jpg",
						placeholder: "winchestival/winchestival-2.svg",
						height: "525px",          
							subNav: {
								subheading: 'festival',
								anchor: 'Winchestival',
							}
					},
					{
						optimized: "winchestival/winchestival-3.jpg",
						placeholder: "winchestival/winchestival-3.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'Winchestival',
							}
					},
					{
						optimized: "winchestival/winchestival-5.jpg",
						placeholder: "winchestival/winchestival-5.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'Winchestival',
							}
					},
					{
						optimized: "winchestival/winchestival-4.jpg",
						placeholder: "winchestival/winchestival-4.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'Winchestival',
							}
					},
					{
						optimized: "winchestival/winchestival-1.jpg",
						placeholder: "winchestival/winchestival-1.svg",
						height: "233px",          
							subNav: {
								subheading: 'festival',
								anchor: 'Winchestival',
							}
					},
					{
						optimized: "funchal/funchal-1.jpg",
						placeholder: "funchal/funchal-1.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-10.jpg",
						placeholder: "funchal/funchal-10.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-16.jpg",
						placeholder: "funchal/funchal-16.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-17.jpg",
						placeholder: "funchal/funchal-17.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-14.jpg",
						placeholder: "funchal/funchal-14.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-15.jpg",
						placeholder: "funchal/funchal-15.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-4.jpg",
						placeholder: "funchal/funchal-4.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-13.jpg",
						placeholder: "funchal/funchal-13.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-12.jpg",
						placeholder: "funchal/funchal-12.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-11.jpg",
						placeholder: "funchal/funchal-11.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						    optimized: "funchal/funchal-5.jpg",
						    placeholder: "funchal/funchal-5.svg",
						    height: "233px",          
						      subNav: {
						         subheading: 'street',
						         anchor: 'Funchal',
						 }
					},
					{
						optimized: "funchal/funchal-9.jpg",
						placeholder: "funchal/funchal-9.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						    optimized: "funchal/funchal-6.jpg",
						    placeholder: "funchal/funchal-6.svg",
						    height: "233px",          
						      subNav: {
						         subheading: 'street',
						         anchor: 'Funchal',
						 }
					},		
					{
						optimized: "funchal/funchal-3.jpg",
						placeholder: "funchal/funchal-3.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-7.jpg",
						placeholder: "funchal/funchal-7.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-8.jpg",
						placeholder: "funchal/funchal-8.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "funchal/funchal-2.jpg",
						placeholder: "funchal/funchal-2.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'Funchal',
							}
					},
					{
						optimized: "london/44.jpg",
						placeholder: "london/44.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/54.jpg",
						placeholder: "london/54.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/55.jpg",
						placeholder: "london/55.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/56.jpg",
						placeholder: "london/56.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/46.jpg",
						placeholder: "london/46.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/47.jpg",
						placeholder: "london/47.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/48.jpg",
						placeholder: "london/48.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/49.jpg",
						placeholder: "london/49.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/50.jpg",
						placeholder: "london/50.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/51.jpg",
						placeholder: "london/51.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/53.jpg",
						placeholder: "london/53.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/52.jpg",
						placeholder: "london/52.svg",
						height: "233px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/45.jpg",
						placeholder: "london/45.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/1.jpg",
						placeholder: "london/1.svg",
						height: "525px",          
							subNav: {
								subheading: 'street',
								anchor: 'london',
							}
					},
					{
						optimized: "london/2.jpg",
						placeholder: "london/2.svg",
						height: "525px",          
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
					optimized: "london/3.jpg",
					placeholder: "london/3.svg",
					height: "233px",          
					subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/4.jpg",
						placeholder: "london/4.svg",
						height: "525px",          
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/5.jpg",
						placeholder: "london/5.svg",
						height: "525px",          
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/6.jpg",
						placeholder: "london/6.svg",
						height: "525px",          
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/43.jpg",
						placeholder: "london/43.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/7.jpg",
						placeholder: "london/7.svg",
						height: "525px",          
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/8.jpg",
						placeholder: "london/8.svg",
						height: "525px",          
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/9.jpg",
						placeholder: "london/9.svg",
						height: "233px",          
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/10.jpg",
						placeholder: "london/10.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/11.jpg",
						placeholder: "london/11.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/42.jpg",
						placeholder: "london/42.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/12.jpg",
						placeholder: "london/12.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/13.jpg",
						placeholder: "london/13.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/14.jpg",
						placeholder: "london/14.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/15.jpg",
						placeholder: "london/15.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/41.jpg",
						placeholder: "london/41.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/16.jpg",
						placeholder: "london/16.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/17.jpg",
						placeholder: "london/17.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/18.jpg",
						placeholder: "london/18.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/19.jpg",
						placeholder: "london/19.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/20.jpg",
						placeholder: "london/20.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/21.jpg",
						placeholder: "london/21.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/22.jpg",
						placeholder: "london/22.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/23.jpg",
						placeholder: "london/23.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/24.jpg",
						placeholder: "london/24.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/25.jpg",
						placeholder: "london/25.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/26.jpg",
						placeholder: "london/26.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/27.jpg",
						placeholder: "london/27.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/28.jpg",
						placeholder: "london/28.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/29.jpg",
						placeholder: "london/29.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/30.jpg",
						placeholder: "london/30.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/31.jpg",
						placeholder: "london/31.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/32.jpg",
						placeholder: "london/32.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/33.jpg",
						placeholder: "london/33.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/34.jpg",
						placeholder: "london/34.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/35.jpg",
						placeholder: "london/35.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/36.jpg",
						placeholder: "london/36.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/37.jpg",
						placeholder: "london/37.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/38.jpg",
						placeholder: "london/38.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/39.jpg",
						placeholder: "london/39.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "london/40.jpg",
						placeholder: "london/40.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'london',
						}
					},
					{
						optimized: "winchester/1.jpg",
						placeholder: "winchester/1.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/19.jpg",
						placeholder: "winchester/19.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/15.jpg",
						placeholder: "winchester/15.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/16.jpg",
						placeholder: "winchester/16.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/17.jpg",
						placeholder: "winchester/17.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/18.jpg",
						placeholder: "winchester/18.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/2.jpg",
						placeholder: "winchester/2.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/3.jpg",
						placeholder: "winchester/3.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/4.jpg",
						placeholder: "winchester/4.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/5.jpg",
						placeholder: "winchester/5.svg",
						height: "525px",
						class: "winchester",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/6.jpg",
						placeholder: "winchester/6.svg",
						height: "525px",
						class: "winchester",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/7.jpg",
						placeholder: "winchester/7.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/8.jpg",
						placeholder: "winchester/8.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/9.jpg",
						placeholder: "winchester/9.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/10.jpg",
						placeholder: "winchester/10.svg",
						height: "525px",	
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/11.jpg",
						placeholder: "winchester/11.svg",
						height: "525px",	
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/12.jpg",
						placeholder: "winchester/12.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/13.jpg",
						placeholder: "winchester/13.svg",
						height: "525px",	
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "winchester/14.jpg",
						placeholder: "winchester/14.svg",
						height: "525px",	
						subNav: {
							subheading: 'street',
							anchor: 'winchester',
						}
					},
					{
						optimized: "new-york/1.jpg",
						placeholder: "new-york/1.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'new york',
						}
					},
					{
						optimized: "new-york/2.jpg",
						placeholder: "new-york/2.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'new york',
						}
					},
					{
						optimized: "new-york/3.jpg",
						placeholder: "new-york/3.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'new york',
						}
					},
					{
						optimized: "paris/1.jpg",
						placeholder: "paris/1.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'paris',
						}
					},
					{
						optimized: "paris/2.jpg",
						placeholder: "paris/2.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'paris',
						}
					},
					{
						optimized: "paris/3.jpg",
						placeholder: "paris/3.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'paris',
						}
					},
					{
						optimized: "paris/4.jpg",
						placeholder: "paris/4.svg",
						height: "525px",
						subNav: {
							subheading: 'street',
							anchor: 'paris',
						}
					},
					{
						optimized: "oslo/1.jpg",
						placeholder: "oslo/1.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'oslo',
						}
					},
					{
						optimized: "oslo/2.jpg",
						placeholder: "oslo/2.svg",
						height: "233px",
						subNav: {
							subheading: 'street',
							anchor: 'oslo',
						}
					},
					{
						optimized: "pvmarch/1.jpg",
						placeholder: "pvmarch/1.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/2.jpg",
						placeholder: "pvmarch/2.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/3.jpg",
						placeholder: "pvmarch/3.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/4.jpg",
						placeholder: "pvmarch/4.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/5.jpg",
						placeholder: "pvmarch/5.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/6.jpg",
						placeholder: "pvmarch/6.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/1.jpg",
						placeholder: "pvmarch/1.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/2.jpg",
						placeholder: "pvmarch/2.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/3.jpg",
						placeholder: "pvmarch/3.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/4.jpg",
						placeholder: "pvmarch/4.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/5.jpg",
						placeholder: "pvmarch/5.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "pvmarch/6.jpg",
						placeholder: "pvmarch/6.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					},
					{
						optimized: "winchestival/winchestival-1.jpg",
						placeholder: "winchestival/winchestival-1.svg",
						height: "233px",          
							subNav: {
								subheading: 'documentary',
								anchor: 'brexit',
							}
					}, 
					{
						optimized: "pride/1.jpg",
						placeholder: "pride/1.svg",
						height: "525px",
						subNav: {
							subheading: 'documentary',
							anchor: 'Pride',
						}
					}, 
					{
						optimized: "pride/2.jpg",
						placeholder: "pride/2.svg",
						height: "233px",
						subNav: {
							subheading: 'documentary',
							anchor: 'Pride',
						}
					}, 
					{
						optimized: "pride/3.jpg",
						placeholder: "pride/3.svg",
						height: "525px",
						subNav: {
							subheading: 'documentary',
							anchor: 'Pride',
						}
					}, 
					{
						optimized: "nature/1.jpg",
						placeholder: "nature/1.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'the woods',
						}
					},
					{
						optimized: "nature/2.jpg",
						placeholder: "nature/2.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'the woods',
						}
					},
					{
						optimized: "nature/3.jpg",
						placeholder: "nature/3.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'the woods',
						}
					},
					{
						optimized: "nature/4.jpg",
						placeholder: "nature/4.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'the woods',
						}
					},
					{
						optimized: "nature/5.jpg",
						placeholder: "nature/5.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'the woods',
						}
					},
					{
						optimized: "nature/6.jpg",
						placeholder: "nature/6.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'the woods',
						}
					},
					{
						optimized: "snowden/1.jpg",
						placeholder: "snowden/1.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'snowden',
						}
					},
					{
						optimized: "snowden/2.jpg",
						placeholder: "snowden/2.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'snowden',
						}
					},
					{
						optimized: "snowden/3.jpg",
						placeholder: "snowden/3.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'snowden',
						}
					},
					{
						optimized: "snowden/4.jpg",
						placeholder: "snowden/4.svg",
						height: "233px",
						subNav: {
							subheading: 'nature',
							anchor: 'snowden',
						}
					},
					{
						optimized: "falmouth/1.jpg",
						placeholder: "falmouth/1.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'snowden',
						}
					},
					{
						optimized: "falmouth/2.jpg",
						placeholder: "falmouth/2.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'falmouth',
						}
					},
					{
						optimized: "falmouth/3.jpg",
						placeholder: "falmouth/3.svg",
						height: "525px",
						subNav: {
							subheading: 'nature',
							anchor: 'falmouth',
						}
					},
					{
						optimized: "falmouth/4.jpg",
						placeholder: "falmouth/4.svg",
						height: "233px",
						subNav: {
							subheading: 'nature',
							anchor: 'falmouth',
						}
					},
					{
						optimized: "falmouth/5.jpg",
						placeholder: "falmouth/5.svg",
						height: "233px",
						subNav: {
							subheading: 'nature',
							anchor: 'falmouth',
						}
					},
					{
						optimized: "falmouth/6.jpg",
						placeholder: "falmouth/6.svg",
						height: "233px",
						subNav: {
							subheading: 'nature',
							anchor: 'falmouth',
						}
					}
				]
			});

			window.addEventListener("scroll", () => {
				const headerHeight = document.getElementById("header").clientHeight;
				window.pageYOffset > headerHeight
				? this.setState({ stickyNav: true })
				: this.setState({ stickyNav: false });
			});
		}

		handleNavigation(itemClass) {
			const { images } = this.state;
			const allClasses = images.map(image => image.subNav.anchor);
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
			});
		}

		handleContactScreen() {
			this.setState({ contact: !this.state.contact });
		}

		handleAboutScreen() {
			this.setState({ about: !this.state.about });
		}

		handleShop() {
			this.setState({ shop: !this.state.shop })
		}

		render() {
			const {
				images,
				navItem,
				stickyNav,
				index,
				url,
				cinemaMode,
				imageId,
				contact,
				shop,
				about
			} = this.state;

			const imageClass = images.map(c => c.class);
			const uniqueClass = uniq(imageClass);
			const imagePath = images.map(p => p.optimized);
			const imageDetails = images.map(d => d.imageDetails);
			const desktopWidth = window.matchMedia('(min-width: 1000px)').matches;

			const pushObjHeading = images.map(h => {
				return { [h.subNav.subheading]: h.subNav.anchor }
			});

			return (
				<React.Fragment>
					<Header />
					<div class="homepage-wrapper">
						<Navigation
							stickyNav={stickyNav}
							handleContactScreen={this.handleContactScreen}
							handleAboutScreen={this.handleAboutScreen}
							handleShop={this.handleShop}
							pushObjHeading={pushObjHeading}
							handleNavigation={this.handleNavigation}
							desktopWidth={desktopWidth}
						/>

						<ImageStream
							images={images}
							imagePath={imagePath}
							uniqueClass={uniqueClass}
							navItem={navItem}
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
					{about &&
						<About
						handleAboutScreen={this.handleAboutScreen}
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
