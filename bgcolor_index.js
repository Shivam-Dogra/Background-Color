var box = document.querySelectorAll('.box');
var body = document.querySelector('body');
var clearBtn = document.querySelector('.color-btn');


box.forEach(function(ls){
    ls.addEventListener('click', function(ele){
        if(ele.target.id === 'green'){
            body.style.backgroundColor = ele.target.id;
        }
        if(ele.target.id === 'yellow'){
            body.style.backgroundColor = ele.target.id;
        }
        if(ele.target.id === 'orange'){
            body.style.backgroundColor = ele.target.id;
        }
    })
})

clearBtn.addEventListener('click', function(ele){
    body.style.backgroundColor = 'white';
})

