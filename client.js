const track = $(".carousel__track")
const slides = Array.from(track.children())
const nextButton = $(".carousel__button--right")
const prevButton = $(".carousel__button--left")
const dotsNav = $(".carousel__nav")
const dots = Array.from(dotsNav.children())
const slideWidth = slides[0].offsetWidth

//Arrange slides in a line
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + "px"
}
slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.css("transform", `translateX(-${targetSlide.css("left")})` );
    currentSlide.removeClass("current-slide")
    targetSlide.addClass("current-slide")
}   

const updateDots = (currentDot, targetDot) => {
    currentDot.removeClass("current-slide")
    targetDot.addClass("current-slide")
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>{
    console.log("index", targetIndex)
    if(targetIndex == 0){
        prevButton.addClass("is-hidden")
        nextButton.removeClass("is-hidden")
    } else if (targetIndex === slides.length -1){
        nextButton.addClass("is-hidden")
        prevButton.removeClass("is-hidden")
    } else {
        nextButton.removeClass("is-hidden")
        prevButton.removeClass("is-hidden")
    }
}

$(document).ready(function() {
    //When i click left, picture slides left
    $(".carousel__button--left").click(function(){
        const currentSlide = track.find(".current-slide")
        const prevSlide = currentSlide.prev()
        moveToSlide(track, currentSlide, prevSlide)
        const currentDot = dotsNav.find(".current-slide")
        const prevDot = currentDot.prev()
        updateDots(currentDot, prevDot)
        const prevIndex = slides.findIndex(slide => slide === prevSlide[0])
        hideShowArrows(slides, prevButton, nextButton, prevIndex)
    }); 
    //when i click right, picture slides to the right
    $(".carousel__button--right").click(function(){
        const currentSlide = track.find(".current-slide")
        const nextSlide = currentSlide.next()
        moveToSlide(track, currentSlide, nextSlide)
        const currentDot = dotsNav.find(".current-slide")
        const nextDot = currentDot.next()
        updateDots(currentDot, nextDot)
        const nextIndex = slides.findIndex(slide => slide === nextSlide[0])
        hideShowArrows(slides, prevButton, nextButton, nextIndex)
     }); 
     //when i click nav indicator, carousel slides to that picture
     $(".carousel__nav").click(function(e) {
         
        if ( $( e.target ).is( ":button" ) ) {
            const targetDot = e.target
            const currentSlide = track.find(".current-slide")
            const currentDot = dotsNav.find(".current-slide")
            const targetIndex = dots.findIndex(dot => dot === targetDot)
            const targetSlide = slides[targetIndex]
            const jqTargetSlide = $(targetSlide)
            moveToSlide(track, currentSlide, jqTargetSlide)
           
            const jqTargetDot = $(targetDot)
            updateDots(currentDot, jqTargetDot)
            hideShowArrows(slides, prevButton, nextButton, targetIndex)

          }
     })
});


