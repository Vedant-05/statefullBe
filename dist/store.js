"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
// Adapter pattern, Factory Pattern, Singleton Pattern, Strategy Pattern
// will use singleton ,so make constructor private
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstanace() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: "Alice",
            blackPlayerName: "Denzel",
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = GameManager.getInstanace();
