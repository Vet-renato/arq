var InformaçãoUm = window.document.getElementById ("ajuda1")
var InformaçãoDois = window.document.getElementById ("ajuda2")

function aparecerUm (){
    InformaçãoUm.style= "display:flex"
    InformaçãoDois.style="display:none"
}
function aparecerDois(){
    InformaçãoDois.style= "display:flex"
    InformaçãoUm.style="display:none"
}