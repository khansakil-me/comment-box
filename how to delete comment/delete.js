document.getElementById('delete-button').addEventListener('click',function (params) {
    const text = document.getElementById('delete-text');
    text.style.display ='none';
})



document.getElementById('delete-house').addEventListener('keyup' ,function (event) {
    const text = event.target.value ;
    const btn = document.getElementById('delete-button')
    if (text === 'delete') {
        btn.removeAttribute('disabled')
        
    } else {
        btn.setAttribute('disabled' ,true)
    }
    
})