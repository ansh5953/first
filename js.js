var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: false,
        start: "top -5%",
        end: "top -11%",
        scrub: 1,

    }
})
var h4all = document.querySelectorAll("#nav h4")//all hmne isliye lagaya taki query selcector are h4 ko pkde
h4all.forEach(function (elem) {
    //console.log(elem)
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})





gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers:true,
        start: "top -25vh",
        end: "top -70vh",
        scrub: 2,
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duaration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    }
})

gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duaration:2,
  stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
      //  markers:true,
        start:"top 80%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2,
    }
})
// gsap.from("#colon2",{
//     y:70,
//     x:70,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#colon2",
//         scroller:"body",
//         //markers:true,
//         start:"top 60%",
//         end:"top 40%",
//         scrub:2,
//     }
// })


gsap.from("#colon2", {
    y: 70, 
    x: 70,
    duration: 1,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 80%", // This may need to be adjusted based on your scroll and page layout
        end: "top 40%",
        scrub: 2,
    }
});
