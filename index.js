function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun("bathe my dog");

const mondayWork = (function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`);
})
mondayWork("work from home");

function wrapAdjective(wrapper) {
    return function(msg) {
        if (wrapper == null) {
        return `You are *${msg}*!`
        } else {
            return `You are ${wrapper}${msg}${wrapper}!`
        }
    }
}
