function btn_click() {
    alert('The feature is under development!');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navigatin_under_750px = document.getElementById("Navigation_under_750px");

var display_none = false;
function nav_on() {
    if (display_none == false) {
        navigatin_under_750px.setAttribute('style', 'display: block; justify-items: right; grid-column: 2; margin-left: 50%;');
        display_none = true;
    }
    else if (display_none == true) {
        navigatin_under_750px.setAttribute('style', 'display: none;');
        display_none = false;
    }
}

const stat_1 = document.getElementById('stat_circle_1'); 
const stat_2 = document.getElementById('stat_circle_2'); 
const stat_3 = document.getElementById('stat_circle_3');  
const btn_back = document.getElementById('btn_back');
const btn_next = document.getElementById('btn_next');

var stat_count = 1;

function back(){
    if (stat_count == 1){
        stat_1.setAttribute('style', 'display: none;');
        stat_3.setAttribute('style', 'display: block; margin: 0;');
        stat_count = 3;
    }
    else if (stat_count == 2){
        stat_2.setAttribute('style', 'display: none;');
        stat_1.setAttribute('style', 'display: block; margin: 0;');
        stat_count = 1;
    }
    else if (stat_count == 3){
        stat_3.setAttribute('style', 'display: none;');
        stat_2.setAttribute('style', 'display: block; margin: 0;');
        stat_count = 2;
    }
}
function next() {
    if (stat_count == 1){
        stat_1.setAttribute('style', 'display: none;');
        stat_2.setAttribute('style', 'display: block; margin: 0;');
        stat_count = 2;
    }
    else if (stat_count == 2){
        stat_2.setAttribute('style', 'display: none;');
        stat_3.setAttribute('style', 'display: block; margin: 0;');
        stat_count = 3;
    }
    else if (stat_count == 3){
        stat_3.setAttribute('style', 'display: none;');
        stat_1.setAttribute('style', 'display: block; margin: 0;');
        stat_count = 1;
    }
}