// code your solution here
saturdayFun();
function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(visualFlair = "*"){
    return  function(adjective = "special"){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}