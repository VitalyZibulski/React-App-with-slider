import React, { Component } from 'react';

import Slide_1 from '../img/slide-1.jpg';
import Slide_1 from '../img/slide-2.jpg';
import Slide_1 from '../img/slide-3.jpg';
import Slide_1 from '../img/slide-4.jpg';

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      slides:[{
        eachSlide:`url{$(Slide_1)}`
      },
      {
        eachSlide:`url{$(Slide_2)}`
      },
      {
        eachSlide:`url{$(Slide_3)}`
      },
      {
        eachSlide:`url{$(Slide_4)}`
      },
      ],
      autoplay:false,
      active:0,
      max:0
    }
    this.state.max = this.state.slides.length;
    this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
    this.toggleAutoPlay() = this.toggleAutoPlay.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(() => this.intervalBetweenSlides(), 3000)
  }
  componentWillMount(){
    clearInterval(this.interval)
  }
  intervalBetweenSlides(){
    if(this.state.autoplay == true){
      if(this.state.ative === this.state.max-1){
          this.state.active = 0
      } else {
        this.active++
      }
      this.setState({
        active:this.state.active
      })
    }
  }
  toggleAutoPlay(){
    this.setState({
      autoplay:!this.state.autoplay
    })
  }
}