/* CURSOR */
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
});

/* PROGRESS */
window.addEventListener("scroll",()=>{
    const h=document.documentElement;
    const scrolled=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
    document.querySelector(".progress").style.width=scrolled+"%";
});

/* NAV PILL */
const links=document.querySelectorAll(".nav-link");
const pill=document.querySelector(".nav-pill");

function move(el){
    const r=el.getBoundingClientRect();
    const p=el.parentElement.getBoundingClientRect();

    pill.style.width=r.width+"px";
    pill.style.left=(r.left-p.left)+"px";
}

move(document.querySelector(".active"));

links.forEach(l=>{
    l.addEventListener("click",()=>{
        links.forEach(x=>x.classList.remove("active"));
        l.classList.add("active");
        move(l);
    });
});

/* GSAP REVEAL */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach(el=>{
    gsap.to(el,{
        scrollTrigger:{
            trigger:el,
            start:"top 80%"
        },
        opacity:1,
        y:0,
        duration:0.8
    });
});