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
    targetSlideImg = targetSlide.children()[0]
    changeFontColors(targetSlideImg)
    
}

const updateDots = (currentDot, targetDot) => {
    currentDot.removeClass("current-slide")
    targetDot.addClass("current-slide")
}

const advanceRight = () => {
    const currentSlide = track.find(".current-slide")
    const currentIndex = slides.findIndex(slide => slide === currentSlide[0])
    if (currentIndex == slides.length - 1) {
        const nextSlide = currentSlide.siblings("li").first()
        moveToSlide(track, currentSlide, nextSlide)
        const currentDot = dotsNav.find(".current-slide")
        const nextDot = currentDot.siblings("button").first()
        updateDots(currentDot, nextDot)
    } else {
        const nextSlide = currentSlide.next()
        moveToSlide(track, currentSlide, nextSlide)
        const currentDot = dotsNav.find(".current-slide")
        const nextDot = currentDot.next()
        updateDots(currentDot, nextDot)
    }
}

const manualClick = () => {
    advanceRight()
}

let autoCycle = setInterval(manualClick, 5000)
let restart

$(document).ready(function () {
    //When i click left, previous picture is shown
    $(".carousel__button--left").click(function () {
        clearInterval(autoCycle)
        clearTimeout(restart)
        const currentSlide = track.find(".current-slide")
        const currentIndex = slides.findIndex(slide => slide === currentSlide[0])
        if (currentIndex == 0) {
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
        restart = setTimeout(function () { autoCycle = setInterval(manualClick, 5000) }, 5000)
    });
    //when i click right, next picture is shown
    $(".carousel__button--right").click(function () {
        clearInterval(autoCycle)
        clearTimeout(restart)
        advanceRight()
        restart = setTimeout(function () { autoCycle = setInterval(manualClick, 5000) }, 5000)
    });
    //when i click nav indicator, carousel get opacity
    $(".carousel__nav").click(function (e) {
        if ($(e.target).is(":button")) {
            clearInterval(autoCycle)
            clearTimeout(restart)
            console.log("button click")
            const targetDot = e.target
            const currentSlide = track.find(".current-slide")
            let currentDot = dotsNav.find(".current-slide")
            const targetIndex = dots.findIndex(dot => dot === targetDot)
            const targetSlide = slides[targetIndex]
            const jqTargetSlide = $(targetSlide)
            moveToSlide(track, currentSlide, jqTargetSlide)
            const jqTargetDot = $(targetDot)
            updateDots(currentDot, jqTargetDot)
            restart = setTimeout(function () { autoCycle = setInterval(manualClick, 5000) }, 5000)
        }
    })
});


// Change font color depending on image
const changeFontColors = (targetSlideImg) => {
    let rgb = getAverageRGB(targetSlideImg)
    let luma = determineLuma(rgb)
    changeColorsByLuma(luma)
}
//find the average rgb of an image
function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);
    return rgb;

}
// Determine Luma(if color is considered light or dark)
const determineLuma = (rgb) => {
    let luma = (rgb.r * .2126 + rgb.g * .7152 + rgb.b * .0722) / 255
    return luma
}

const changeColorsByLuma = (luma) => {
    let header = $(".header")
    let headerA = header.find("li").find("a")
    let socialMedia = $(".socialMedia")
    let currentDot = dotsNav.find(".current-slide")
    let button = $(".carousel__button")
    let buttonIcon = $(".button__icon")
    let navToggle = $(".nav-toggle-label").find("span")
    let documentWidth = $(document).width()
    if (luma >= .5) {
        header.css({ "color": "black" })
        headerA.css({ "color": "black" })
        socialMedia.css({ "color": "black" })
        button.css({"background-color":"black"})
        buttonIcon.css({ "color": "white" })
        navToggle.css({"background-color":"black"})
        setTimeout(()=>{
            let currentDot = dotsNav.find(".current-slide")
            dotsNav.children().css({ "background-color": "rgb(0, 0, 0, .3)" })
            currentDot.css({ "background-color": "rgb(0, 0, 0, .75)" }, 10)
        })
        
    } else {
        header.css({ "color": "white" })
        if (documentWidth > 1195) {
            headerA.css({ "color": "white" })
        }
        socialMedia.css({ "color": "white" })
        button.css({"background-color":"white"})
        buttonIcon.css({ "color": "rgb(56,56,56)" })
        navToggle.css({"background-color":"white"})
        setTimeout(()=>{
            let currentDot = dotsNav.find(".current-slide")
           dotsNav.children().css({ "background-color": "rgb(255, 255, 255, .5)" })
           currentDot.css({ "background-color": "rgb(255, 255, 255, .85)" })
        }, 10)
        

    }
}