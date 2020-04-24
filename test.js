function first(){
    console.log('this is printed first')
    setTimeout(function(){
        second()
    },2000)
}
function second(){
    console.log('this is printed second')
    setTimeout(function(){
        third()
    },2000)
}

function third(){
    console.log('this is printed third')
    setTimeout(function(){
        first()
    },2000)
}
first()