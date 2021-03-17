'use strict'
{
  window.addEventListener('load',function(){
    const dts = document.querySelectorAll(".question-list__text");

    function toggle() {
      const answer = this.nextElementSibling;
      answer.classList.toggle('hidden');
    };
    for( let i = 0; i < dts.length; i++){
      dts[i].addEventListener('click',toggle);
    }
  });
}


   


