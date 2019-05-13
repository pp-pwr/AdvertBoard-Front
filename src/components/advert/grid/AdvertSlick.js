import React, { Component } from 'react';
import AdvertTile from './AdvertTile'
import Slider from "react-slick";
import styled from 'styled-components'

const StyledSlider = styled(Slider)`
`

const SliderAdvert = styled(AdvertTile)`
`

class AdvertSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [{breakpoint: 500, settings: {autoplay: true, slidesToShow: 1}}],
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 5000
        };

        return (
            <StyledSlider className="recommended-slider" {...settings}>
                {
                    this.props.itemList.map((item) => (
                        <div key={item.id}>
                            <SliderAdvert advert={item} />
                        </div>
                    ))
                }
            </StyledSlider>
        )
    }
}

export default AdvertSlider;