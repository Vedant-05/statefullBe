import { games } from "./store";
import { startLogger } from "./logger";

startLogger()


setInterval(()=>{
    games.push({
    id: Math.random().toString(),
    whitePlayerName: "alice",
    blackPlayerName: "Denzel",
    moves: []
    })
},5000)



//ws server to get moves