

document.querySelector('.icon').addEventListener('click',(event)=>{
    if(document.querySelector('.icon').classList.contains('menuOuvert')){
        removeClass('header','menuOuvert')
        removeClass('nav','menuOuvert')
        removeClass('.rectangle','menuOuvert')
        removeClass('.icon','menuOuvert')
        
    }
    else{
        addClass('header','menuOuvert')
        addClass('nav','menuOuvert')
        addClass('.rectangle','menuOuvert')
        addClass('.icon','menuOuvert')
    }
    
})
function addClass(select, classe){
return  document.querySelector(select).classList.add(classe);

}
function removeClass(select, classe){
return  document.querySelector(select).classList.remove(classe);

}
