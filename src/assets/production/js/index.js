const hambourgerAnimation=()=>{const e=document.querySelector(".hambourger");var s=document.querySelectorAll(".hambourger-item");const l=document.querySelector("#crossline-one"),t=document.querySelector("#crossline-two"),o=document.querySelector(".collapse-navbar-item");o.style.display="none",e.addEventListener("mouseover",e=>{Array.from(s).forEach(e=>{e.style.display="none"}),t.style.display="block",l.style.display="block",l.classList.add("before"),t.classList.add("after"),o.style.display="block"}),e.addEventListener("mouseout",e=>{l.classList.remove("before"),t.classList.remove("after"),o.classList.remove("collapse-navbar-display-block"),o.style.display="none",Array.from(s).forEach(e=>{e.style.display="block"})})};hambourgerAnimation();var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){let s;const l=document.getElementsByClassName("image-slider"),t=document.getElementsByClassName("text-span"),o=document.getElementsByClassName("date-span"),n=document.getElementsByClassName("title-black-div");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none",o[s].style.display="none",t[s].style.display="none",n[s].style.display="none";l[slideIndex-1].style.display="block",t[slideIndex-1].style.display="block",o[slideIndex-1].style.display="block",n[slideIndex-1].style.display="block"}showSlides(slideIndex);