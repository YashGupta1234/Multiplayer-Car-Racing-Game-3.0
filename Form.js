class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Start");
        this.greeting = createElement("h3");
    }
    display(){
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(displayWidth/2 - 50, 0);        
        this.input.style("color", "red")
        this.input.position(displayWidth/2 + 50,displayHeight/2  - 100);
        this.button.position(displayWidth/2 + 110, displayHeight/2 - 50);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            PlayerCount ++;
            player.index = PlayerCount;
            player.updatename();
            player.updatecount(PlayerCount)
                this.greeting.html("Welcome"+ " " + player.name);
                this.greeting.position(displayWidth/2 - 70, displayHeight/4);
            })
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}