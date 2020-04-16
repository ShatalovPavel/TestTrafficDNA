jQuery(document).ready(function ($) {
     let serviceTv = new ServiceTv();
     $('#users ul').html(serviceTv.renderList(data.accounts))
     let idStorage = null;
     let screenBtnAddFlag = false;
     let screenBtnCancelFlag = false;
     $(document).keyup(function (e) {
          const element = $('.active');
          const btnAdd = $('.btn-add button');

          switch (e.which) {
               //button left
               case 37:

                    if(element[0].tagName==='LI'){

                         data.accounts = serviceTv.deleteElement(data.accounts,element.data('id'))
                         $('#users ul').html( serviceTv.renderList(data.accounts));
                    }
                    else if(element[0].tagName === 'BUTTON' && element.hasClass('screen-2-btn-cancel')){
                         element.removeClass('active');
                         screenBtnAddFlag = true;
                         screenBtnCancelFlag = false;
                         $('div.screen-2 .screen-2-btn-add').addClass('active');
                    }
                    else if(element[0].tagName === 'BUTTON' && element.hasClass('screen-2-btn-add') ||
                        (element[0].tagName === 'INPUT') ){
                         return false;
                    }
                    else{
                         if(idStorage !== null){
                              btnAdd.removeClass('active');
                              $("#users ul li[data-id="+idStorage+"]").addClass('active');
                         }
                    }
                    break;
              //button down
               case 40:
                    if(element[0].tagName === 'LI') {
                        element.removeClass('active');
                        if(element[0].nextSibling !== null){
                             if(element.next()[0].tagName === 'LI'){
                                   element.next().addClass('active');
                             }
                        }else{
                             btnAdd.removeClass('active');
                             $('#users ul li:first-child').addClass('active');
                        }
                    }
                    else if(element[0].tagName === 'INPUT'){
                         element.removeClass('active');
                         $('div.screen-2 input').blur();
                         if(screenBtnAddFlag){
                              $('.screen-2-btn-add').addClass('active');
                         }
                         else if(screenBtnCancelFlag){
                              $('.screen-2-btn-cancel').addClass('active');
                         }else{
                              $('.screen-2-btn-add').addClass('active');
                         }

                    }

                    break;
               //button up
               case 38:
                    if(element[0].tagName === 'INPUT'){
                         return false;
                    }
                    else if(element[0].tagName === 'BUTTON' && element.hasClass('screen-2-btn-add')){
                         element.removeClass('active');
                         $('div.screen-2 input').focus().addClass('active');

                    }
                    else if(element[0].tagName === 'BUTTON' && element.hasClass('screen-2-btn-cancel')){
                         element.removeClass('active');
                         $('div.screen-2 input').focus().addClass('active');
                    }
                    else if(typeof (element.prev()[0]) === "undefined") {
                         element.removeClass('active');
                         $('#users ul li:last-child').addClass('active');
                    }
                    else{
                         if (element[0].tagName === 'LI') {
                              element.removeClass('active');
                                   if (element.prev()[0].tagName === 'LI') {
                                        element.prev().addClass('active');
                                   }
                         }
                    }
                    break;
                    //button right
               case 39:
                    if (element[0].tagName === 'LI'){
                         idStorage = element.data('id');
                         element.removeClass('active');
                         btnAdd.addClass('active');
                    }
                    if(element[0].tagName === 'BUTTON' && element.hasClass('screen-2-btn-add')){
                         element.removeClass('active');
                         screenBtnAddFlag = false;
                         screenBtnCancelFlag = true;
                         $('div.screen-2 .screen-2-btn-cancel').addClass('active');
                    }
                    break;
                    //enter
               case 13:
                    if(element[0].tagName === 'BUTTON' && element.hasClass('add-user')){
                         element.removeClass('active');
                         $('div.block-users').css('display','none');
                         $('div.screen-2').css('display','block');
                         $('div.screen-2 input').focus().addClass('active');

                    }
                    if(element[0].tagName === 'BUTTON' && element.hasClass('screen-2-btn-add')){
                         if($('.input-user input').val() != ''){
                              data.accounts = serviceTv.addElement(data.accounts, $('.input-user input').val(), IMAGE_PATH);
                              $('.input-user input').val('');
                              $('div.screen-2').css('display','none');
                              $('div.block-users').css('display','flex');
                              $('#users ul').html( serviceTv.renderList(data.accounts));
                         }
                    }
                    if(element[0].tagName === 'BUTTON' && element.hasClass('screen-2-btn-cancel')){

                              $('.input-user input').val('');
                              $('div.screen-2').css('display','none');
                              $('div.block-users').css('display','flex');
                              $('#users ul li:first-child').addClass('active');
                              screenBtnAddFlag = false;
                              screenBtnCancelFlag = false;


                    }
          }
     });

});