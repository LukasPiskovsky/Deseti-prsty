let body = document.querySelector("body")
let level = document.querySelectorAll("a")
let main = document.querySelector("main")
let heading = document.querySelector("h1")
let currentLevel = null
let textString = null
let end = false
let i = 0
let a = 0

let content = document.createElement("p")
let span = document.createElement("span")
let pressed = document.createElement("p")
let score = document.createElement("p")
score.style.marginTop = "100px"
let topScore1 = localStorage.getItem("topScore1") ?? 0
let topScore2 = localStorage.getItem("topScore2") ?? 0
let topScore3 = localStorage.getItem("topScore3") ?? 0
let topScore4 = localStorage.getItem("topScore4") ?? 0
pressed.style.fontSize = "1.6rem"



if(level.className != "active"){
    content.innerHTML = `Vitejte na strance kde muzete trenovat psani vsemi deseti v interaktivni forme s moznosti prekonavani svych nejlepsich vysledku, momentalni dosazene vysledky jsou: <br> <br> Level 1: ${topScore1} bodu  <br> Level 2: ${topScore2} bodu <br> Level 3: ${topScore3} bodu  <br> Level 4:${topScore4} bodu `
    main.appendChild(content)

}

window.addEventListener("keydown", (e) =>{
    pressed.classList.add("fade")
    if(e.key){
        pressed.classList.remove("fade")
        setTimeout(()=>{
            pressed.classList.add("fade")
        }, 100)
    }
})

if(span.textContent == ""){
    span.style.visibility = "hidden"
}

level[0].addEventListener("click", function(){
    level[0].className = "active"
    level[1].className = ""
    level[2].className = ""
    level[3].className = ""
    resetGame()
    currentLevel = 1
    span.style.visibility = "visible"

    textString = "Dnes bylo slunce nad horami."
    console.log(textString)

    
    content.textContent = textString
    main.appendChild(content)

    span.textContent = textString[0]
    main.appendChild(span)
    pressed.textContent = null
    main.appendChild(pressed)
    

    score.textContent = "Nejvyší skóre: " + topScore1
    main.appendChild(score)
})

level[1].addEventListener("click", function(){

    level[0].className = ""
    level[1].className = "active"
    level[2].className = ""
    level[3].className = ""

    resetGame()
    currentLevel = 2
    span.style.visibility = "visible"


    textString = "V lese rostou houby a zpívají ptáci."
    console.log(textString)

    
    content.textContent = textString
    main.appendChild(content)

    span.textContent = textString[0]
    main.appendChild(span)
    pressed.textContent = null
    main.appendChild(pressed)
    
    score.textContent = "Nejvyší skóre: " + topScore2
    main.appendChild(score)
})

level[2].addEventListener("click", function(){

    level[0].className = ""
    level[1].className = ""
    level[2].className = "active"
    level[3].className = ""

    resetGame()
    currentLevel = 3
    span.style.visibility = "visible"

    textString = "Zajímavý rytíř chladně zkoumal hluboký les podivných tajemství."
    console.log(textString)

    
    content.textContent = textString
    main.appendChild(content)

    span.textContent = textString[0]
    main.appendChild(span)
    pressed.textContent = null
    main.appendChild(pressed)
    
    score.textContent = "Nejvyší skóre: " + topScore3
    main.appendChild(score)
})

level[3].addEventListener("click", function(){

    level[0].className = ""
    level[1].className = ""
    level[2].className = ""
    level[3].className = "active"

    resetGame()
    currentLevel = 4
    span.style.visibility = "visible"

    textString = "Starobylý chrám ukrýval vzácné poklady, zatímco moudrý poutník tiše sledoval klidné jezírko pod večerním obzorem."
    console.log(textString)

    
    content.textContent = textString
    main.appendChild(content)

    span.textContent = textString[0]
    main.appendChild(span)
    pressed.textContent = null
    main.appendChild(pressed)
    
    score.textContent = "Nejvyší skóre: " + topScore4
    main.appendChild(score)
})


let reset = document.createElement("button")
let p = document.createElement("p")
let pTwo = document.createElement("p")
let pThree = document.createElement("p")
let pScore = document.createElement("p")
let hr = document.createElement("hr")


body.addEventListener("keydown", function(event){
    console.log(event)
    pressed.textContent = event.key

    if(event.key == " "){
        pressed.textContent = '"mezerník"'
    }


    if(event.key != textString[i]){
        a++
        pressed.style.color = "red"
    } 
    if(event.key == "Shift"){
        a--
        pressed.textContent = ""
    }
    

    if(event.key == textString[i]){
        i++
        span.textContent = textString[i]
        pressed.style.color = "green"
    } 

    if(textString[i] == " "){
        span.textContent = '"mezerník"'
    } 


    if(i==1){
        start = new Date().getTime()
    }

    if(i==textString.length && end == false){

        end = true

        span.style.visibility = "hidden"

        let final = new Date().getTime()
        let finalTime = (final - start) / 1000

        main.appendChild(hr)

        p.textContent = "Čas: " + finalTime.toFixed(1) + "s"
        main.appendChild(p)


        pTwo.textContent = "Úhozů za minutu: " + Math.round((textString.length / finalTime) * 60)
        main.appendChild(pTwo)


        pThree.textContent = "Počet chyb: " + a
        main.appendChild(pThree)

        let levelScore = (Math.round((textString.length / finalTime) * 60) - a*20) * 10
        if(levelScore < 0){
            levelScore = 0
        }

        pScore.textContent = "Skóre: " + levelScore
        main.appendChild(pScore)

        let newHighScore = document.createElement("h2")
        newHighScore.textContent = "Nové nejvyšší skóre!!"

        if(currentLevel == 1 && levelScore > topScore1){
            localStorage.setItem("topScore1", levelScore)
            topScore1 = levelScore
            main.appendChild(newHighScore)
        } else if (currentLevel == 2 && levelScore > topScore2){
            localStorage.setItem("topScore2", levelScore)
            topScore2 = levelScore
            main.appendChild(newHighScore)
        } else if(currentLevel == 3 && levelScore > topScore3){
            localStorage.setItem("topScore3", levelScore)
            topScore3 = levelScore
            main.appendChild(newHighScore)
        } else if (currentLevel == 4 && levelScore > topScore4) {
            localStorage.setItem("topScore4", levelScore)
            topScore4 = levelScore
            main.appendChild(newHighScore)
        }

        reset.textContent = "Reset"
        main.appendChild(reset)

        
        reset.addEventListener("click", function(){
            i=0
            a=0
            reset.remove()
            pTwo.remove()
            pThree.remove()
            p.remove()
            hr.remove()
            pScore.remove()
            newHighScore.remove()
            span.textContent= textString[0]
            pressed.textContent = ""
            span.style.visibility = "visible"
            end = false
        })


    }

})

let resetGame = () => {
    i=0
    a=0
    end = false
    reset.remove()
    pTwo.remove()
    pThree.remove()
    p.remove()
    hr.remove()
    pScore.remove()
}

document.querySelector("main").appendChild(span)
