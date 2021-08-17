var maxRowNum;
$(document).ready(function(){
    /*for(var i=1;i<4;i++){
        $('body').append('<div></div>').children().last().addClass('row').attr('id', 'row'+i);
    }    
    for(var j=1;j<4;j++){
        for(var i=0;i<30;i++){
            if(j==2){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('grid').addClass('gridStyle');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('middle').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('right').addClass('grid').addClass('gridStyle');
                }
            }else if(j==1){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle').addClass('gridStyle');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('grid').addClass('gridStyle');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('player').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('middle').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }
            }else{
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('grid').addClass('gridStyle');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('middle').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }//else{
                //  $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                //}
                
            }
        }
    }
    for(var i=1;i<5;i++){
        $('body').append('<div></div>').children().last().addClass('rowBorder').attr('id', 'row'+i);
        maxRowNum=i;
        console.log(maxRowNum);
    }
    $('body').append('<div></div>').children().last().addClass('lives');
    for(var i=0;i<3;i++){
        $('.lives').append('<div></div>').children().last().addClass('alive').attr('life', i);
    }
    $('body').append('<div></div>').children().last().addClass('coins');
    for(var i=0;i<3;i++){
        $('.coins').append('<div></div>').children().last().addClass('tBF').attr('coinsFound', i);
    }
    for(var j=1;j<5;j++){
        for(var i=0;i<30;i++){
            if(j==1){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>2 && i<6){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==6){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>6 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('player');
                }else if(i>10 && i<12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>14 && i<16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>16 && i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if(i>19 && i<22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>22 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }


            }else if(j==2){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>2 && i<4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i>4 && i<7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>7 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if (i==11){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if (i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'heart').addClass('grid').addClass('heart');
                }else if (i==16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==17){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>19 && i<21){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==21){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>22 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }

            }else if(j==3){
                if(i<0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i==1){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i>4 && i<7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if(i>7 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==11){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if (i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>12 && i<15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'heart').addClass('grid').addClass('heart');
                }else if (i==16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==17){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>19 && i<20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==21){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>22 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==25){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>25 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if (i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }

            }else if(j==4){
                if(i<10){
                    if(i % 2==0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').css("background-color", "black");
                    }else if (i % 2!=0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle')
                    }
                }else if(i>=10 && i<20){
                    if(i % 2!=0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').css("background-color", "black");
                    }else if (i % 2==0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle')
                    }
                }else{
                    if(i % 2==0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').css("background-color", "black");
                    }else if (i % 2!=0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle')
                    }
                }
            }
        }
    }*/
});
/*var x;
var y;
var lifeNum=0;
var numOfCoinsFound=0;
function statusCheck(){
    /*if($('.player').attr('status')=="hole"){
        y=y+1
        $('.player').removeClass().addClass('gridStyle').addClass('grid');
        $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
    }else if($('.player').attr('status')=="obstacle"){
        setTimeout(function(){
            $('.player').removeClass('player').addClass('obstacle');
            x=x-1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('obstacle').addClass('player');
            $('.alive[life='+lifeNum+']').removeClass().addClass('dead');
            lifeNum=lifeNum+1;
        }, 850);
    }else if($('.player').attr('status')=="heart"){
        $('#row'+y).children('.grid[gridNum='+x+']').removeClass('heart').addClass('player');
        lifeNum=lifeNum-1
        $('.dead[life='+lifeNum+']').removeClass().addClass('alive');
        $('.player').attr('status', 'empty');
    }else if($('.player').attr('status')=="coin"){
        $('#row'+y).children('.grid[gridNum='+x+']').removeClass('coin').addClass('player');
        $('.player').attr('status', 'empty');
        $('.tBF[coinsFound='+numOfCoinsFound+']').removeClass().addClass('found');
        numOfCoinsFound=numOfCoinsFound+1;
    }else{

    }
}
function keyIn(e){
    x=parseInt($('.player').attr('gridNum'));
    y=parseInt($('.player').attr('rowNum'));
    if(e.key=="a"){
        if(x==0){

        }else if(x==10){

        }else if(x==20){

        }else{
            $('.player').removeClass('player').addClass('gridStyle');
            x=x-1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }
    }else if(e.key=="d"){
        if(x==9){

        }else if(x==19){

        }else if(x==29){

        }else{
            $('.player').removeClass('player').addClass('gridStyle');
            x=x+1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }
    }else if(e.key=="w"){
        if($('.player').attr('status')=="jumpUp"){
            if($('.player').attr('rowNum')==1){

            }else{
                y=y-1
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
            }
        }else if($('.player').attr('status')=="dropDown"){

        }else if(x>=0 && x<=9){

        }else if(x>=20 && x<=29){
            $('.player').removeClass('player').addClass('gridStyle');
                x=x-10;
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
                statusCheck();
        }else{
            $('.player').removeClass('player').addClass('gridStyle');
            x=x-10;               
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            setTimeout(function(){
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x+10;                  
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
            }, 1000);
            statusCheck();
        }
    }else if(e.key=="s"){
        if($('.player').attr('status')=="dropDown"){
            if($('.player').attr('rowNum')==maxRowNum){

            }else{
                y=y+1
                $('.player').removeClass('player').addClass('gridStyle');
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            }
        }else if($('.player').attr('status')=="jumpUp"){

        }else if(x<20){
            $('.player').removeClass('player').addClass('gridStyle');
            x=x+10;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }else if(x>=20 && x<=29){
            $('.player').removeClass('player').addClass('gridStyle');
            x=x-10;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }
    }
}*/
function easyMapGen(){
    for(var i=1;i<5;i++){
        $('body').append('<div></div>').children().last().addClass('rowBorder').attr('id', 'row'+i);
        maxRowNum=i;
        //console.log(maxRowNum);
    }
    $('body').append('<div></div>').children().last().addClass('lives');
    for(var i=0;i<4;i++){
        $('.lives').append('<div></div>').children().last().addClass('alive').attr('life', i);
    }
    $('body').append('<div></div>').children().last().addClass('coins');
    for(var i=0;i<3;i++){
        $('.coins').append('<div></div>').children().last().addClass('tBF').attr('coinsFound', i);
    }
    $('body').append('<div></div>').children().last().addClass('countdown');
    /*for(var i=0;i<4;i++){ // CREATE UNIQUE CLASSES AND UPDATE FROM ARDUINO
        $('.countdown').append('<div></div>').children().last().addClass()
    }*/
    for(var j=1;j<5;j++){
        for(var i=0;i<30;i++){
            if(j==1){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>2 && i<6){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==6){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>6 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('player');
                }else if(i>10 && i<12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>14 && i<16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>16 && i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if(i>19 && i<22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>22 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }


            }else if(j==2){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>2 && i<4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i>4 && i<7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>7 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if (i==11){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if (i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'heart').addClass('grid').addClass('heart');
                }else if (i==16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==17){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>19 && i<21){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==21){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>22 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }

            }else if(j==3){
                if(i<0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i==1){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==4){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i>4 && i<7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==7){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if(i>7 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==11){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if (i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i>12 && i<15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'heart').addClass('grid').addClass('heart');
                }else if (i==16){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==17){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>19 && i<20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==21){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==22){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>22 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if (i==25){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>25 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if (i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if (i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }

            }else if(j==4){
                if(i<10){
                    if(i % 2==0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'finish').addClass('grid').addClass('gridStyle').css("background-color", "black");
                    }else if (i % 2!=0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'finish').addClass('grid').addClass('gridStyle')
                    }
                }else if(i>=10 && i<20){
                    if(i % 2!=0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'finish').addClass('grid').addClass('gridStyle').css("background-color", "black");
                    }else if (i % 2==0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'finish').addClass('grid').addClass('gridStyle')
                    }
                }else{
                    if(i % 2==0){
                        $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'finish').addClass('grid').addClass('gridStyle').css("background-color", "black");
                    }else if (i % 2!=0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'finish').addClass('grid').addClass('gridStyle')
                    }
                }
            }
        }
    }
}