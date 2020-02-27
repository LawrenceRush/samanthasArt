const paintingCon = $(".paintings__con")
const columns = Array.from(paintingCon.children())
const col1 = $(columns[0])
const col2 = $(columns[1])
const col3 = $(columns[2])
const col4 = $(columns[3])
const paintings = Array.from(col1.children())

const resize = () => {
    if ($(window).width() >= 1600){
        for (var i = paintings.length - 1; i > 0; i--) {
            if ((i+1) % 4 ==0){
                paintings[i].remove()
                col4.append(paintings[i])
            }else if ((i+1) % 3 == 0) {
                console.log(i)
                paintings[i].remove()
                col3.append(paintings[i])
            } else if ((i+1) % 2 == 0) {
                paintings[i].remove()
                col2.append(paintings[i])
            } 
            
        } 
       }   else if ($(window).width() >= 1100){
        for (var i = paintings.length - 1; i > 0; i--) {
            if (i % 3 == 0) {
                console.log(i)
                paintings[i].remove()
                col3.append(paintings[i])
            } else if (i % 2 == 0) {
                paintings[i].remove()
                col2.append(paintings[i])
            } 
            
        }
    } else  if ($(window).width() >= 650) {
        col2.removeClass("isHidden")
        // do your stuff
        for (var i = paintings.length - 1; i > 0; i--) {
            if (i % 2 == 0) {
                paintings[i].remove()
                col2.append(paintings[i])
            }
        }

}
}
//when window resizes, fun the function
// window.addEventListener("resize", resize);
resize()