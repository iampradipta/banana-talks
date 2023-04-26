var btnTranslate = document.querySelector("#btn-translate")
var txtInput= document.querySelector("#txt-input")
var txtOutput= document.querySelector("#txt-output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function  getTransURL(inputURL){
    return serverURL +"?"+"text="+inputURL
}


function clickHandler(){

     var inputText = txtInput.value
    fetch(getTransURL(inputText))
    .then(responce => responce.json())
    .then(json => {
        var transedText = json.contents.translated;
        txtOutput.innerText = transedText;
    })
}

btnTranslate.addEventListener("click", clickHandler)