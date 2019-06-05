let buttonAjouter = document.querySelectorAll('.ajouter')
let buttonRetirer = document.querySelectorAll('.retired')
let pr = document.querySelector('.pr')
let TVA = document.querySelector('.tva')
let QT = document.querySelector('.qt')
let price_tmp = 0
let Quantitie = 0
let price = 0
let magic = []
let lastIndex = 0
let p = ""
const Tva = 5.5 / 100

for (let i = 0; i < buttonAjouter.length; i++) {
    buttonAjouter[i].addEventListener('click' , function(e){
        let valeur = Number.parseInt(e.explicitOriginalTarget.value)
        Quantitie++
        price += valeur
        magic.push(valeur)
        lastIndex = magic[magic.length - 1]
        pr.innerHTML = "prix : " + price + " &euro;"
        TVA.innerHTML = "TVA : " + Math.round(price * (Tva)) + " &euro;"
        QT.innerHTML = "Quantité : " + Quantitie
    })
    buttonRetirer[i].addEventListener('click' , function(e){
        let valeur = Number.parseInt(e.explicitOriginalTarget.value)
        if (Quantitie <= 0){
            Quantitie = 0
        } else {
            Quantitie--
        }
        if(lastIndex === valeur) {
            price -= valeur
            price_tmp = price
            p = document.querySelectorAll('p')
            for(let i = 0; i < p.length; i++){
                if(p[i].className === lastIndex.toString()){
                    p[i].innerText = ""
                }
            }
            if(price_tmp < 0) {
                price = 0;
            }
        } else {
            p = document.querySelectorAll('p')
            for(let i = 0; i < p.length; i++){
                if(p[i].className === lastIndex.toString()){
                    p[i].innerText = "Veuillez retirer l'article en cours"
                }
            }
            Quantitie++
        }

        pr.innerHTML = "prix : " + price + " &euro;"
        TVA.innerHTML = "TVA : " + Math.round(price * (Tva)) + " &euro;"
        QT.innerHTML = "Quantité : " + Quantitie
    })
}