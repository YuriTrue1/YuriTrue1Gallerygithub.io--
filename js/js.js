
function swap(img){
    var tmp=document.images[0].src
    document.images[0].src=img.src
    img.src=tmp

}

function backSwap(){
    let position
    let src=document.images[0].src
    let positions=src.split(".jpg")
    let count=0

    positions=positions[0].split("")
    
    for(let element in positions){
        count++
    }
    position=positions[count-1]
    position--
    if(position<0){
        position=3
    }
    document.images[0].src="./images/img"+position+".jpg";
}
function nextSwap(){
    let position
    let src=document.images[0].src
    let positions=src.split(".jpg")
    let count=0
    
    positions=positions[0].split("")
    
    for(let element in positions){
        count++
    }
    position=positions[count-1]
    position++
    if(position>3){
        position=0
    }
   document.images[0].src="./images/img"+position+".jpg";
}

