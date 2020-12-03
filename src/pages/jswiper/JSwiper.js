import React, { Component } from 'react';
import Swiper from 'swiper';
// import "swiper/swiper.scss";
import './JSwiper.css';

export default class JSwiper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSwiper: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.isSwiper && !prevState.isSwiper) {
      this.swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }

  render() {
    if (this.state.isSwiper) {
      return (
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">slide1</div>
            <div className="swiper-slide">slide2</div>
            <div className="swiper-slide">slide3</div>
            <div className="swiper-slide">slide4</div>
            <div className="swiper-slide">slide5</div>
            <div className="swiper-slide">slide6</div>
            <div className="swiper-slide">slide7</div>
            <div className="swiper-slide">slide8</div>
            <div className="swiper-slide">slide9</div>
            <div className="swiper-slide">slide10</div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      );
    } else {
      return (
        <div className="swiper-loading">
          <div>loading</div>
          <button onClick={this.onClick}>ok</button>
        </div>
      );
    }
  }

  onClick = () => {
    this.setState({ isSwiper: true });
  };
}
