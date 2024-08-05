import Marquee3k from 'marquee3000';

document.addEventListener('DOMContentLoaded', function () {
   const headerWrapper = document.querySelector('.header__wrapper');
   const headerMarquee3k = document.querySelector('.header__marquee');
   const headerPeriod = document.querySelectorAll('.header__period');
   const headerList = document.querySelectorAll('.header__list');

   if (!headerWrapper) return;

   const intervalDay = 30000;
   const intervalWeek = intervalDay * 2;
   const intervalHeader = intervalWeek + Number(headerMarquee3k.dataset.duration) * 1000;

   Marquee3k.init();
   Marquee3k.pauseAll();

   initHeader();

   const setIntervalInitHeader = setInterval(function () {
      initHeader();
   }, intervalHeader);

   function initHeader() {
      const setTimeoutStatePeriod = setTimeout(function () {
         changeStatePeriod();
         clearTimeout(setTimeoutStatePeriod);
      }, intervalDay);

      const setTimeoutActiveMarquee3k = setTimeout(function () {
         headerWrapper.classList.add('slide');
         Marquee3k.playAll();
         clearTimeout(setTimeoutActiveMarquee3k);
      }, intervalWeek);

      const setTimeoutActiveRanking = setTimeout(function () {
         changeStatePeriod();
         headerWrapper.classList.remove('slide');
         Marquee3k.pauseAll();
         clearTimeout(setTimeoutActiveRanking);
      }, intervalHeader);
   }

   function changeStatePeriod() {
      for (let i = 0; i < headerPeriod.length; i++) {
         headerPeriod[i].classList.toggle('active');
         headerList[i].classList.toggle('active');
      }
   }
});
