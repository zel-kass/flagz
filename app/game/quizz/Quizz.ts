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
    private _seen_flags: string[];

    constructor() {
        this._score = 0;
        this._seen_flags = [];
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
        this._seen_flags.push(this._actual_flag);
        this._solutions.clear();
        let found: string | undefined = 'xy';
        while (found != undefined) {
            const key = this._createRandomKey();
            this._actual_flag = this._typedKeyMap[key.toString()];
            found = this._seen_flags.find((element) => element == this._actual_flag);
        }
        this._setSolutions();
    }

    private _setSolutions() {
        const random: number = Math.floor(Math.random() * 3);
        for (let i: number = 0; i < 4; i++) {
            if (i == random)
                this._solutions.set(this._actual_flag, this._typedFlagMap[this._actual_flag]);
            else {
                let key: string = "xy";
                while (key == "xy" || this._solutions.has(key))
                    key = this._typedKeyMap[this._createRandomKey().toString()];
                this._solutions.set(key, this._typedFlagMap[key]);
            }
        }
    }

    private _createRandomKey() : number {
        return Math.floor(Math.random() * 197);
    }

    public getScore() { return this._score; } 
    public getActualFlag() { return this._actual_flag; }
    public getSolutions() { return this._solutions; }
}