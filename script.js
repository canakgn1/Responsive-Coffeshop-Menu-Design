//ADD HTML ELEMENTS
const kutu = document.getElementsByClassName('primary__div')

//ACORDION MENU MOVEMENT
for(i = 0; i < kutu.length; i++){
    kutu[i].addEventListener('click', function(){
        event.currentTarget.classList.toggle('active')
    })
}