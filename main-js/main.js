function navOpen() {
    const closerDiv = document.querySelector('.closer'); 
    const side = document.querySelector('.sideNav');
    side.style.width = '200px';
    closerDiv.style.width = '100%';
}
function navClose() {
    const closerDiv = document.querySelector('.closer'); 
    const side = document.querySelector('.sideNav');
    
    side.style.width = '0';
    closerDiv.style.width = '0';

}




