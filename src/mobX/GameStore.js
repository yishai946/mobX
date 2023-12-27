import { makeObservable, observable, computed, action } from "mobx";
const words = [
  "apple",
  "banana",
  "chocolate",
  "dolphin",
  "elephant",
  "flamingo",
  "giraffe",
  "hippopotamus",
  "island",
  "jazz",
  "kangaroo",
  "lemon",
  "mountain",
  "noodle",
  "ocean",
  "penguin",
  "quasar",
  "robot",
  "sunflower",
  "tiger",
  "umbrella",
  "vortex",
  "waterfall",
  "xylophone",
  "yellow",
  "zeppelin",
  "avalanche",
  "butterfly",
  "carousel",
];

export class GameStore {
  letters = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];
  word = words[Math.floor(Math.random() * words.length)];

  constructor() {
    makeObservable(this, {
      word: observable,
      getWord: action,
      setWord: action,
    });
  }
}
