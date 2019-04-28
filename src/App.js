import React, { Component } from "react";
import * as firebase from 'firebase';
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
			images: false,
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
		db.collection('change').get().then((snapshot) => {
			this.setState({ images: snapshot.docs })
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
		const allClasses = images.map(image => image.data().class);
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
			scrollTopBtn,
			index,
			url,
			cinemaMode,
			imageId,
			contact,
			shop,
			about,
		} = this.state;

		let imageClass;
		let imagePath;
		let imageDetails;
		
		if (images) {
			imageClass = images.map(c => c.data().class);
			imagePath = images.map(p => p.data().optimized);
			imageDetails = images.map(d => d.data().imageDetails);
		}
		
		const desktopWidth = window.matchMedia('(min-width: 1000px)').matches;
		const uniqueClass = uniq(imageClass);

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
							handleAboutScreen={this.handleAboutScreen}
							handleShop={this.handleShop}
						/>
					}
					{images &&
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
					}
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

const config = {
	apiKey: "AIzaSyASyzXnkx1O-6ZMKkFg_-lBz0gRTaLBQj8",
	authDomain: "oliver-cms.firebaseapp.com",
	databaseURL: "https://oliver-cms.firebaseio.com",
	projectId: "oliver-cms",
	storageBucket: "oliver-cms.appspot.com",
	messagingSenderId: "908146650993"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default App;
