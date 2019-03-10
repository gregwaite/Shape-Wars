# README

# Shape Wars

### [Shape Wars live](http://www.greg-waite.com/Str8-Blobbin/)

### Background and overview
  Shape Wars is an upscrolling wave game where the player is a red circle. 
  
  When the circle is hit by any other shape it decreases the size of the circle. When the circle is hit by other circles it increases the size of the circle. 
  
### Functionality and MVP Features
  In Str8 Blobbin users will be able to:
- [x] Play as many waves as you can make, with left, right, up and down inputs
- [x] Waves increasing number and speed of obstacles and health, default starting size of blob
- [x] Start, restart the game

### Architecture and Technologies
- Vanilla JavaScript for overall structure and game logic,
- HTML5 Canvas for DOM manipulation and rendering,
- Web Audio API for sound generation, processing and control. WebAudioAPI allows for simultaneous sounds with more dependable time triggering
- Webpack to bundle and serve up the various scripts.
    
### Implementation Timeline

- [x] Determine necessary files and structure of the game
- [x] Write basic logic for all files

- [x] Have background and initialize buttons working
- [x] Player movement and blob design complete

- [x] Collision detection designed
- [x] Health deterioration designed

- [x] Collision detection for health and appropriate health increase designed
- [x] Have one full level ready for completion

- [x] Set up links and overall design of page
- [x] Refine styling for game
      
  **Bonus features:**
- [ ] Difficulty settings
- [x] Attacks for the blob--blob attacks that the blob attacks with
- [ ] Scoring--gain points for acquiring health and destroying enemies, lose points for getting hit
- [ ] Multiplayer--either two blobs on one screen or two screens with competing blobs--score would have to be implemented for the latter
- [ ] Other power ups, speed, armor, attacks, etc
- [ ] Dynamic sound speed increase/decrease
    

  ![](https://i.imgflip.com/2u0j0l.gif)
    
    This code draws the damage animation, and, once you lose, the animation above. I filter out the damage circles that go off screen to prevent slowdown (before filtering, the number of dots drawn quickly reached over 25,000)
    
```javascript
  damageAnimation() {
    let hurt = [];
    let diff;
    if (Math.floor(Math.random() * 2) === 0) {
      diff = 1;
    } else {
      diff = 5;
    }
    const hurtPos = [
      [this.pos[0] + diff, this.pos[1]],
      [this.pos[0] + diff, this.pos[1] + diff],
      [this.pos[0], this.pos[1] + diff],
      [this.pos[0] - diff, this.pos[1] + diff],
      [this.pos[0] - diff, this.pos[1]],
      [this.pos[0] - diff, this.pos[1] - diff],
      [this.pos[0], this.pos[1] - diff],
      [this.pos[0] + diff, this.pos[1] - diff],
    ];
    const directions = [
      "right",
      ["down", "right"],
      "down",
      ["down", "left"],
      "left",
      ["up", "left"],
      "up",
      ["up", "right"],

    ]
      for (let i = 0; i < 8; i++) {
          hurt.push(new Hurt({
            pos: hurtPos[i],
            vel: [0, 0],
            radius: 6,
            color: 'red',
            game: this.game,
          }));
      }
    hurt.forEach( (circ, i) => {
      circ.draw();
      if (directions[i] instanceof Array) {
        circ[directions[i][0]] = true;
        circ[directions[i][1]] = true;
      } else {
        circ[directions[i]] = true;
      }
      this.game.hurtCircs.push(circ);
    });
  }

