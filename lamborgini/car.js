gsap.from(".leftHead",{
    opacity:0,
    duration:1,
    dalay:0.7,
    y:-70,
    scrollTrigger:{
        trigger:".leftHead",
        scroll:"body",
        
        
       
    }
    
})
gsap.from(".rightHead",{
    opacity:0,
    duration:2,
    y:-40,
    scrollTrigger:{
        trigger:".rightHead",
        scroller:"body",
        
    }
})
gsap.from(".frontView",{
    opacity:0,
    duration:1,
    x:-60,

   
    scrollTrigger:{
        trigger:".frontView",
        scroller:"body",
        start: "top 99%",
        end:"top -50%",
       
        scrub:2,
    }
})
gsap.from("#carImg2",{
    
    duration:2,
    x:100,
    scrollTrigger:{
        trigger:"#carImg2",
        scroller:"body",
        start: "top 70%",
        end:"top -50%",
        
        scrub:2,
    }
})

gsap.from(".page2 h1",{
    
    duration:0.2,
    delay:1,
    y:-40,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        start: "top 100%",
        end:"top -190%",
        
        scrub:2,
}
})

gsap.from(".page2 h4",{
    
    duration:1,
    delay:1,
    y:40,
    scrollTrigger:{
        trigger:".page2 h4",
        scroller:"body",
        start: "top 99%",
        end:"top -50%",
       
        scrub:2,
}
})
gsap.from(".page3 h1 ",{
    opacity:0,
    duration:1,
    y:-80,
    delay:1,
   
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:"body",
        start: "top 130%",
        end:"top -70%",
        
        scrub:2,
}
})
gsap.from(".btn",{
    opacity:0,
    duration:3,
    delay:1,
    y:60,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        start: "top 130%",
        end:"top -70%",
        
        scrub:2,
}
})
gsap.from(".footer h3",{
    opacity:0,
    duration:1,
    delay:1,
    y:-40,
    scrollTrigger:{
        trigger:".footer h3 ",
        scroller:"body",
        start: "top 155%",
        end:"top -70%",
        
        scrub:2,
}
})
gsap.from(".footer  h5",{
    opacity:0,
    duration:1,
    delay:1,
    x:100,
    scrollTrigger:{
        trigger:".footer  h5",
        scroller:"body",
        start: "top 165%",
        end:"top -70%",
        
        scrub:2,
}
})
gsap.from(".credit",{
    opacity:0,
    duration:1,
    delay:1,
    x:100,
    scrollTrigger:{
        trigger:".credit",
        scroll:"body",
        start: "top 165%",
        end:"top -0%",
        
        scrub:2,
}
})
let model = document.querySelector(".model");
model.addEventListener("click",()=>{
    gsap.to(".cars",{
        color : "white",
        y:430,
    })
    gsap.to(".page h1",{
        opacity:0,
    })
})
model.addEventListener("dblclick",()=>{
    gsap.to(".cars",{
        color : "white",
        y:-352
    })
    gsap.to(".page h1",{
        opacity:1,
})
})