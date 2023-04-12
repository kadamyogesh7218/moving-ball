var ball=document.querySelector('#ball');
var box=document.querySelector('#container');



function getTop(){
    return ball.getBoundingClientRect().top;
}
function getLeft(){
    return ball.getBoundingClientRect().left;
}
function getBottom(){
    return ball.getBoundingClientRect().bottom;
}
function getBoxBottom(){
    return box.getBoundingClientRect().bottom;
}

function getRight(){
    return ball.getBoundingClientRect().right;
}
function getBoxRight(){
    return box.getBoundingClientRect().right;
}

function move(e){

    if(e=='w'||e=='W'){
        if(getTop()>8)
            ball.style.top=(getTop()-10)+"px";
    }

    if(e=='a'||e=='A'){
        if(getLeft()>10)
            ball.style.left=(getLeft()-10)+"px";
    }

    if(e=='s'||e=='S'){
        if(getBottom()<getBoxBottom()-8){
            ball.style.top=(getTop()+10)+"px";
        }
    }

    if(e=='d'||e=='D'){
        if(getRight()<getBoxRight()-8)
            ball.style.left=(getLeft()+10)+"px";
    }

}

window.addEventListener('keypress',function(event){
    var key=event.key;
    move(key);
}
);