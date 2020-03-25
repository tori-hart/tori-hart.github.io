/* You've found my secret stash of cards!
 * If you're curious, you should send me a message;
 * it's the best way to get to know me or chit chat about code!
 */
const cardData = [
'test1',
'test2',
'test3',
'test4',
'test5',
'test6',
'test7',
'test8',
'test9',
];

function resetCards() {
    const activeCard = document.getElementsByClassName('active')[0];
    if (activeCard) {
        activeCard.classList.remove('active');
    }
}

function shuffleCards() {
    document.getElementsByClassName('card-wrapper')[0].classList.add('shuffle');
    const index = Math.floor(Math.random() * cardData.length);
    document.getElementsByClassName('active-card-message')[0].innerHTML = cardData[index];
    setTimeout(function(){
        document.getElementsByClassName('card-wrapper')[0].classList.remove('shuffle');
        document.getElementsByClassName('flip-card')[0].classList.add('active');
    }, 2000);
}