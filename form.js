class Form{
    constructor(){

    }

    display(){
        var title=createElement('h2');
        title.html("MULTIPLAYER CAR RACING GAME")
        title.position(130,10)

        var input= createInput('NAME')
        var button=createButton('PLAY')
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value()
            playerCount+=1;
            player.update(name)
            player.updateCount(playerCount+=1)
            var greeting=createElement('h3')
            greeting.html("HELLO"+name)
            greeting.position(130,160);
        })
    }
}