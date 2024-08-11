// /////////////////////////////////////////////////////////
//  Rquest Button
// ////////////////////////////////////////////////////////
const featureEl = document.querySelector(".section-feature")
const labelEl = document.querySelector(".feature-label")

const achievementobs = new IntersectionObserver(function(entries){
  const ent = entries[0]
  if(ent.isIntersecting){
    labelEl.classList.add("feature-label-show")
  }
  else{
    labelEl.classList.remove("feature-label-show")
  }
  
})
achievementobs.observe(featureEl)

// ////////////////////////////////////////////////////////////////////////
// Faq section
// ///////////////////////////////////////////////////////////////////////


const faqheadEl = document.querySelectorAll(".item-head")

faqheadEl.forEach(function(element) {
  element.addEventListener("click",function(){
    const faqItem = element.parentElement;
    const isOpen = faqItem.classList.contains("open")

    document.querySelectorAll(".faq-items.open").forEach(function(element){
      element.classList.remove("open")
    })

    document.querySelectorAll(".item-body").forEach((item)=>{
      item.style.height = 0
    })

    if (!isOpen) {
      faqItem.classList.add('open');
      faqItem.querySelector(".item-body").style.height = faqItem.querySelector(".item-body").scrollHeight + "px"
    }
    // console.log("ss")
  })
});


// ////////////////////////////////////////////////////////////////////////
// women image scroll animation
// ///////////////////////////////////////////////////////////////////////


const women = document.querySelector(".agency-img-2")
const agencysection = document.querySelector(".section-agency")

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY
  const sectionTop = agencysection.offsetTop
  const sectionHeight = agencysection.offsetHeight
  const stopposition = sectionTop + sectionHeight - window.innerHeight + 300
  
  if (scrollHeight >= sectionTop && scrollHeight <= stopposition) {
    const translateX = (scrollHeight - sectionTop) * -0.3
    women.style.transform = `translateX(${translateX}px)`
  } else if (scrollHeight > stopposition) {
    women.style.transform = `translateX(${(stopposition - sectionTop) * -0.3}px)`
  } else {
    women.style.transform = `translateX(0px)`
  }
});







