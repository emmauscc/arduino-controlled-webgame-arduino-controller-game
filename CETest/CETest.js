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
    for(var i=1;i<30;i++){
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
    
    for(var j=1;j<30;j++){
        for(var i=0;i<30;i++){
            if(j==1){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<10){
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
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>14 && i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if(i>19 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>24 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }else if(j % 2==0){
                if(i<8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').addClass('upperHole');
                }else if(i<10 && i>8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i>10 &&i<15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'heart').addClass('grid').addClass('heart');
                }else if(i>15 &&i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if(i>18 && i<20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i>20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }else if(j % 2!=0){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').addClass('upperHole');
                }else if(i>0 && i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>14 && i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if(i>19 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>24 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }
        }
    }*/ 
    buttonGen();
    $('.easy').click(function(){
        $('body').append('<div></div>').children().last().addClass('reset').html('Reset');
        generateMap(3, 4, 1);
    });
    $('.normal').click(function(){
        $('body').append('<div></div>').children().last().addClass('reset').html('Reset');
        generateMap(6, 3, 2);
    });
    $('.hard').click(function(){
        $('body').append('<div></div>').children().last().addClass('reset').html('Reset');
        generateMap(9, 2, 3);
    });
    $('.reset').click(function(){
        $('body').children('div').remove();
        buttonGen();
    });
});
var x;
var y;
var lifeNum=0;
var numOfCoinsFound=0;
function pageScrollDown(){
    window.scrollBy(0,300);
}
function pageScrollUp(){
    window.scrollBy(0,-300);
}
function statusCheck(){
    /*if($('.player').attr('status')=="hole"){
        y=y+1
        $('.player').removeClass().addClass('gridStyle').addClass('grid');
        $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
    }else */if($('.player').attr('status')=="obstacle"){
        setTimeout(function(){
            $('.player').removeClass('player').addClass('obstacle');
            x=x-1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('obstacle').addClass('player');
            $('.alive[life='+lifeNum+']').removeClass().addClass('dead');
            lifeNum=lifeNum+1;
        }, 100);
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
                $('.player').removeClass('player').addClass('gridStyle');
            x=x-10;               
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            setTimeout(function(){
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x+10;                  
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            }, 1000);
            statusCheck();
            }else{
                y=y-1
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
                pageScrollUp();
            }
        }else if($('.player').attr('status')=="dropDown"){
            $('.player').removeClass('player').addClass('gridStyle');
            x=x-10;               
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            setTimeout(function(){
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x+10;                  
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            }, 1000);
            statusCheck();
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
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
                statusCheck();
            }, 1000);
        }
    }else if(e.key=="s"){
        if($('.player').attr('status')=="dropDown"){
            if($('.player').attr('rowNum')==maxRowNum){
                $('.player').removeClass('player').addClass('gridStyle');
                x=x+10;
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
                statusCheck();
            }else{
                y=y+1
                $('.player').removeClass('player').addClass('gridStyle');
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
                pageScrollDown();
            }
        }else if($('.player').attr('status')=="jumpUp"){
            $('.player').removeClass('player').addClass('gridStyle');
            x=x+10;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
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
    console.log(y);
}
function generateMap(numOfRows, healthNum, coinNum){
    numOfRows=numOfRows+1
    for(var i=1;i<numOfRows;i++){
        $('body').append('<div></div>').children().last().addClass('rowBorder').attr('id', 'row'+i);
        maxRowNum=i;
        console.log(maxRowNum);
    }
    $('body').append('<div></div>').children().last().addClass('lives');
    for(var i=0;i<healthNum;i++){
        $('.lives').append('<div></div>').children().last().addClass('alive').attr('life', i);
    }
    $('body').append('<div></div>').children().last().addClass('coins');
    for(var i=0;i<coinNum;i++){
        $('.coins').append('<div></div>').children().last().addClass('tBF').attr('coinsFound', i);
    }
    for(var j=1;j<numOfRows;j++){
        for(var i=0;i<30;i++){
            coinNumber=(j+1)/2
            coinNumRow=j
            if(j==1){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<10){
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
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>14 && i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').attr('coinNumber', coinNumber).addClass('grid').addClass('coin');
                }else if(i>19 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>24 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }else if(j % 2==0){
                if(i<8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').addClass('upperHole');
                }else if(i<10 && i>8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i>10 &&i<15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'heart').addClass('grid').addClass('heart');
                }else if(i>15 &&i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if(i>18 && i<20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i>20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }else if(j % 2!=0){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').addClass('upperHole');
                }else if(i>0 && i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>14 && i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').attr('coinNumber', coinNumber).addClass('grid').addClass('coin');
                }else if(i>19 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>24 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }
        }
        for(var i=0;i<numOfRows-1;i++){
            if(i<=coinNum){
            
            }else{
                $('#row'+i).children('.grid[coinNumber='+i+']').removeClass('coin').addClass('gridStyle');
            }
        }
    }
    
}
function buttonGen(){
    $('body').append('<div></div>').children().last().addClass('easy').html('Easy');
    $('body').append('<div></div>').children().last().addClass('normal').html('Normal');
    $('body').append('<div></div>').children().last().addClass('hard').html('Hard');
}