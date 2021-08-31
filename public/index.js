window.onload = () => {
    document.addEventListener('keydown', (event)=>{
        if(event.ctrlKey && String.fromCharCode(event.which).toLowerCase() == 's') {
            event.preventDefault();
        }
    })
}