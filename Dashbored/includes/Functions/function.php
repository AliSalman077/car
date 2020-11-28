<?php 

  

    function getTitle(){

        global$pageTitle;

        if(isset($pageTitle)){

            echo $pageTitle; 
        } else{

            echo 'Default';
        }
    }
  
    // the below -> . <- is for style if u delted the style will get error
  
  ?> 
   
