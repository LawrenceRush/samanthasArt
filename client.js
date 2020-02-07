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
//When i click left, picture slides left

//when i click right, picture slides to the right

//when i click nav indicator, carousel slides to that picture