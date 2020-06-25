const paintingCon = $(".paintings__con")
const columns = Array.from(paintingCon.children())
const col1 = $(columns[0])
const col2 = $(columns[1])
const col3 = $(columns[2])
const col4 = $(columns[3])
const col5 = $(columns[4])
const paintings = Array.from(col1.children())



const resize = () => {
    console.log($(window).width())
    if ($(window).width() >= 1700) {
        console.log("1700")
        for (var x = 0; x < paintings.length; x++) {
            let index = x + 1
            let cycleNum = (index / 5)
            console.log(cycleNum)
            var result = cycleNum.toFixed(Math.max(2, (cycleNum.toString().split('.')[1] || []).length));

            switch (result.substring(1)) {
                case (".40"):
                    paintings[x].remove()
                    col2.append(paintings[x])
                    break;
                case (".60"):
                    paintings[x].remove()
                    col3.append(paintings[x])
                    break;
                case (".80"):
                    paintings[x].remove()
                    col4.append(paintings[x])
                    break;
                case (".00"):
                    paintings[x].remove()
                    col5.append(paintings[x])
                    break;
            }
        }
    }
    else if ($(window).width() >= 1500) {
        console.log("1500")
        for (var x = 0; x < paintings.length; x++) {
            let index = x + 1
            let cycleNum = (index / 4)
            console.log(cycleNum)
            var result = cycleNum.toFixed(Math.max(2, (cycleNum.toString().split('.')[1] || []).length));

            switch (result.substring(1)) {
                case (".50"):
                    paintings[x].remove()
                    col2.append(paintings[x])
                    break;
                case (".75"):
                    paintings[x].remove()
                    col3.append(paintings[x])
                    break;
                case (".00"):
                    paintings[x].remove()
                    col4.append(paintings[x])
                    break;
            }
        }
    }
    // for (var i = paintings.length - 1; i > 0; i--) {
    //     if ((i+1) % 4 ==0){
    //         paintings[i].remove()
    //         col4.append(paintings[i])
    //     }else if ((i+1) % 3 == 0) {
    //         console.log(i)
    //         paintings[i].remove()
    //         col3.append(paintings[i])
    //     } else if ((i+1) % 2 == 0) {
    //         paintings[i].remove()
    //         col2.append(paintings[i])
    //     } 

    // } 
    else if ($(window).width() >= 1100) {
        for (var i = paintings.length - 1; i >= 0; i--) {
            if (i % 3 == 0) {
                paintings[i].remove()
                col3.append(paintings[i])
                
            } else if (i % 2 == 0) {
                paintings[i].remove()
                col2.append(paintings[i])
            }

        }
    } else if ($(window).width() >= 650) {
        col2.removeClass("isHidden")
        // do your stuff
        for (var i = paintings.length - 1; i >= 0; i--) {
            if (i % 2 == 0) {
                paintings[i].remove()
                col2.append(paintings[i])
            }
        }

    }
}
//when window resizes, fun the function
 window.addEventListener("resize", resize);
resize();

//when painting is clicked, show the modal
const $modal = $('#modal');
$('.overlay__con').on('click',function(){
    let imgSrc =($(this).siblings()[0].src);

    var img = $(` <img id="dynamic"  src = ${imgSrc}>
    <div class = "modal__div-style">
    `);
    $modal.append(img);
    $modal.css("display", "block");
    $modal.addClass("fadeInAnimation")
    
//Apply blur to the header and painting secion
    let header = $('.header');
    let paintingCon = $('.paintings__con');
    header.css("filter", " blur(8px)");
    header.css("-webkit-filter", " blur(8px)");
    paintingCon.css("filter", " blur(8px)");
    paintingCon.css("-webkit-filter", " blur(8px)");
//Disbale scroll and interaction
    let body = $('body');
    body.css("overflow", "hidden");
    header.css('pointer-events', 'none');
    paintingCon.css('pointer-events', 'none')
});  

//when modal x is clicked, rollback all changes made
$('.fa-times').on('click',function(){
    console.log('click')
    //remove current painting
    $modal.css("display", "none");
    $modal.children()[1].remove();
    $modal.children()[1].remove();
    console.log($modal.children());
    let header = $('.header');
    let paintingCon = $('.paintings__con');
    //remove blur
    header.css("filter", " none");
    header.css("-webkit-filter", " none");
    paintingCon.css("filter", " none");
    paintingCon.css("-webkit-filter", " none");
    //make page interactable again
    let body = $('body');
    body.css("overflow", "visible");
    header.css('pointer-events', 'auto');
    paintingCon.css('pointer-events', 'auto')

});
