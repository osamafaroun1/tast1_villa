import './Hero.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const Hero = () => {
    return (
        <div className='max-w-[100vw] max-h-[100vh]'>
            <Splide aria-label="My Favorite Images">
                <SplideSlide className='flex items-center pl-[70px]'>
                    <div>
                        <span className='OFS'>Toronto, <em>Canada</em></span>
                        <h2 className='OF-heroSlider sm:leading-[72px] leading-[50px] sm:text-[62px] text-[30px]'>Hurry! <br /> Get the Best Villa for you</h2>
                    </div>
                </SplideSlide>
                <SplideSlide className='flex items-center pl-[70px]'>
                    <div>
                        <span className='OFS'>Toronto, <em>Canada</em></span>
                        <h2 className='OF-heroSlider sm:leading-[72px] leading-[50px] sm:text-[62px] text-[30px]'>Hurry! <br /> Get the Best Villa for you</h2>
                    </div>
                </SplideSlide>
                <SplideSlide className='flex items-center pl-[70px]'>
                    <div>
                        <span className='OFS'>Toronto, <em>Canada</em></span>
                        <h2 className='OF-heroSlider sm:leading-[72px] leading-[50px] sm:text-[62px] text-[30px]'>Hurry! <br /> Get the Best Villa for you</h2>
                    </div>
                </SplideSlide>
                <SplideSlide className='flex items-center pl-[70px]'>
                    <div>
                        <span className='OFS'>Toronto, <em>Canada</em></span>
                        <h2 className='OF-heroSlider sm:leading-[72px] leading-[50px] sm:text-[62px] text-[30px]'>Hurry! <br /> Get the Best Villa for you</h2>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Hero