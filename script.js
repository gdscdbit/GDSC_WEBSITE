var t1 = gsap.timeline();

t1


.from(".headings h1",{
 opacity:0,
  scale:2.0,
   duration:1
})



.from("#nav img",{
  x:-30,
  opacity:0,
  duration:1
})


.from("#right a ,i",{
  x:50,
  opacity:0,
  duration:1
})

  .from(".homemain h5",{
    x:-50,
    opacity:0,
    duration:1
})

gsap.from(".homelast p",{
  scrollTrigger:{
    trigger:".homelast",
    scroller:"body",
    scrub:5
  },

  opacity:-0.5,
  scale:1.5,
  duration:1
})

gsap.from(".fhead h1",{
  scrollTrigger:{
    trigger:".fhead",
    scroller:"body",
    scrub:5
  },

  opacity:-0.3,
  scale:1.5,
  delay:1
})

gsap.from(".fright img",{
  scrollTrigger:{
    trigger:".fright",
    scroller:"body",
    scrub:5
  }
  ,
  scale:1.5,
  duration:1
})
  

gsap.from(".dev h1 ",{
  scrollTrigger:{
    trigger:".dev",
    scroller:"body",
    scrub:5
  },

  scale:-0.1,
  duration:0.5
  
  
})

gsap.from(".dev2 h1 ",{
  scrollTrigger:{
    trigger:".dev2",
    scroller:"body",
    scrub:5
  },

  scale:1.3,
   duration:2
  
  
})




 