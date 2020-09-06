class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getcount(){
        var playercountref = database.ref("PlayerCount");
        playercountref.on("value", (data)=>{
            PlayerCount = data.val();
        })
    }
    updatename(){
        var playerindex = "Players/Player" + this.index;
        database.ref(playerindex).set({
            Name: this.name,
            Distance: this.distance
        })
    }
    updatecount(count){
        database.ref("/").update({
            PlayerCount: count
        })
    }
    static getplayerinfo(){
        var playerinforef = database.ref("Players");
        playerinforef.on("value", (data) =>{
            allplayers = data.val();
        })
    }
}