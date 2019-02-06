# Str8-Blobbin

### Background and overview
  Str8 Blobbin is an A to B style upscrolling game where the player starts as a full blob. 
  
  There will be obstacles and enemies that, when hit, decrease the size of the blob, along with health that increases the size   of the blob. When the blob has reached full size its color will darken, and upon hits its color will lighten. When the color   is normalized, hits will decrease the size of the blob until the player loses.
  
  Users can choose a blob color and will have inputs for left and right. The game will continuously move up.
  
### Functionality and MVP Features
  In Str8 Blobbin users will be able to:
- [ ] Choose the color of the blob
- [ ] Play a full level, with left and right inputs
- [ ] Toggle sound, and select difficulty level(number and speed of obstacles and health, default starting size of blob)
- [ ] Start, pause, and restart the game

### Architecture and Technologies
- Vanilla JavaScript for overall structure and game logic,
- HTML5 Canvas for DOM manipulation and rendering,
- Web Audio API for sound generation, processing and control. WebAudioAPI allows for simultaneous sounds with more dependable time triggering
- Webpack to bundle and serve up the various scripts.
    
### Implementation Timeline

  **Day 1:** Create basic entry files and skeleton structure for necessary files
- [ ] Determine necessary files and structure of the game
- [ ] Write basic logic for all files

  **Day 2:** Have skeleton game running
- [ ] Have background and initialize buttons working
- [ ] Player movement and blob design complete

  **Day 3:** Fill in enemies and obstacles
- [ ] Collision detection designed
- [ ] Health deterioration designed

  **Day 4:** Add health and level design
- [ ] Collision detection for health and appropriate health increase designed
- [ ] Have one full level ready for completion

  **Day 5:** Refinement and styling
- [ ] Set up links and overall design of page
- [ ] Refine styling for game
      
  **Bonus features:**
- [ ] Difficulty settings
- [ ] Attacks for the blob--blob attacks that the blob attacks with
- [ ] Scoring--gain points for acquiring health and destroying enemies, lose points for getting hit
- [ ] Multiplayer--either two blobs on one screen or two screens with competing blobs--score would have to be implemented for the latter
- [ ] Other power ups, speed, armor, attacks, etc
    
    
