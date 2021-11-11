const coposPeq = document.querySelectorAll('.copoPeq')
const litros = document.getElementById('litros')
const percen = document.getElementById('percentagem')
const resto = document.getElementById('resto')

atualizaCopoGrande()

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

    atualizaCopoGrande()
}

function atualizaCopoGrande() {
    const coposCheios = document.querySelectorAll('.copoPeq.cheio').length
    console.log(coposCheios)//CONSOLE LOG DE QUANTOS COPOS ESTÃO SELECCIONADOS
    const totalCopos = coposPeq.length
    console.log(totalCopos)//CONSOLE LOG DE TODOS OS COPOS

    if(coposCheios === 0) {
        percen.style.visibility = 'hidden' //ESCONDE O TEXTO DE PERCENTAGEM SE NÃO TIVER NENHUM copo SELECCIONADO
        percen.style.height = 0
    }
    else {//NO CASO DE HAVER COPOS SELECCIONADOS
        percen.style.visibility = 'visible'
        percen.style.height = `${coposCheios / totalCopos * 330}px` //COPO NO STYLE CSS TEM HEIGHT 330px
        percen.innerText = `${coposCheios / totalCopos *100}%`       //PARA APARECER A PERCENTAGEM NO COPO
    }

    if (coposCheios === totalCopos) {//NO CASO DE ESTAR CHEIO, COPOS CHEIOS === TOTALCOPOS
        resto.style.visibility ='hidden'
        resto.style.height = 0
    }
    else{
        resto.style.visibility='visible'
        litros.innerText = `${2-(250 * coposCheios / 1000)}L`    //PARA APARECER OS LITROS NO LUGAR DE REMAIN, CADA COPO 250ml * qtd copos cheios / 1000 para aparecer 0.5Litros por ex, 2-()para aparecer o restante
    }
}