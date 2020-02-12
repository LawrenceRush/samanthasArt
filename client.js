const track = $(".carousel__track")
const slides = Array.from(track.children())
const nextButton = $(".carousel__button--right")
const prevButton = $(".carousel__button--left")
const dotsNav = $(".carousel__nav")
const dots = Array.from(dotsNav.children())
const slideWidth = slides[0].offsetWidth



const moveToSlide = (track, currentSlide, targetSlide) => {
   // track.css("transform", `translateX(-${targetSlide.css("left")})` );
    currentSlide.removeClass("current-slide")
    currentSlide.addClass("prev-slide")
    targetSlide.removeClass("prev-slide")
    targetSlide.addClass("current-slide")
}   

const updateDots = (currentDot, targetDot) => {
    currentDot.removeClass("current-slide")
    targetDot.addClass("current-slide")
}


$(document).ready(function() {
    //When i click left, previous picture is shown
    $(".carousel__button--left").click(function(){
        const currentSlide = track.find(".current-slide")
        const currentIndex = slides.findIndex(slide => slide === currentSlide[0])
        if(currentIndex == 0){
            const nextSlide = currentSlide.siblings("li").last()
            moveToSlide(track, currentSlide, nextSlide)
            const currentDot = dotsNav.find(".current-slide")
            const nextDot = currentDot.siblings("button").last()
            updateDots(currentDot, nextDot)
        } else {
            const prevSlide = currentSlide.prev()
            moveToSlide(track, currentSlide, prevSlide)
            const currentDot = dotsNav.find(".current-slide")
            const prevDot = currentDot.prev()
            updateDots(currentDot, prevDot)
        }
    }); 
    //when i click right, next picture is shown
    $(".carousel__button--right").click(function(){
        const currentSlide = track.find(".current-slide")
        const currentIndex = slides.findIndex(slide => slide === currentSlide[0])
        if(currentIndex == slides.length-1){
            const nextSlide = currentSlide.siblings("li").first()
            moveToSlide(track, currentSlide, nextSlide)
            const currentDot = dotsNav.find(".current-slide")
            const nextDot = currentDot.siblings("button").first()
            updateDots(currentDot, nextDot)
        } else{
            const nextSlide = currentSlide.next()
            moveToSlide(track, currentSlide, nextSlide)
            const currentDot = dotsNav.find(".current-slide")
            const nextDot = currentDot.next()
            updateDots(currentDot, nextDot)
        }
    }); 
     //when i click nav indicator, carousel get opacity
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

          }
     })
});


