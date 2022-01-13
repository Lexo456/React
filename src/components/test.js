const element = document.getElementsByClassName('test')

const hidden = (element) => {
    element.addEventListener('onclick', function (element){
        element.className = 'hidden'
    } )
}