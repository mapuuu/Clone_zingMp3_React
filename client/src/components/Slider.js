import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArrSlider } from '../ultis/fn';

const Slider = () => {

    const { banner } = useSelector(state => state.app);
    console.log(banner);

    useEffect(() => {
      const sliderEls = document.getElementsByClassName('slider-item')
      let min = 0
      let max = 2
      const intervalId = setInterval(() => {
          const list = getArrSlider(min, max, sliderEls.length - 1)
          for (let i = 0; i < sliderEls.length; i++) {
              if (list.some(item => item === i)) {
                  sliderEls[i].style.cssText = `display: block`
              } else {
                  sliderEls[i].style.cssText = `display: none`
              }
          }
          if (min === sliderEls.length - 1) {
              min = 0
          } else {
              min += 1
          }
          if (max === sliderEls.length - 1) {
              max = 0
          } else {
              max += 1
          }
          console.log(list)
      }, 2000)
      return () => {
          intervalId && clearInterval(intervalId)
      }
  }, [])

  return (
    <div className='flex gap-[30px] px-[60px] pt-8 w-full overflow-hidden'>
        {banner?.map(item => (
            <img
            key={item.encodeId}
            src={item.banner}
            alt='anh'
            className='slider-item flex-1 object-contain w-[30%] rounded-lg'
            />
        ))}
    </div>
  )
}

export default Slider;