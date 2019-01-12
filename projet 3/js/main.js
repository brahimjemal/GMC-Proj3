let text = document.getElementById("hi")
function makeTextitalic(){
    text.style.fontStyle = "Italic"
}
function maketextbold(){
    text.style.fontWeight="bold"
}
function maketextunderline(){
    text.style.textDecoration="underline"
}
function changeSize(e){
    text.style.fontSize = e.value 
}
function myFunction(e){
    text.style.fontFamily = e.value
}