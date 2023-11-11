export const jsQuizz = {
    masteries: [
      {fire: 0, description:"(fire description)"},
      {wind: 0, description:"(wind description)"},
      {earth: 0, description:"(earth description)"},
      {water: 0, description:"(water description)"},
      {medic: 0, description:"(medic description)"},
      {str_wm: 0, description:"(STR wm description)"},
      {int_wm: 0, description:"(INT wm description)"},
      {taijutsu: 0, description:"(taijutsu description)"},
      {light: 0, description:"(light description)"},
      {fan: 0, description:"(fan description)"},
      {bubble: 0, description:"(bubble description)"},
      {gf: 0, description:"(gf description)"},
    ],
    questions: [
      {
        question:
          "What do you enjoy the most in MMORPG?",
        choices: [
          {text: "AOE PVE (grind)", value: {fire: 5, water: 3, wind: 2, earth: 3, int_wm: 3, bubble: 3, fan: 2, gf: 1, light: 1}},
          {text: "SINGLE TARGET PVE (boss farming)", value: {fire: 5, water: 2, wind: 3, earth: 2, int_wm: 4, bubble: 2, fan: 3, light: 3}},
          {text: "SOLO PVP", value: {str_wm: 5, wm_int: 5, fire: 4, taijutsu: 5, wind: 4, earth: 2, water: 5, light: 3, fan: 5, bubble: 4, gf: 5}},
          {text: "GROUP PVP", value: {wm_int: 5, fire: 4, taijutsu: 1, wind: 2, earth: 5, water: 2, medic: 5, light: 5, fan: 2, bubble: 4}},
          {text: "Both PVE and PVP", value: {fire: 3, wind: 3, earth: 3, water: 3, medic: 3, str_wm: 3, int_wm: 3, taijutsu: 3, light: 3, fan: 3, bubble: 3, gf: 3}},
        ],
      },
      {
        question:
          "What role do you prefer?",
        choices: [
          {text: "Damage Dealer (high burst)", value: {fire: 5, wind: 5, earth: 3, water: 3, medic: 2, str_wm: 2, int_wm: 5, taijutsu: 1, light: 4, fan: 2, bubble: 1, gf: 2}},
          {text: "Damage Dealer (high DPS)", value: {fire: 3, wind: 1, earth: 1, water: 1, medic: 2, str_wm: 5, int_wm: 2, taijutsu: 5, light: 2, fan: 3, bubble: 2, gf: 1}},
          {text: "Crowd control", value: {fire: 2, wind: 1, earth: 5, water: 3, medic: 1, str_wm: 3, int_wm: 1, taijutsu: 2, light: 5, fan: 4, bubble: 5, gf: 3}},
          {text: "Support", value: {fire: 0, wind: 1, earth: 3, water: 0, medic: 5, str_wm: 0, int_wm: 2, taijutsu: 2, light: 3, fan: 2, bubble: 3, gf: 2}},
        ],
      },
      {
        question:
          "In combat, where are you, and what are you doing?",
        choices: [
          {text: "I try to stand back and support my teammates.", value: {fire: 2, wind: 1, earth: 4, water: 2, medic: 4, str_wm: 0, int_wm: 3, taijutsu: 0, light: 4, fan: 1, bubble: 4, gf: 1}},
          {text: "I am healing!", value: {fire: 0, wind: 0, earth: 0, water: 0, medic: 5, str_wm: 0, int_wm: 0, taijutsu: 0, light: 0, fan: 0, bubble: 0, gf: 0}},
          {text: "I am waiting for perfect opportunity to kill my enemies in single strike from stealth", value: {fire: 3, wind: 2, earth: 1, water: 2, medic: 1, str_wm: 0, int_wm: 3, taijutsu: 0, light: 1, fan: 1, bubble: 0, gf: 0}},
          {text: "I am waiting for perfect set up from my teammates", value: {fire: 4, wind: 4, earth: 3, water: 2, medic: 3, str_wm: 2, int_wm: 4, taijutsu: 2, light: 4, fan: 2, bubble: 3, gf: 2}},
          {text: "I am always on frontline disrupting my enemies", value: {fire: 1, wind: 1, earth: 1, water: 3, medic: 1, str_wm: 4, int_wm: 1, taijutsu: 5, light: 1, fan: 5, bubble: 3, gf: 4}},
          {text: "One man army", value: {fire: 0, wind: 0, earth: 0, water: 0, medic: 0, str_wm: 5, int_wm: 0, taijutsu: 5, light: 0, fan: 5, bubble: 4, gf: 4}},
          {text: "I set up enemies for my teammates", value: {fire: 1, wind: 1, earth: 5, water: 3, medic: 1, str_wm: 3, int_wm: 1, taijutsu: 2, light: 5, fan: 3, bubble: 5, gf: 2}},
        ],
      },
      {
        question:
          "During battle do you prefer to play safe or do you take risk?",
        choices: [
          {text: "I take risk!", value: {fire: 2, wind: 3, earth: 3, water: 1, medic: 0, str_wm: 1, int_wm: 1, taijutsu: 1, light: 4, fan: 0, bubble: 0, gf: 2}},
          {text: "I play safe!", value: {fire: 0, wind: 0, earth: 0, water: 4, medic: 5, str_wm: 3, int_wm: 4, taijutsu: 4, light: 2, fan: 4, bubble: 5, gf: 3}},
        ],
      },
      {
        question:
          "Which weapon(s) would you prefer?",
        choices: [
          {text: "Swords - (STR weapons)", value: {fire: 0, wind: 0, earth: 0, water: 0, medic: 0, str_wm: 10, int_wm: 0, taijutsu: 0, light: 0, fan: 0, bubble: 0, gf: 6}},
          {text: "Hand-to-hand combat (STR/AGI/CHK stat)", value: {fire: 0, wind: 0, earth: 0, water: 0, medic: 6, str_wm: 0, int_wm: 0, taijutsu: 10, light: 0, fan: 0, bubble: 0, gf: 8}},
          {text: "Fans - (STR ranged weapons)", value: {fire: 0, wind: 0, earth: 0, water: 0, medic: 0, str_wm: 0, int_wm: 0, taijutsu: 0, light: 0, fan: 10, bubble: 0, gf: 0}},
          {text: "Kunais/staffs - (INT weapons)", value: {fire: 5, wind: 5, earth: 5, water: 5, medic: 5, str_wm: 0, int_wm: 5, taijutsu: 0, light: 5, fan: 0, bubble: 0, gf: 0}},
          {text: "Bubble pipes - (STR snare weapons)", value: {fire: 0, wind: 0, earth: 0, water: 0, medic: 0, str_wm: 0, int_wm: 0, taijutsu: 0, light: 0, fan: 0, bubble: 10, gf: 0}},
          {text: "Bubble pipes - (INT HYBRID snare weapons)", value: {fire: 0, wind: 0, earth: 0, water: 10, medic: 0, str_wm: 0, int_wm: 0, taijutsu: 0, light: 0, fan: 0, bubble: 0, gf: 0}}
        ],
      },
    ],
  };






  //Are you more interested in classes that excel in controlling the battlefield or those that focus on dealing massive damage?

  
  //In player vs. player (PvP) situations, do you prefer one-on-one duels, small skirmishes, or large-scale battlegrounds?