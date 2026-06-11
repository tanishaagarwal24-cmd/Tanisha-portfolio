// Smooth reveal animation

const sections = document.querySelectorAll(
'.card, .project-card, .skill-box'
);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity='1';
            entry.target.style.transform='translateY(0)';
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.style.opacity='0';
    section.style.transform='translateY(40px)';
    section.style.transition='all 0.8s ease';
    observer.observe(section);
});

console.log("Tanisha Portfolio Loaded Successfully 🚀");