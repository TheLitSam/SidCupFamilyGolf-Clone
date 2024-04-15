var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursorBlur");

document.addEventListener("mousemove", function(dets) {
    // crsr.style.left = dets.x - 10 + "px";
    // crsr.style.top = dets.y - 10 + "px"; 

    crsr.animate({
        left: dets.x + 25 + "px",
        top: dets.y + 25 + "px"
    }, {duration: 500, fill: "forwards"});

    crsrBlur.animate({
        left: dets.x -250 + "px",
        top: dets.y -250 + "px"
    }, {duration: 15000, fill: "forwards"});
})

var navh4 = document.querySelectorAll("#nav h4");
navh4.forEach(function(element) {
    element.addEventListener("mouseenter", () => {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })

    element.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #fff";
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "105px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        end: "top -6%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#aboutUs img, #aboutInfo", {
    y: 90,
    opacity: 0,
    stagger: 0.5,
    duration: 2,
    scrollTrigger: {
        trigger: "#aboutUs",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 75%",
        end: "top 60%"
    }
})

gsap.from(".card", {
    scale: 0.5,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 75%",
        end: "top 60%"
    }
})

gsap.from("#quote1", {
    y: -50,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: "#quote1",
        scroller: "body",
        scrub: 1.5,
        // markers: true,
        start: "top 45%",
        end: "top 30%"
    }
})

gsap.from("#quote2", {
    y: 50,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#quote2",
        scroller: "body", 
        scrub: 1.5,
        // markers: true,
        strat: "top 65%",
        end: "top 55%"
    }
})

gsap.from("#page4 h1", {
    y: 50,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 95%",
        end: "top 85%"
    }
})