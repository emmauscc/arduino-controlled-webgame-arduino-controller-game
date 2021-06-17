$(document).ready(function(){
    /*for(var i=1;i<4;i++){
        $('.container').append('<div></div>').children().last().addClass('row').attr('id', 'row'+i);
    }
    
    for(var j=1;j<4;j++){
        for(var i=0;i<30;i++){
            if(j==2){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('topLeft');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('top');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeRight');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeLeft');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('middle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('right');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeLeft');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('bottom');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('bottomRight');
                }
            }else if(j==1){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeLeft');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('top');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('topRight');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('player');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('middle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeRight');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('bottomLeft');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('bottom');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeRight');
                }
            }else{
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeLeft');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('top');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('topRight');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('left');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('middle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeRight');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('bottomLeft');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('bottom');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('id', i).attr('rowNum', j).addClass('holeRight');
                }//else{
                  //  $('#row'+j).append('<div></div>').children().last().attr('id', +i).attr('rowNum', j);
                //}
                
            }
        }
    }
    function keyPress(e){
        if(e.key=="a"){
            if($(".player").attr('id')==0){

            }else if($(".player").attr('id')==10){

            }else if($(".player").attr('id')==20){

            }else{
                x=$('.player').attr('id');
                if(x<9 && x>0){
                    $('.player').removeClass().addClass('top');
                }else if(x==19){
                    $('.player').removeClass().addClass('holeRight');
                }else if(x<19 && x>10){
                    $('.player').removeClass().addClass('middle');
                }else if(x<29 && x>20){
                    $('.player').removeClass().addClass('bottom');
                }else if(x==29){
                    $('.player').removeClass().addClass('holeRight');
                }
                x=x-1;
                $('.player').attr('id', x);
            }
        }
    }*/
    $('.container').append('<div></div>').children().last().addClass('row').attr('id', 'row1');
    for(var i=0;i<30;i++){
        if(i>=0 && i<10){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', '1').addClass('empty');
        }else if(i==10){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', '1').addClass('player');
        }else{
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', '1').addClass('empty');
        }
    }

    /*for(var j=1;j<4;j++){
        for(var i=0;i<30;i++){
            if(j==2){
                if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('id', +i).attr('rowNum', j).addClass('hole');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('id', +i).attr('rowNum', j).addClass('hole');
                }else{
                    $('#row'+j).append('<div></div>').children().last().attr('id', +i).attr('rowNum', j);
                }
            }else{
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('id', +i).attr('rowNum', j).addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('id', +i).attr('rowNum', j).addClass('hole');
                }else{
                    $('#row'+j).append('<div></div>').children().last().attr('id', +i).attr('rowNum', j);
                }
            }
        }
    }*/
    

    /*for(var i=0; i<39; i++){
        for(var j=0;j<3;j++){
            if(i==10){
                if($('#grid'+i).attr('rowNum', j)>0){
                    $('#grid'+i).css('float', 'none');
                }
            }else if(i==20){
                if($('#grid'+i).attr('rowNum', j)>0){
                    $('#grid'+i).css('float', 'none');
                }
            }else if(i==30){
                if($('#grid'+i).attr('rowNum', j)>0){
                    $('#grid'+i).css('float', 'none');
                }
            }else{
    
            }
        }
    }*/
});

function keyIn(e){

    console.log("key in");
    x=parseInt($('.player').attr('gridNum'));
    console.log(x);
    if(e.key=="a"){
        if(x==0){

        }else{
            $('.player').removeClass().addClass('empty');
            x=x-1;
            console.log(x);
            $('.empty[gridNum='+x+']').removeClass().addClass('player');
        }
    }else if(e.key=="d"){
        if(x==9){

        }else{
            $('.player').removeClass().addClass('empty');
            x=x+1;
            console.log(x);
            $('.empty[gridNum='+x+']').removeClass().addClass('player');
        }
    }else if(e.key=="w"){
        if(x==0){

        }else{
            $('.player').removeClass().addClass('empty');
            x=x-10;
            console.log(x)
            $('.empty[gridNum='+x+']').removeClass().addClass('player');
            setTimeout(function(){
                $('.player').removeClass().addClass('empty');
                x=x+10;
                console.log(x)
                $('.empty[gridNum='+x+']').removeClass().addClass('player');
            }, 2000);
        }
    }else if(e.key=="s"){
        if(x==20){

        }else{
            $('.player').removeClass().addClass('empty');
            x=x+10;
            console.log(x)
            $('.empty[gridNum='+x+']').removeClass().addClass('player');
            setTimeout(function(){
                $('.player').removeClass().addClass('empty');
                x=x-10;
                console.log(x)
                $('.empty[gridNum='+x+']').removeClass().addClass('player');
            }, 2000);
        }
    }
}