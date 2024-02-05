/*hamburger*/
const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobilemenu = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobilemenu.classList.toggle('active');
});
/*end hamburger*/

/*document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 350){
        header.style.backgroundColor = "rgb(189, 151, 110, 0.7)";
    }else{
        header.style.backgroundColor = "transparent";
    }
})
*/