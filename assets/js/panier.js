let pr = document.querySelector('.pr')
let tva = document.querySelector('.tva')
let taxe = 0
let button = document.querySelectorAll('.ajouter')
let retired = document.querySelectorAll('.retired')
let totalPrice = 0
let p = 0
let quantite = 0
let qt = document.querySelector('.qt')
console.log(pr)

for(let i = 0; i < button.length; i++){

    button[i].addEventListener('click', function(e){
        p = Number.parseInt(e.explicitOriginalTarget.value)
        totalPrice += p
        taxe = Math.round(totalPrice * (20.6/100))
        console.log(totalPrice)
        quantite++
        pr.innerText = "Prix : " + totalPrice  + ' Euros'
        tva.innerText = "TVA : " + taxe  + ' Euros'
        qt.innerText =' Quantité : ' + quantite
    })

}
for(let i = 0; i < retired.length; i++){

    retired[i].addEventListener('click', function(e){
        p = Number.parseInt(e.explicitOriginalTarget.value)
        if(totalPrice !== 0){
            totalPrice -= p
            taxe = Math.round(totalPrice * (20.6/100))
            quantite--
            pr.innerText = "Prix : " + totalPrice  + ' Euros'
            tva.innerText = "TVA : " + taxe  + ' Euros'
            qt.innerText =' Quantité : ' + quantite
        }
    })

}


