

document.querySelector('.icon').addEventListener('click',(event)=>{
    if(document.querySelector('.icon').classList.contains('menuOuvert')){
        removeClass('header','menuOuvert')
        removeClass('nav','menuOuvert')
        removeClass('.rectangle','menuOuvert')
        removeClass('.icon','menuOuvert')
        removeClass('#un','animation')
        removeClass('#deux','animation')
        removeClass('#trois','animation')
        
        addClass('#un','animationReverse')
        addClass('#deux','animationReverse')
        addClass('#trois','animationReverse')
        
    }
    else{
        addClass('header','menuOuvert')
        addClass('nav','menuOuvert')
        addClass('.rectangle','menuOuvert')
        addClass('.icon','menuOuvert')
        addClass('#un','animation')
        addClass('#deux','animation')
        addClass('#trois','animation')
        removeClass('#un','animationReverse')
        removeClass('#deux','animationReverse')
        removeClass('#trois','animationReverse')
    }
    
})
function addClass(select, classe){
return  document.querySelector(select).classList.add(classe);

}
function removeClass(select, classe){
return  document.querySelector(select).classList.remove(classe);

}
