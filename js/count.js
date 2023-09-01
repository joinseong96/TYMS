$(function(){
    var executed = false;                                                                                      

    $(window).scroll(function(){
        var threshold = $('.count_list_wrap').offset().top - 600;
        if(!executed){
            if($(window).scrollTop() >= threshold){
                var progressRate01 = $('.num01').attr('data-rate');
                var progressRate02 = $('.num02').attr('data-rate');
                
                $({percent: 0}).animate({percent:progressRate01},{
                    duration: 1500,
                    progress:function(){
                        var now = this.percent;
                        $('.num01').text(Math.ceil(now)+'건');
                        $('.num01').text( $('.num01').text().replace( /(\d)(?=(?:\d{3})+(?!\d))/g, '$1,' ) );
                    }
                });
                $({percent: 0}).animate({percent:progressRate02},{
                    duration: 1500,
                    progress:function(){
                        var now = this.percent;
                        $('.num02').text(Math.ceil(now)+'개');
                    }
                });
                executed = true;
            } 
        }
        // $('.num01').text( $('.num01').text().replace( /\,/g, '' ).replace( /(\d)(?=(?:\d{3})+(?!\d))/g, '$1,' ) );
        // $('.num01').text( $('.num01').text().replace( /(\d)(?=(?:\d{3})+(?!\d))/g, '$1,' ) );
        console.log('.num01');
    });
});