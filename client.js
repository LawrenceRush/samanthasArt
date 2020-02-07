const track = $(".carousel__track")
const slides = Array.from(track.children())
const nextButton = $(".carousel__button--right")
const prevButton = $(".carousel__button--left")
const dotsNav = $(".carousel__nav")
const dots = Array.from(dotsNav.children())
const slideWidth = slides[0].offsetWidth

//Arrange slides in a line
const setSlidePosition = (slide, index) =>{
    console.log(slideWidth)
    slide.style.left = slideWidth * index + "px"
}
slides.forEach(setSlidePosition)

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transfrom =  "translateX(-" + targetSlide.style.left + ")"
//     currentSlide.classList.remove("current-slide")
//     nextSlide.classList.add("current-slide")
// }   

$(document).ready(function() {
    //When i click left, picture slides left
    $(".carousel__button--left").click(function(){
        
    }); 
    //when i click right, picture slides to the right
    $(".carousel__button--right").click(function(){
        const currentSlide = track.find(".current-slide")

        const nextSlide = currentSlide.next()
        const amountToMove = nextSlide.css("left");
        console.log(currentSlide, nextSlide, amountToMove)

        track.css("transform", `translateX(-${amountToMove})` );
        // track.css("translateX", "-"+amountToMove)
        currentSlide.removeClass("current-slide")
        nextSlide.addClass("current-slide")
     }); 
});


//when i click nav indicator, carousel slides to that picture