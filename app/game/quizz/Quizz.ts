'use client'
import flagMap from "@/public/json-maps/flag-map-en.json";
import keyMap from "@/public/json-maps/flag_keymap.json";

interface KeyMap {
    [key: string]: string;
}

interface FlagMap {
    [key: string]: string;
}

export default class Quizz {
    private _typedKeyMap: KeyMap = keyMap;
    private _typedFlagMap: FlagMap = flagMap;
    private _score: number;
    private _actual_flag: string = "";
    private _solutions: Map<string, string>;
    private _seen_flags: Set<string>;
    private _timer: number = 5;
    private _gameOver: boolean = false;

    constructor() {
        this._score = 0;
        this._seen_flags = new Set<string>();
        this._solutions = new Map();
        this.newLevel();
        window.addEventListener('keydown', (event) => {
            if (event.code == "Enter") {
                this.upScore();
                this.newLevel();
            }
        })
    }

    public upScore() { this._score += 1; }

    public newLevel() {
        if (this._score >= Object.keys(flagMap).length) 
            return ;
        this._actual_flag = "xy";
        while (this._actual_flag == "xy" || this._seen_flags.has(this._actual_flag)) {
            const key = this._createRandomKey();
            this._actual_flag = this._typedKeyMap[key.toString()];
        }
        this._solutions.clear();
        this._setSolutions();
        this._seen_flags.add(this._actual_flag);
    }

    public newGame() {
        this._score = 0;
        this._seen_flags.clear();
        this._gameOver = false;
        this.newLevel();
    }

    private _setSolutions() {
        const random: number = Math.floor(Math.random() * 3);
        for (let i: number = 0; i < 4; i++) {
            if (i == random)
                this._solutions.set(this._actual_flag, this._typedFlagMap[this._actual_flag]);
            else {
                let key: string = "xy";
                while (key == "xy" || key == this._actual_flag || this._solutions.has(key))
                    key = this._typedKeyMap[this._createRandomKey().toString()];
                this._solutions.set(key, this._typedFlagMap[key]);
            }
        }
    }

    private _createRandomKey() : number {
        return Math.floor(Math.random() * 197);
    }

    public setGameOver(gameOver: boolean) { this._gameOver = gameOver; }

    public getScore() { return this._score; } 
    public getActualFlag() { return this._actual_flag; }
    public getSolutions() { return this._solutions; }
}