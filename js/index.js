document.addEventListener("DOMContentLoaded", ()=>{
    function menu(){
        let before =  document.querySelector('.logo-stand');
        let after =  document.querySelector('.logo-after');
        let menuDer = document.querySelector('.menu')
        let menuChang = "";
        before.addEventListener("click", ()=>{
            before.style.display = 'none';
            after.style.display = 'block';
            menuDer.style.display = 'block'
        })
        after.addEventListener("click", ()=>{
            after.style.display = 'none';
            before.style.display = 'block';
            menuDer.style.display = 'none'
            
        })
       
    }
    menu()
})