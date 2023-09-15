const main=document.getElementById("main-container");
const education=document.getElementById("education");
const skils=document.getElementById("skills");
const projects=document.getElementById("projects");
const more = document.getElementById("more"); 
function alertFunction(section){
    main.style.display="none";
    education.style.display="none";
    skils.style.display="none";
    projects.style.display="none";
    more.style.display="none";
    section.style.display="block";
}