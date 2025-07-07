# TropeOut - Phase 1 Directory Structure

```
tropeout/
├── index.html                 # Main game interface
├── README.md                  # Project documentation
├── assets/
│   ├── icons/
│   │   ├── favicon.ico
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   └── images/
│       └── logo.png
├── css/
│   ├── styles.css             # Main game styling
│   ├── components.css         # Component-specific styles
│   └── responsive.css         # Mobile responsive styles
├── js/
│   ├── gameLogic.js           # Core game mechanics
│   ├── gameStorage.js         # LocalStorage management (already created)
│   ├── tropeScheduler.js      # Daily trope selection
│   ├── validator.js           # Basic answer validation
│   └── utils.js               # Shared utilities
├── data/
│   └── tropes.js              # Hardcoded trope database (5-10 tropes)
├── tests/
│   ├── manual-test-cases.md   # Manual testing checklist
│   └── validation-tests.html  # Simple validation testing page
└── docs/
    ├── game-rules.md          # How to play instructions
    └── development-log.md     # Progress tracking
```

## Key Files for Phase 1 Implementation

### Core Files (Start Here)
1. **index.html** - Main game page with UI components
2. **css/styles.css** - Game styling and layout
3. **js/gameLogic.js** - Core game mechanics
4. **js/gameStorage.js** - Already created LocalStorage system
5. **data/tropes.js** - Hardcoded trope database

### Supporting Files
- **js/tropeScheduler.js** - Ensures same daily trope for all users
- **js/validator.js** - Basic string matching and validation
- **js/utils.js** - Helper functions for date handling, string manipulation

### Development Files
- **tests/manual-test-cases.md** - Checklist for testing core functionality
- **docs/development-log.md** - Track progress and decisions

## Phase 1 Success Criteria Checklist
- [ ] User can play one daily puzzle
- [ ] Basic scoring and feedback works
- [ ] Stats are saved locally
- [ ] Can share results (text format)
- [ ] 5+ people can complete daily puzzle

## Next Steps
1. Start with `index.html` - create the basic UI
2. Set up `data/tropes.js` with 5 test tropes
3. Implement core game loop in `gameLogic.js`
4. Connect with existing `gameStorage.js`
5. Test with friends and family

## File Size Guidelines (Phase 1)
- Keep each JavaScript file under 200 lines
- Focus on functionality over optimization
- Use simple, readable code structure
- Avoid external dependencies initially