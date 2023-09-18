// let totalVideo  = document.querySelectorAll('video');
// console.log(totalVideo);

// totalVideo.forEach((video)=>{
//     video.addEventListener('mouseover', function(){
//         this.play();
//     });
//     video.addEventListener('mouseleave', function(){
//         this.pause();
//     });

//     video.addEventListener('touchstart', function(){
//         this.play();
//     });

//     video.addEventListener('touchend', function(){
//         this.pause();
//     })
// });





$(document).ready(function() {
    new DataTable('#example', {
        fixedHeader: {
            header: true,
            footer: true
        },

        "pageLength" : 100
    });
    
  });
  


  