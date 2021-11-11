const coposPeq = document.querySelectorAll('.copoPeq')
const litros = document.getElementById('litros')
const percen = document.getElementById('percentagem')
const resto = document.getElementById('resto')

coposPeq.forEach( (copo, index) => {
    //console.log(index)/*VAI MOSTRAR OS INDEXES TODOS DOS OBJETOS COM CLASSE copoPeq */
    copo.addEventListener('click', () => realceCopos(index))
})

function realceCopos(idx){
    console.log(idx)//CADA CLIQUE VAI FAZER CONSOLE.LOG DO INDEX RESPECTIVO
    if (coposPeq[idx].classList.contains('cheio') && !coposPeq[idx].nextElementSibling.classList.contains('cheio')) {
        idx--
    }/*ACIMA ESTE IF VAI ADICIONAR A CLASSE cheio A TODOS OS OBJETOS coposPeq QUE TENHAM INDEX MENOR AO INDEX CLICADO */


    coposPeq.forEach( (c, i) => {
        if (i <= idx) {
            c.classList.add('cheio')
        }
        else {
            c.classList.remove('cheio')
        }
    })
}