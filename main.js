let menu = document.querySelector('.menu');
let btn = document.querySelector('.btn');
let havola = document.querySelector('.havola');
let tugma = document.querySelector('.tugma');
let matn = document.querySelector('.matn');
let icon = document.querySelector('.icon');
let app = document.querySelector('.app');
let apps = document.querySelector('.apps');
let langua = document.querySelector('.langua');
let switchh = document.querySelector('.switch');
let la = document.querySelector('.la');
let lang = document.querySelector('.lang');
let ones = document.querySelector('.image');
let twoes = document.querySelector('.image1');
btn.addEventListener('click' , ()=>{
    if(menu.classList.contains('showmenu')){
        menu.classList.remove('showmenu');
        btn.classList.remove('active');
    }else{
        menu.classList.add('showmenu');
        btn.classList.add('active');
    }

});



tugma.addEventListener('click' , () =>{
    if(matn.classList.contains('show')){
        matn.classList.remove('show');
        tugma.classList.remove('warning');
        icon.className = 'icon fa-solid fa-plus';
    }else{
        matn.classList.add('show');
        tugma.classList.add('warning');
        icon.className = 'icon fa-solid fa-x';
    }



});


app.addEventListener('click' , () =>{
    if(apps.classList.contains('hidden')){
        apps.classList.remove('hidden');
    }else{
        apps.classList.add('hidden');

    }
});


la.addEventListener('click' , () =>{
    if(lang.classList.contains('hidden')){
        lang.classList.remove('hidden');
        langua.classList.add('glo');
    }else{
        lang.classList.add('hidden');
        langua.classList.remove('glo');

    }
});


switchh.addEventListener('click' , () =>{
    if(ones.classList.contains('hidden')){
        ones.classList.remove('hidden');
        twoes.classList.add('hidden');

    }else{
        ones.classList.add('hidden');
        twoes.classList.remove('hidden');
    }
});