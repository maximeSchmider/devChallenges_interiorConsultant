var animations 
var chargement = false;


document.querySelector('.icon').addEventListener('click',(event)=>{
    if(!chargement){
        if(document.querySelector('.icon').classList.contains('menuOuvert')){
            removeClass('header','menuOuvert')
            removeClass('nav','menuOuvert')
            removeClass('.rectangle','menuOuvert')
            removeClass('.icon','menuOuvert')
            chargement = true;
            animations.forEach((animation)=>{
                animation.style.animationPlayState="running";
                setTimeout(()=>{
                    animation.style.animationPlayState="paused";
                    chargement = false;
                },3000
                )
            })
            
        }
        else{
            addClass('header','menuOuvert')
            addClass('nav','menuOuvert')
            addClass('.rectangle','menuOuvert')
            addClass('.icon','menuOuvert')
            addClass('#un','animation')
            addClass('#deux','animation')
            addClass('#trois','animation')
            chargement = true;
            animations = document.querySelectorAll('.animation')
            animations.forEach((animation)=>{
                animation.style.animationPlayState="running";
                setTimeout(()=>{
                    animation.style.animationPlayState="paused";
                    chargement = false;
                },3000
                )
            })}
            
        }
        })
function addClass(select, classe){
    let query=document.querySelector(select).classList;
    if (!query.contains(classe)){
        return  query.add(classe);

    }
    
}
function removeClass(select, classe){
    let query=document.querySelector(select).classList;
    if (query.contains(classe)){
        return  query.remove(classe);

    }
    
}
