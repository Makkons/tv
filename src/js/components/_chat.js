document.addEventListener('DOMContentLoaded', function () {
   const chatVariations = document.querySelectorAll('.chat__variation');

   const interval = 5000;

   if (chatVariations.length) {
      setInterval(function () {
         // spinertia(2000, 5000)
         for (let index = 0; index < chatVariations.length; index++) {
            const variation = chatVariations[index];
            if (variation.classList.contains('active') && index == chatVariations.length - 1) {
               variation.classList.remove('active');
               chatVariations[0].classList.add('active');
            } else if (variation.classList.contains('active')) {
               variation.classList.remove('active');
               chatVariations[++index].classList.add('active');
            }
         }
      }, interval);

      // function spinertia(min, max) {
      //    min = Math.ceil(min);
      //    max = Math.floor(max);
      //    return Math.floor(Math.random() * (max - min + 1)) + min;
      // }
   }
});
