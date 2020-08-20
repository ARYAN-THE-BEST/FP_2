class Game{
constructor(){


}

start(){
form = new Form();
form.display();
}

play(){
    form.hide();
    border1=createSprite(200,200,5,500);
    border1.shapeColor= "red"
    console.log(border1)
drawSprites();  
}
}