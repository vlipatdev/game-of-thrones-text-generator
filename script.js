const slider = document.querySelector('.range');
const rangeValue = document.querySelector('.range-value');
const textArea = document.querySelector('.textarea');
const addTag = document.querySelector('.add-tag');
const copy = document.querySelector('.copy');
const charArr = Array.from(document.querySelectorAll('.character-wrapper'));

const lines = {
    Daenerys: [
        'When the sun rises in the west, and sets in the east, then you shall return to me, my sun and stars.',
        'Do you understand? I’m no ordinary woman. My dreams come true',
        'Yes, all men must die. But we are not men.',
        'I will not let those I have freed slide back into chains. I will not sail for Westeros… I will do what queens do. I will rule.',
        'They can live in my new world, or they can die in their old one.',
        'If I give everyone what they deserve I’ll have no one left to rule.',
        'You are small men. None of you are fit to lead the Dothraki. But I am, so I will',
        'We both want to help people. We can only help them from a position of strength. Sometimes strength is terrible.',
        'You told me to do nothing before and I listened to you. I’m not doing nothing again.',
        'Our fathers were evil men. All of us here. They left the world worse than they found it. We’re not going to do that. We’re going to leave the world better than we found it.',
        'I am a Khaleesi of the Dothraki. I am the wife of the great Khal and I carry his son inside me. The next time you raise a hand to me, will be the last time you have hands.',
        'I am Daenerys Stormborn, of House Targaryen, of the blood of Old Valyria – I am the Dragon’s Daughter. And I swear to you, that those who would harm you will die screaming.',
        'I am not your little princess. I am Daenerys Stormborn of the blood of old Valyria and I will take what is mine, with fire and blood I will take it.',
        'We have 200,000 reasons to take the city.'
    ],
    Jon: [
        'Lord Stark? There are five pups, one for each of the Stark children. The direwolf is the sigil of your House. They were meant to have them.',
        'My father taught me big men fall just as quick as little ones if you put a sword through their hearts.',
        'You’re right. There’s no need for a battle. Thousands of men don’t need to die. Only one of us. Let’s end this the old way. You, against me.',
        'They were born on the wrong side of the Wall—doesn’t make them monsters.',
        'I’m tired of fighting! It’s all I’ve done since I’ve left home! I’ve killed brothers of the Night’s Watch, I’ve killed wildings, I’ve killed men I admire, I hung a boy younger than Bran! I fought...and I lost.',
        'What did Father use to say? ‘Everything before the word ‘but’ is horse-shit.’',
        'Don’t call me Lord Snow.',
        'The more you give a king, the more he wants. We are walking on a bridge of ice with an abyss on either side. Pleasing one king is difficult enough, pleasing two is hardly possible',
        'First lesson: stick \'em with the pointy end.',
        'I swore a vow to the Night\'s Watch. If I don\'t take my own word seriously what sort of "Lord of Winterfell" would I be?',
        'Sometimes there is no happy choice Sam, only one less grievous than the others.',
        'Everyone knew what this place was, and no one told me. No one but you. My father knew, and left me to rot at the Wall, all the same.',
        'You mistake me, my Lord. That was a command, not an offer. Pack your arms and armor, say your farewells, and ride for Greyguard.'
    ],
    Cersei: [
        'A good king knows when to save his strength and when to destroy his enemies.',
        'Everyone who isn’t us is an enemy.',
        'I shall wear this as a badge of honor.',
        'When you play the game of thrones you win or you die. There is no middle ground.',
        'You want to be Hand of the King? You want to rule? This is what ruling is; lying on a bed of weeds, ripping them out by the root, one by one, before they strangle you in your sleep!',
        'Tears aren’t a woman’s only weapon. The best one’s between your legs.',
        'The only way to keep your people loyal is to make certain they fear you more than they do the enemy.',
        'An unhappy wife is a wine merchant’s best friend.',
        'You’re a clever man. But you’re not half as clever as you think you are.',
        'Tyrion may be a monster, but at least he killed our father on purpose. You killed him by mistake with stupidity.',
        'Look at me! Look at my face! It’s the last thing you’ll see before you die.',
        'I choose violence.'
    ],
    Arya: [
        'A girl is Arya Stark of Winterfell, and I am going home.',
        'Leave one wolf alive and the sheep are never safe. When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.',
        'I\'m going to kill the queen.',
        'No one.',
        'Do I have to call you Lady Stark now?',
        'Not if they lose their heads first.',
        'I was never going to be as good a lady as you. So I had to be something else. I never could have survived what you survived.',
        'Someday, I\'m gonna put a sword through your skull through your eye out the back of your skull.',
    ],
    Jaime: [
        'The things I do for love.',
        'If there are gods, why is the world so full of pain and injustice?',
        'It was that white cloak that soiled me, not the other way around.',
        'I learned from Ser Arthur Dayne, the Sword of the Morning, who could have slain all five of you with his left hand while he was taking a piss with the right.',
        'I\'ve lost a hand, a father, a son, a sister, and a lover, and soon enough I will lose a brother. And yet they keep telling me House Lannister has won this war.',
        'I have made kings and unmade them. Sansa Stark is my last chance for honor.',
        'A Hand without a hand? A bad jape, sister. Don\'t ask me to rule.',
    ],
    Tyrion: [
        'Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.',
        'I have to disagree. Death is so final, yet life is full of possibilities.',
        'A mind needs books like a sword needs a whetstone.',
        'I have a tender spot in my heart for cripples and bastards and broken things.',
        'We’ve had vicious kings and we’ve had idiot kings, but I don’t know if we’ve ever been cursed with a vicious idiot boy king!',
        'It’s hard to put a leash on a dog once you’ve put a crown on its head.',
        'Of course we are. Just because I pay you for your services doesn’t diminish our friendship.',
        'I try to know as many people as I can. You never know which one you’ll need.',
        'Drinking and lust. No man can match me in these things. I am the god of tits and wine… I shall build a shrine to myself at the next brothel I visit.',
        'Oh, “monster.” Perhaps you should speak to me more softly then. Monsters are dangerous and, just now, kings are dying like flies.',
        'It’s not easy being drunk all the time. If it were easy, everyone would do it.',
        'Every time we deal with an enemy, we create two more.',
        'In my experience eloquent men are right every bit as often as imbeciles.',
        'It’s easy to confuse ‘what is’ with ‘what ought to be,’ especially when ‘what is’ has worked out in your favor.'
    ],
    Sansa: [
        'There is no honor in tricks.',
        'Oh wait, I just realized I don’t care.',
        'I am Sansa Stark of Winterfell. This is my home. And you can’t frighten me.',
        'I know what Ramsay is. I know what he’ll do to me. If I’m going to die, let it happen while there’s still some of me left.',
        'Did you know about Ramsay? If you didn’t know, you’re an idiot. If you did know, you’re my enemy.',
        'You’re going to die tomorrow, Lord Bolton. Sleep well.',
        'Winter is here.',
        'No need to seize the last word, Lord Baelish. I’ll assume it was something clever.',
        'I’m sure cutting off heads is very satisfying, but that’s not the way you get people to work together.',
        'I’m a slow learner, it’s true. But I learn. Thank you for all your many lessons, Lord Baelish. I will never forget them.',
        'When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.'
    ],
    Bran: [
        'You\'re a good man.',
        'It wasn\'t for the murder that the Gods cursed the Rat Cook, or for serving the King\'s son in a pie. He killed a guest beneath his roof. That\'s something the Gods can\'t forgive.',
        'Hush Hodor! No more Hodoring!',
        'I can\'t do it by choice. I don\'t know how. It happens in my dreams.',
        'Old stories are like old friends. You have to visit them from time to time.',
        'I\'m here, only I\'m broken. Will you ... will you fix me ... my legs, I mean?'
    ],
    Sam: [
        'I\'m tired of reading about the achievements of better men.',
        'I was nothing at all, and when you\'re nothing at all, there\'s no more reason to be afraid.',
        'I killed a white walker, I killed a Thenn. I\'ll take my chances with you.',
        'I can\'t steal her. She\'s a person, not a goat.',
        'I read it in a book.',
        'My father doesn\'t like wildlings. He hoped I\'d make a man of myself by killing some bloody wildlings.',
        'You\'re better than me in everything. Except reading.',
        'I\'ve been worrying about Jon for years. He always comes back.'
    ],
    Melisandre: [
        'When the red star bleeds and the darkness gathers, Azor Ahai shall be born again amidst smoke and salt to wake dragons out of stone.',
        'We all must choose. Man or woman, young or old, lord or peasant, our choices are the same. We choose light or we choose darkness.',
        'For the night is dark and full of terrors.',
        'I see a darkness in you. And in that darkness, eyes staring back at me. Brown eyes, blue eyes, green eyes. Eyes you\'ll shut forever. We will meet again.',
        'There\'s only one hell, Princess. The one we live in now.',
        'If half an onion is black with rot, it\'s a rotten onion. A man is good or he is evil.',
        'If the lamb sees the knife, she panics. Her panic seeps into her meat, darkens it, fouls the flavor.'
    ]
};
//array from object keys
const namesArr = Object.keys(lines);
//random index generator
const randInd = Math.floor(Math.random() * namesArr.length);
//set initial character
let curChar = namesArr[randInd];
//set initial array of lines
let curArr = lines[namesArr[randInd]];
//declare paragraph text
let parText;

