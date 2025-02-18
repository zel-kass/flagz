import flagMap from "@/public/json-maps/flag-map-en.json";
import keyMap from "@/public/json-maps/flag_keymap.json";

interface KeyMap {
    [key: string]: string
}
export default class Quizz {
    private _typedKeyMap: KeyMap = keyMap
    private _score: number;
    // private seen_flags: string[];
    private _actual_flag: string;
    private _solutions: string[]
    // private good_answer: string;
    // private bad_answer: string[];
    

    constructor() {
        this._score = 0;
        this._solutions = [];
        const key: number = this._createRandomKey();
        this._actual_flag = this._typedKeyMap[key.toString()];
        this._setSolutions();
    }

    private _setSolutions() {
        for (let i = 0; i < 3; i++) {
            this._solutions[i] = this._typedKeyMap[this._createRandomKey().toString()]
        }
        this._solutions[3] = this._actual_flag;
        this._shuffle(this._solutions);
    }

    private _shuffle = (array: string[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    };

    private _createRandomKey() : number {
        return Math.floor(Math.random() * 197);
    }

    public getScore() { return this._score; } 
    public getActualFlag() { return this._actual_flag; }
    public getSolutions() { return this._solutions; }
}