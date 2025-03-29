// <!-- locomotive and gsap-scrollTiggr sath me work karane ke liye
// crome => locomotive scrolltrigger codepen -> link - new l-s-w-w-g-a-s


// redpannal and orange and purple/green panel ka pura code hata do aur uske niche ka tin line ka code
//   line (40-87) tak ka code hatana hai
// 'smooth-scroll' replace '.main' se - all selectke liye = select smooth-s +ctrl+d 
//  scrollTrigger ko chalame leye fun page6 me scroller me body replace '.main'

function locogsapscroll(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
    }
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}

function page1lodinganim(){
    var tl = gsap.timeline()
tl.from(".page1",{
    opacity:0,
    duration:0.3,
    delay:0
})
tl.from(".page1",{
    transform:" scaleX(0.6) scaleY(0.2) translateY(150%)",
    borderRadius:"50px",
    duration:2,
    ease:"bounce.out"
})

tl.from("nav",{
    opacity:0,
    delay:-0.3
})

tl.to(".page1 h1,.page1 p, .page1 div",{
    y:0,
    opacity:1,
    duration:0.5,
    stagger:0.2,
    ease:"slow"
})

}

function navanimation(){
    
var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()
    tl.to(".nav-bottom",{
        height:"26vh"
    })
    tl.to(".nav-part2 h5 ",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.7
        }
    })
})

nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5 ",{
        display:"none"
    })
    tl.to(".nav-bottom",{
        height:"0vh",
        delay:-1,
        duration:1
    })
})
}

function page2anim(){
    
var rightelem = document.querySelectorAll(".right-elem")
rightelem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to( e.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to( e.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    e.addEventListener("mousemove",function(dets){
        gsap.to(e.childNodes[3],{
            x:dets.x - e.getBoundingClientRect().x-40,
            y:dets.y - e.getBoundingClientRect().y-90,
        })
    })
})

}

function page3anim(){
    
var center = document.querySelector(".page3-center")
var video = document.querySelector(".page3 video")
center.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:15
    })
})
video.addEventListener("click", function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:30
    })
})

var contener = document.querySelector(".page3-con")
var elem = document.querySelector(".page3 .page3-elem")

contener.addEventListener("mouseenter",function(){
    gsap.to( elem,{
        opacity:1,
        scale:1
    })
})
contener.addEventListener("mouseleave",function(){
    gsap.to( elem,{
        opacity:1,
        scale:0
    })
})
contener.addEventListener("mousemove",function(dets){
    gsap.to(elem,{
        x:dets.x - contener.getBoundingClientRect().x-20,
        y:dets.y - contener.getBoundingClientRect().y+20,
    })
})
}

function page6anim(){
    gsap.from("#b6-part h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#b6-part",
            scroller:".main",
            start:"top 80%",
            end:"10%",
            scrub:true
        }
    })
    gsap.from(".p6-part1,.p6-part2,.p6-part3,.p6-part4",{
        borderRightWidth:"1px",
        height:0,
        duration:1,
        scrollTrigger:{
            trigger:"#b6-part",
            scroller:".main",
            start:"top 80%",
            end:"10%",
            scrub:true
        }
    })

}


locogsapscroll()
page1lodinganim()
navanimation()
page2anim()
page3anim()
page6anim()



var sec = document.querySelectorAll(".sec-right")

sec.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        e.childNodes[3].play()
        gsap.to(e.childNodes[3],{
            opacity:1,
        })
    })
    e.addEventListener("mouseleave", function(){
        e.childNodes[3].load()
        gsap.to(e.childNodes[3],{
            opacity:0,
            delay:-2,
        })
    })
})



var summ = document.querySelector(".page5-con summary")
var icon1 = document.querySelector(".page5-icon .bx-chevron-up ")
var icon2 = document.querySelector(".page5-icon .bx-chevron-down ")
summ.addEventListener("click", function(){
    icon1.style.opacity=0;
    icon2.style.opacity=1;
    console.log("hello")
})
// flex.addEventListener("click", function(){
//     icon1.style.opacity=1;
//     icon2.style.opacity=0;
//     console.log("hello")
// })
