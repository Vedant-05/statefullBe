interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}

// Adapter pattern, Factory Pattern, Singleton Pattern, Strategy Pattern


// will use singleton ,so make constructor private

export class GameManager {
    games: Game[] = [];
    private static instance: GameManager;

    private constructor() {
        this.games = [];
    }

    static getInstanace()
    {
           if(GameManager.instance)
            {
                return GameManager.instance
            }
            GameManager.instance = new GameManager();
            return GameManager.instance
    }

    addMove(gameId: string, move: string) {
        console.log(`Adding move ${move} to game ${gameId}`)
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move)
    }

    addGame(gameId: string){
        const game : Game = {
            id : gameId,
            whitePlayerName: "Alice",
            blackPlayerName: "Denzel",
            moves: []
        }

        this.games.push(game);

    }

    log(){
        console.log(this.games)
    }
}

export const gameManager = GameManager.getInstanace()

