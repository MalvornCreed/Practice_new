const textCon = document.getElementById("quote");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let randInt = Math.floor(Math.random() * 10);
    if (randInt === 1) {
        textCon.innerHTML = `<strong>"Waste no more time arguing what a good man should be. Be One.</strong> <br> -Marcus Aurelius"`;
    } else if (randInt === 2) {
        textCon.innerHTML = `<strong>Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature.
         Love the hand that fate deals you and play it as your own, for what could be more fitting? </strong><br> - Marcus Aurelius`;
    } else if (randInt === 3) {
        textCon.innerHTML = `<strong>"It never ceases to amaze me: we all love ourselves more than other people, 
        but care more about their opinion than our own."</strong><br>-Marcus Aurelius`
    } else if (randInt === 4) {
        textCon.innerHTML = `<strong>"In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, 
        don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business"</strong><br>-Marcus Aurelius`
    } else if (randInt === 5) {
        textCon.innerHTML = `<strong>"If it is not right, do not do it, if it is not true, do not say it.”</strong><br>-Marcus Aurelius`;
    } else if (randInt === 6) {
        textCon.innerHTML = `<strong>"The best revenge is not to be like your enemy.”</strong><br>-Marcus Aurelius`;
    } else if (randInt === 7) {
        textCon.innerHTML = `<strong>"Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.”</strong><br>-Marcus Aurelius`
    } else if (randInt === 8) {
        textCon.innerHTML = `<strong>"It’s time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet.”</strong><br>-Marcus Aurelius`
    } else if (randInt === 9) {
        textCon.innerHTML = `<strong>"External things are not the problem. It’s your assessment of them. Which you can erase right now.”</strong><br>-Marcus Aurelius`
    } else if (randInt === 10) {
        textCon.innerHTML = `<strong>"If anyone can refute me—show me I’m making a mistake or looking at things from the wrong perspective—I’ll gladly change.
         It’s the truth I’m after, and the truth never harmed anyone.”</strong><br>-Marcus Aurelius`
    }
})
