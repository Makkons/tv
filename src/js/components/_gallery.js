import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);

document.addEventListener('DOMContentLoaded', function () {
   const gallerySwiper = document.querySelector('.gallery__swiper');
   const timer = 29;
   let setIntervalTimer = undefined;

   if (gallerySwiper) {
      const swiper = new Swiper('.gallery__swiper', {
         slidesPerView: '1',
         loop: true,
         autoplay: {
            delay: timer * 1000,
         },
         pagination: {
            el: '.swiper-pagination',
         },
         on: {
            slideChange: () => {
               let currentTimer = timer;
               const timerElement = document.querySelector('.swiper-timer');

               clearTimeout(setIntervalTimer);
               changeTimer();

               setIntervalTimer = setInterval(() => {
                  currentTimer = currentTimer - 1;
                  changeTimer();
                  if (!currentTimer) clearTimeout(setIntervalTimer);
               }, 1000);

               function changeTimer() {
                  let formatTimer = new Date(currentTimer * 1000).toISOString().slice(14, 19);
                  timerElement.textContent = formatTimer;
               }
            },
         },
      });
   }
});
