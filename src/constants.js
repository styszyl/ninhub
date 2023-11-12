export const jsQuizz = {
    masteries: [
      {Fire: 0, description:"(Fire description)", chartData: {endurance: 3, support: 2, damage: 5, aoe:5, cc:2}},
      {Wind: 0, description:"(Wind description)", chartData: {endurance: 2, support: 2, damage: 4, aoe:2, cc:2}},
      {Earth: 0, description:"(Earth description)", chartData: {endurance: 4, support: 5, damage: 3, aoe:4, cc:5}},
      {Water: 0, description:"(Water description)", chartData: {endurance: 5, support: 2, damage: 3, aoe:2, cc:2}},
      {Medic: 0, description:"(Medic description)", chartData: {endurance: 3, support: 5, damage: 3, aoe:1, cc:1}},
      {STR_WM: 0, description:"(STR WM description)", chartData: {endurance: 3, support: 1, damage: 5, aoe:1, cc:3}},
      {INT_WM: 0, description:"(INT WM description)", chartData: {endurance: 2, support: 2, damage: 5, aoe:3, cc:1}},
      {Taijutsu: 0, description:"(Taijutsu description)", chartData: {endurance: 5, support: 2, damage: 4, aoe:3, cc:2}},
      {Lightning: 0, description:"(Lightning description)", chartData: {endurance: 2, support: 4, damage: 4, aoe:2, cc:5}},
      {Fan: 0, description:"(Fan description)", chartData: {endurance: 3, support: 3, damage: 4, aoe:3, cc:3}},
      {Bubble: 0, description:"(Bubble description)", chartData: {endurance: 2, support: 4, damage: 2, aoe:4, cc:5}},
      {Gentle_fist: 0, description:"(Gentle Fist description)", chartData: {endurance: 2, support: 2, damage: 5, aoe:2, cc:3}},
    ],
    questions: [
      {
        question:
          "What do you enjoy the most in MMORPG?",
        choices: [
          {text: "AOE PVE (grind)", value: {Fire: 5, Water: 3, Wind: 2, Earth: 3, INT_WM: 3, Bubble: 3, Fan: 2, Gentle_fist: 1, Lightning: 1}},
          {text: "SINGLE TARGET PVE (boss farming)", value: {Fire: 5, Water: 2, Wind: 3, Earth: 2, INT_WM: 4, Bubble: 2, Fan: 3, Lightning: 3}},
          {text: "SOLO PVP", value: {STR_WM: 5, wm_int: 5, Fire: 4, Taijutsu: 5, Wind: 4, Earth: 2, Water: 5, Lightning: 3, Fan: 5, Bubble: 4, Gentle_fist: 5}},
          {text: "GROUP PVP", value: {wm_int: 5, Fire: 4, Taijutsu: 1, Wind: 2, Earth: 5, Water: 2, Medic: 5, Lightning: 5, Fan: 2, Bubble: 4}},
          {text: "Both PVE and PVP", value: {Fire: 3, Wind: 3, Earth: 3, Water: 3, Medic: 3, STR_WM: 3, INT_WM: 3, Taijutsu: 3, Lightning: 3, Fan: 3, Bubble: 3, Gentle_fist: 3}},
        ],
      },
      {
        question:
          "What role do you prefer?",
        choices: [
          {text: "Damage Dealer (high burst)", value: {Fire: 5, Wind: 5, Earth: 3, Water: 3, Medic: 2, STR_WM: 2, INT_WM: 5, Taijutsu: 1, Lightning: 4, Fan: 2, Bubble: 1, Gentle_fist: 2}},
          {text: "Damage Dealer (high DPS)", value: {Fire: 3, Wind: 1, Earth: 1, Water: 1, Medic: 2, STR_WM: 5, INT_WM: 2, Taijutsu: 5, Lightning: 2, Fan: 3, Bubble: 2, Gentle_fist: 1}},
          {text: "Crowd control", value: {Fire: 2, Wind: 1, Earth: 5, Water: 3, Medic: 1, STR_WM: 3, INT_WM: 1, Taijutsu: 2, Lightning: 5, Fan: 4, Bubble: 5, Gentle_fist: 3}},
          {text: "Support", value: {Fire: 0, Wind: 1, Earth: 3, Water: 0, Medic: 5, STR_WM: 0, INT_WM: 2, Taijutsu: 2, Lightning: 3, Fan: 2, Bubble: 3, Gentle_fist: 2}},
        ],
      },
      {
        question:
          "Are you more interested in masteries that excel in controlling the battlefield(traps, Firewall, Earthwall) or controlling movement of your enemies(stun, snare, slow, cancel)? ",
        choices: [
          {text: "I am interested in controlling the battlefield", value: {Fire: 2, Wind: 0, Earth: 3, Water: 0, Medic: 0, STR_WM: 0, INT_WM: 5, Taijutsu: 0, Lightning: 0, Fan: 0, Bubble: 0, Gentle_fist: 0}},
          {text: "I am interested in controlling my enemies", value: {Fire: 2, Wind: 1, Earth: 3, Water: 2, Medic: 1, STR_WM: 2, INT_WM: 1, Taijutsu: 3, Lightning: 5, Fan: 3, Bubble: 5, Gentle_fist: 3}},
        ],
      },

      {
        question:
          "In combat, where are you, and what are you doing?",
        choices: [
          {text: "I try to stand back and support my teammates.", value: {Fire: 2, Wind: 1, Earth: 4, Water: 2, Medic: 4, STR_WM: 0, INT_WM: 3, Taijutsu: 0, Lightning: 4, Fan: 1, Bubble: 4, Gentle_fist: 1}},
          {text: "I am healing!", value: {Fire: 0, Wind: 0, Earth: 0, Water: 0, Medic: 5, STR_WM: 0, INT_WM: 0, Taijutsu: 0, Lightning: 0, Fan: 0, Bubble: 0, Gentle_fist: 0}},
          {text: "I am waiting for perfect opportunity to kill my enemies in single strike from stealth", value: {Fire: 3, Wind: 2, Earth: 1, Water: 2, Medic: 1, STR_WM: 0, INT_WM: 3, Taijutsu: 0, Lightning: 1, Fan: 1, Bubble: 0, Gentle_fist: 0}},
          {text: "I am waiting for perfect set up from my teammates", value: {Fire: 4, Wind: 4, Earth: 3, Water: 2, Medic: 3, STR_WM: 2, INT_WM: 4, Taijutsu: 2, Lightning: 4, Fan: 2, Bubble: 3, Gentle_fist: 2}},
          {text: "I am always on frontline disrupting my enemies", value: {Fire: 1, Wind: 1, Earth: 1, Water: 3, Medic: 1, STR_WM: 4, INT_WM: 1, Taijutsu: 5, Lightning: 1, Fan: 5, Bubble: 3, Gentle_fist: 4}},
          {text: "One man army", value: {Fire: 0, Wind: 0, Earth: 0, Water: 0, Medic: 0, STR_WM: 5, INT_WM: 0, Taijutsu: 5, Lightning: 0, Fan: 5, Bubble: 4, Gentle_fist: 4}},
          {text: "I set up enemies for my teammates", value: {Fire: 1, Wind: 1, Earth: 5, Water: 3, Medic: 1, STR_WM: 3, INT_WM: 1, Taijutsu: 2, Lightning: 5, Fan: 3, Bubble: 5, Gentle_fist: 2}},
        ],
      },
      {
        question:
          "During battle do you prefer to play safe or do you take risk?",
        choices: [
          {text: "I take risk!", value: {Fire: 3, Wind: 2, Earth: 2, Water: 1, Medic: 0, STR_WM: 1, INT_WM: 1, Taijutsu: 1, Lightning: 4, Fan: 1, Bubble: 0, Gentle_fist: 2}},
          {text: "I play safe!", value: {Fire: 0, Wind: 1, Earth: 1, Water: 5, Medic: 4, STR_WM: 3, INT_WM: 4, Taijutsu: 3, Lightning: 0, Fan: 4, Bubble: 5, Gentle_fist: 3}},
        ],
      },
      {
        question:
          "In PvP situations, do you prefer one-on-one duels, small skirmishes, or large-scale battlegrounds?",
        choices: [
          {text: "One-on-one duels", value: {Fire: 3, Wind: 4, Earth: 2, Water: 5, Medic: 2, STR_WM: 5, INT_WM: 2, Taijutsu: 5, Lightning: 1, Fan: 5, Bubble: 4, Gentle_fist: 5}},
          {text: "Small skirmishes", value: {Fire: 0, Wind: 0, Earth: 0, Water: 4, Medic: 5, STR_WM: 3, INT_WM: 4, Taijutsu: 4, Lightning: 2, Fan: 4, Bubble: 5, Gentle_fist: 3}},
          {text: "Large-scale battlegrounds", value: {Fire: 2, Wind: 3, Earth: 3, Water: 1, Medic: 0, STR_WM: 1, INT_WM: 1, Taijutsu: 1, Lightning: 4, Fan: 0, Bubble: 4, Gentle_fist: 2}},
        ],
      },
      {
        question:
          "Which weapon(s) would you prefer?",
        choices: [
          {text: "Swords - (STR weapons)", value: {Fire: 0, Wind: 0, Earth: 0, Water: 0, Medic: 0, STR_WM: 10, INT_WM: -10, Taijutsu: -10, Lightning: 0, Fan: 0, Bubble: 0, Gentle_fist: 6}},
          {text: "Hand-to-hand combat (STR/AGI/CHK stat)", value: {Fire: 0, Wind: 0, Earth: 0, Water: 0, Medic: 6, STR_WM: 4, INT_WM: 0, Taijutsu: 10, Lightning: 0, Fan: -5, Bubble: -5, Gentle_fist: 8}},
          {text: "Fans - (STR ranged weapons)", value: {Fire: 0, Wind: -10, Earth: 0, Water: 0, Medic: 0, STR_WM: 0, INT_WM: 0, Taijutsu: -10, Lightning: 0, Fan: 10, Bubble: -10, Gentle_fist: -10}},
          {text: "Kunais/staffs - (INT weapons)", value: {Fire: 5, Wind: 5, Earth: 5, Water: 5, Medic: 5, STR_WM: 0, INT_WM: 5, Taijutsu: -5, Lightning: 5, Fan: -10, Bubble: -10, Gentle_fist: -10}},
          {text: "Bubble pipes - (STR snare weapons)", value: {Fire: 0, Wind: 0, Earth: 0, Water: -10, Medic: 0, STR_WM: 5, INT_WM: 0, Taijutsu: 0, Lightning: 0, Fan: -10, Bubble: 10, Gentle_fist: -10}},
          {text: "Bubble pipes - (INT HYBRID snare weapons)", value: {Fire: 0, Wind: 0, Earth: 0, Water: 10, Medic: 0, STR_WM: -5, INT_WM: 0, Taijutsu: -10, Lightning: 0, Fan: -10, Bubble: -10, Gentle_fist: -10}}
        ],
      },
    ],
  };