import './style.scss';
import { animate, inView, scroll } from "motion";


const day = new Date().getDate();
const link = document.getElementById('favicon')

link.id = 'favicon';
link.rel = 'icon';
link.type = 'image/png';

link.href = `favicons/${day}.png?v=${Date.now()}`;

const head = document.getElementsByTagName("head")[0];
const existing = document.getElementById("favicon");
if (existing) {
    head.removeChild(existing);
}
head.appendChild(link);

const main = document.getElementsByClassName("main").item(0);
const content = document.getElementsByClassName("main__content").item(0);
const title = document.getElementsByClassName('main__title').item(0);
const note = document.getElementsByClassName('main__note').item(0);
const background = document.getElementsByClassName('main__background').item(0);

scroll(animate(note, {display: 'none'}), { target: main, offset: ['0px', '500px'] });
scroll(animate(title, {display: 'none'}), { target: main, offset: ['start 0.2', 'start start'] });
scroll(animate(content, {top: 0}), { target: main, offset: ['0px', '500px'] });
scroll(animate(background, {opacity: 0}), { target: main, offset: ['0px', '500px'] });

const boxes = document.getElementsByClassName('about__box');

Array.from(boxes).forEach((box) => {
    inView(box, () => {
        box.getElementsByTagName('video')[0].play();
    }, { amount: 1 });
})
