function scrollRevealAnimation() {
    const scrollReveal = ScrollReveal({
        origin: "top",
        duration: 2000,
        delay: 100,
    })
  
    scrollReveal.reveal(".scroll-reveal", { distance: "3rem" })
    scrollReveal.reveal(".scroll-reveal-small", { distance: "1rem" })
    scrollReveal.reveal(".scroll-reveal-big", { distance: "4rem" })
}


function scrollRevealAnimationLeft() {
    const scrollRevealLeft = ScrollReveal({
        origin: "left",
        distance: "2rem",
        duration: 1000,
        delay: 100
      })
    
    scrollRevealLeft.reveal(".scroll-reveal-left")
}

scrollRevealAnimation()
scrollRevealAnimationLeft()