import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/sticky-header';
import Modal from './modules/modal';
import $ from 'jquery';

let  mobile = new MobileMenu();

new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");

let sticky = new StickyHeader();

let modal = new Modal();