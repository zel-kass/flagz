'use client'
import flagMap from "@/public/json-maps/flag-map-en.json";
import keyMap from "@/public/json-maps/flag_keymap.json";

interface KeyMap {
    [key: string]: string
}

interface FlagMap {
    [key: string]: string
}

export default class Quizz {
    private _typedKeyMap: KeyMap = keyMap;
    private _typedFlagMap: FlagMap = flagMap;
    private _score: number;
    // private seen_flags: string[];
    private _actual_flag: string;
    private _solutions: Map<string, string>;
    // private good_answer: string;
    // private bad_answer: string[];
    

    constructor() {
        this._score = 0;
        this._solutions = new Map();
        const key: number = this._createRandomKey();
        this._actual_flag = this._typedKeyMap[key.toString()];
        this._setSolutions();
    }

    private _setSolutions() {
        const random: number = Math.floor(Math.random() * 4);
        for (let i: number = 0; i < 4; i++) {
            if (i == random)
                this._solutions.set(this._actual_flag, this._typedFlagMap[this._actual_flag]);
            else {
                const key: string = this._typedKeyMap[this._createRandomKey().toString()];
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