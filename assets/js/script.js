
const botaoTopo = document.getElementById("back-to-top");

window.addEventListener('scroll',()=> {
    if(window.scrollY > 300){
        botaoTopo.classList.add('show')
    } else {
        botaoTopo.classList.remove('show')
    }
});


botaoTopo.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


function sendSuccess(){
    swal("Enviado com Sucesso!", "Enviado para o seu Email!", "info")
}