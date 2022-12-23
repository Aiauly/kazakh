$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#img1").click(function(){
      $("#img1").animate({
        left: '50px',
        height: '250px',
        width: '350px'
      });
    });
  });