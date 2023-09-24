const main=document.getElementById("main-container");
const education=document.getElementById("education");
const skils=document.getElementById("skills");
const projects=document.getElementById("projects");
// const more = document.getElementById("more");
const theme = document.querySelector(':root');

function alertFunction(section){
    // console.log("theme");
    main.style.display="none";
    education.style.display="none";
    skils.style.display="none";
    projects.style.display="none";
    // more.style.display="none";
    section.style.display="block";
}
