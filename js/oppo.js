document.addEventListener('DOMContentLoaded', () => {
    /** main slider parallax **/
    const mainSliderAbsolute = document.querySelector('#oppo-main-slider-absolute')
    const mainSliderParallax = document.querySelector('#oppo-main-slider-parallax-helper')
    let mainSliderParallaxActive = false

    const updateMainSliderParallax = () => {
        if (!mainSliderParallaxActive) return;

        const sliderHeight = mainSliderAbsolute.getBoundingClientRect().height
        const scrollTop = document.documentElement.scrollTop
        let parallaxHeight = sliderHeight - scrollTop
        if (parallaxHeight < 0) {
            parallaxHeight = 0
        }

        if (sliderHeight > 0) {
            mainSliderAbsolute.style.position = 'absolute'
            mainSliderParallax.style.height = parallaxHeight + 'px'
        } else {
            mainSliderAbsolute.style.position = 'relative'
            mainSliderParallax.style.height = '0px'
        }
    }
    setInterval(() => {
        if (mainSliderAbsolute.querySelector('.slick-slider')) {
            mainSliderParallaxActive = true
            updateMainSliderParallax()
        }
    }, 50)

    window.addEventListener('resize', () => {
        updateMainSliderParallax()
    })

    document.addEventListener('scroll', () => {
        updateMainSliderParallax()
    })

    const bannerBtn = $("#banner-btn");
    const videoPopup = $("#video-popup");
    const video = $("#video");
    const videoClose = $("#video-close");
    const videoBg = $("#video-bg");

    bannerBtn.click(function() {
        videoPopup.addClass("active");
        video[0].play();
        video[0].muted=false;
    });
    videoClose.click(function() {
        videoPopup.removeClass("active");
        video[0].pause();
    });
    videoBg.click(function() {
        videoPopup.removeClass("active");
        video[0].pause();
    });
})
