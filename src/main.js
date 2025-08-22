import './style.scss';
import { animate, inView, scroll } from "motion";

const main = document.getElementsByClassName("main").item(0);
const title = document.getElementsByClassName('main__title').item(0);
const note = document.getElementsByClassName('main__note').item(0);
const image = document.getElementsByClassName('main__image').item(0);
const link = document.getElementsByClassName('main__link').item(0);
const blur = document.getElementsByClassName('blur').item(0);

// scroll(animate(note, {y: 200}), { target: main });
scroll(animate(image, {y: -500}), { target: main, offset: ['start 0.2', 'center start'] });
scroll(animate(blur, {y: 0}), { target: main, offset: ['start 0.2', 'start start'] });


const boxes = document.getElementsByClassName('about__box');

Array.from(boxes).forEach((box) => {
    inView(box, () => {
        box.getElementsByTagName('video')[0].play();
    }, { amount: 1 });
})
