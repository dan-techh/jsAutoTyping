const nenoDisplay = document.getElementById('neno')
const phrase = ["Niaje, my name is dan.", "Coding is my passion", "let's go."]

let i = 0
let j = 0
let currentPhrase = []
let mwishoFuta = false
let isEnd = false
function loop () {
    let isEnd = false
    nenoDisplay.innerHTML = currentPhrase.join('')
    if (i < phrase.length) {
        

        if (!mwishoFuta && j <= phrase[i].length) {
            currentPhrase.push(phrase[i][j])
            j++
        }

        if (mwishoFuta && j <= phrase[i].length) {
            currentPhrase.pop(phrase[i][j])
            j--
        }

        if(j==phrase[i].length) { //hapa sa ndo deletion inaaanza
            isEnd = true
            mwishoFuta = true
        }

        if (mwishoFuta && j===0) {
            currentPhrase = []
            mwishoFuta = false
            i++ 
            //hapa sani after kumalza lap ya kwanza i.e the whole phrase
            if(i== phrase.length) {
                i =0
            }
        }
    }
    //hapa sa ni kuset speed ya timer
    const thifindi = Math.random() * (80-50) + 50
    const kawaidaThifindi = Math.random() * (300-200) + 200
    const time = isEnd ? 2000 : mwishoFuta ? thifindi : kawaidaThifindi
    setTimeout(loop, time)
}
loop()