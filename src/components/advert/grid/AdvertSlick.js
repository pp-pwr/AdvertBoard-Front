import React, { Component } from 'react';
import AdvertTile from './AdvertTile'
import Slider from "react-slick";
import styled from 'styled-components'

const StyledSlider = styled(Slider)`
    text-align: center;
    width: 100%;

    & > .item-container {
        border: 1px solid;
        background-color: red;

        & > p {
            color: red;
        }
    }
`

const SliderAdvert = styled(AdvertTile)`
`

class AdvertSlider extends Component {
    render() {
        if(this.props.itemList.length < 4)
            return null;

        var settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [{breakpoint: 500, settings: {autoplay: true, slidesToShow: 1}}],
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 5000
        };

        return (
            <StyledSlider {...settings}>
                {
                    this.props.itemList.map((item) => (
                        <SliderAdvert gap='0.2em' advert={item} />
                    ))
                }
            </StyledSlider>
        )
    }
}

export default AdvertSlider;