//update ui function
const updateUI = () => {
    textArea.value = combineParagraphs(slider.value);
    slider.value == 1 ? parText = 'paragraph' : parText = 'paragraphs';
    rangeValue.innerHTML = `${curChar} <span class="divider">&#10140;</span> ${slider.value} ${parText}`;
    if (copy.textContent != 'Copy') copy.textContent = 'Copy';
};

//set previous element
let prevEl = charArr[randInd];

//add event listener to all characters
charArr.map((el, i) => {
    el.addEventListener('click', () => {
        curArr = lines[namesArr[i]];
        curChar = namesArr[i];
        updateUI();
        if(prevEl !== el) {
            el.classList.add('selected');
            prevEl.classList.remove('selected');
        }
        prevEl = el;
    });
});

//generate a random paragraph length with default min and max
const parLength = (min = 3, max = 6) => Math.floor(Math.random() * (max - min) + min);

//generate a paragraph
const genParagraph = (parLength, arr) => {
    let sentencesArr = [];
    for(i = 0 ; i < parLength ; i++) {
        sentencesArr.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return sentencesArr.join(' ');
};

let addTagVal = 0;
//combine paragraphs
const combineParagraphs = n => {
    let parArr = [];
    for(n = 0; n < slider.value; n++) {
        addTagVal == 0 ? parArr.push(genParagraph(parLength(), curArr)) : parArr.push(`<p>${genParagraph(parLength(), curArr)}</p>`);
    }
    return parArr.join('\n\n');
};

//render paragraphs on slider change
slider.addEventListener('change', updateUI);

//add or remove p tags
addTag.addEventListener('click', () => {
    addTagVal == 0 ? addTagVal = 1 : addTagVal = 0;
    updateUI();
    addTag.innerHTML != 'Remove &lt;p&gt; tags' ? addTag.innerHTML = 'Remove &lt;p&gt; tags' : addTag.innerHTML = 'Add &lt;p&gt; tags';
});

//copy text
copy.addEventListener('click', () => {
    textArea.select();
    document.execCommand('copy');
    copy.textContent = 'Copied!';
    textArea.blur();
});

//initialize function
const init = () => {
    charArr[randInd].classList.add('selected');
    slider.value == 1 ? parText = 'paragraph' : parText = 'paragraphs'
    rangeValue.innerHTML = `${curChar} <span class="divider">&#10140;</span> ${slider.value} ${parText}`;
    textArea.textContent = combineParagraphs(); 
}

init();