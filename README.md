# Shape Wars

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

  **Day 1:** Create basic entry files and skeleton structure for necessary files
- [x] Determine necessary files and structure of the game
- [x] Write basic logic for all files

  **Day 2:** Have skeleton game running
- [x] Have background and initialize buttons working
- [x] Player movement and blob design complete

  **Day 3:** Fill in enemies and obstacles
- [x] Collision detection designed
- [x] Health deterioration designed

  **Day 4:** Add health and level design
- [x] Collision detection for health and appropriate health increase designed
- [x] Have one full level ready for completion

  **Day 5:** Refinement and styling
- [x] Set up links and overall design of page
- [x] Refine styling for game
      
  **Bonus features:**
- [ ] Difficulty settings
- [ ] Attacks for the blob--blob attacks that the blob attacks with
- [ ] Scoring--gain points for acquiring health and destroying enemies, lose points for getting hit
- [ ] Multiplayer--either two blobs on one screen or two screens with competing blobs--score would have to be implemented for the latter
- [ ] Other power ups, speed, armor, attacks, etc
- [ ] Dynamic sound speed increase/decrease
    
    
