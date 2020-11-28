$(function (){
    'use strict';
    
  var old_place;
    $('input').click(function (){
         old_place= $(this).attr('placeholder');
        //alert(old_place);
        $(this).attr('placeholder','');
        
        

    });

    $('input').blur(function (){
<<<<<<< HEAD
        $(this).attr('placeholder', old_place)ll; 
=======
        $(this).attr('placeholder', old_place)ee; 
>>>>>>> 83e8aa89bad5175183d8487e182718cc10a1b438

        });
        
        

      $('input').each(function (){
        if($(this).attr('required') === 'required') {
          $(this).after('<span class="astrisk" style="position: absolute;right: 25;top: 13.8;color:#ec2d2d;font-size: 30px;"> * </span>');
          
        }
      });

  var passField = $('.password');
  $('.show-pass').hover(function ()  {
    
    passField.attr('type', 'text');

  }, function () {

    passField.attr('type', 'password');
        
  });
     
});

