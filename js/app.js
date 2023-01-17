/**
 * 
* Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// i use this varibale to get the element from html file
const list=document.getElementById('navbar__list')
const section=document.querySelectorAll('section');
const sections=Array.from(section)
//here i make a loop on every section to create li for it in the navigation bar
for(sec of section){
    const li=document.createElement("li")
    li.innerHTML=`<a data-nav=${sec.id} class="menu__link">${sec.id}</a>`
    list.appendChild(li)
}
// the function to scroll to the section onclick on the navigation bar
const links=document.querySelectorAll('.menu__link')
links.forEach((ele)=>{
        ele.addEventListener("click", ()=>{
            const e=document.getElementById(ele.getAttribute("data-nav"));
            e.scrollIntoView({behavior:"smooth"})
        })
})
// this is the function that add and remove "active" in the class of the section on view
window.onscroll= ()=>{
    section.forEach((ele)=>{
        const box=ele.getBoundingClientRect()
        if(box.top>=-500&&box.top<=150){
            ele.classList.add('your-active-class')
        }
        else{
            ele.classList.remove('your-active-class')
        }
        if(this.scrollY>2000){
            button.style.display='block'
        }else{
            button.style.display="none"
        }
    })
}
const button= document.getElementById("up")
button.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
const look=document.querySelectorAll('li');
const highlight= Array.from(look);
highlight.forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
        highlight.forEach((e)=>{
            e.classList.remove('active')
        })
        ele.classList.add('active')
    })
})
