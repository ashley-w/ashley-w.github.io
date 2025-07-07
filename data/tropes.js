// TropeOut - Phase 1 Trope Database
// 5 test tropes with 10-15 valid answers each

const TROPES_DATABASE = {
  "macguffin": {
    id: "macguffin",
    name: "MacGuffin",
    definition: "An object that serves as a trigger for the plot but is ultimately unimportant except for its effect on the characters.",
    difficulty: "medium",
    hints: [
      "Often appears in mystery, thriller, or adventure genres",
      "The object itself matters less than what characters do to get it",
      "Think briefcases, artifacts, or mysterious items everyone wants"
    ],
    examples: [
      { title: "The Maltese Falcon", type: "movie", year: 1941 },
      { title: "Pulp Fiction", type: "movie", year: 1994 },
      { title: "North by Northwest", type: "movie", year: 1959 },
      { title: "Raiders of the Lost Ark", type: "movie", year: 1981 },
      { title: "The Big Lebowski", type: "movie", year: 1998 },
      { title: "Mission Impossible", type: "movie", year: 1996 },
      { title: "The 39 Steps", type: "movie", year: 1935 },
      { title: "Ronin", type: "movie", year: 1998 },
      { title: "Kiss Me Deadly", type: "movie", year: 1955 },
      { title: "Burn After Reading", type: "movie", year: 2008 },
      { title: "The Treasure of the Sierra Madre", type: "movie", year: 1948 },
      { title: "Speed", type: "movie", year: 1994 }
    ],
    tags: ["plot-device", "mystery", "thriller", "adventure"]
  },

  "chosen-one": {
    id: "chosen-one",
    name: "The Chosen One",
    definition: "A character who has been selected by destiny, prophecy, or supernatural forces to save the world or complete an important mission.",
    difficulty: "easy",
    hints: [
      "Usually the main protagonist with a special destiny",
      "Often discovered they have special powers or heritage",
      "Common in fantasy, sci-fi, and superhero stories"
    ],
    examples: [
      { title: "Star Wars", type: "movie", year: 1977 },
      { title: "The Matrix", type: "movie", year: 1999 },
      { title: "Harry Potter", type: "book", year: 1997 },
      { title: "The Lord of the Rings", type: "book", year: 1954 },
      { title: "Dune", type: "book", year: 1965 },
      { title: "The Legend of Zelda", type: "game", year: 1986 },
      { title: "Superman", type: "movie", year: 1978 },
      { title: "The Chronicles of Narnia", type: "book", year: 1950 },
      { title: "Avatar The Last Airbender", type: "tv", year: 2005 },
      { title: "Buffy the Vampire Slayer", type: "tv", year: 1997 },
      { title: "The Wheel of Time", type: "book", year: 1990 },
      { title: "Final Fantasy VII", type: "game", year: 1997 }
    ],
    tags: ["protagonist", "destiny", "fantasy", "sci-fi"]
  },

  "evil-laugh": {
    id: "evil-laugh",
    name: "Evil Laugh",
    definition: "A distinctive, often maniacal laugh used by villains to express their malevolent nature, superiority, or joy in others' misfortune.",
    difficulty: "easy",
    hints: [
      "Usually performed by the main villain or antagonist",
      "Often happens after revealing an evil plan",
      "Can range from subtle chuckles to full maniacal laughter"
    ],
    examples: [
      { title: "The Lion King", type: "movie", year: 1994 },
      { title: "Batman", type: "movie", year: 1989 },
      { title: "The Little Mermaid", type: "movie", year: 1989 },
      { title: "Star Wars", type: "movie", year: 1977 },
      { title: "The Simpsons", type: "tv", year: 1989 },
      { title: "SpongeBob SquarePants", type: "tv", year: 1999 },
      { title: "Final Fantasy VI", type: "game", year: 1994 },
      { title: "Sleeping Beauty", type: "movie", year: 1959 },
      { title: "The Incredibles", type: "movie", year: 2004 },
      { title: "Scooby-Doo", type: "tv", year: 1969 },
      { title: "Dr. Strangelove", type: "movie", year: 1964 },
      { title: "Austin Powers", type: "movie", year: 1997 }
    ],
    tags: ["villain", "comedy", "animation", "classic"]
  },

  "amnesia": {
    id: "amnesia",
    name: "Amnesia",
    definition: "A character loses their memory, either partially or completely, which creates mystery about their past and drives the plot forward.",
    difficulty: "medium",
    hints: [
      "Memory loss can be from trauma, magic, or medical conditions",
      "Often used to create mystery about a character's true identity",
      "Popular in thrillers, dramas, and fantasy stories"
    ],
    examples: [
      { title: "Memento", type: "movie", year: 2000 },
      { title: "The Bourne Identity", type: "movie", year: 2002 },
      { title: "50 First Dates", type: "movie", year: 2004 },
      { title: "Finding Nemo", type: "movie", year: 2003 },
      { title: "Total Recall", type: "movie", year: 1990 },
      { title: "Overboard", type: "movie", year: 1987 },
      { title: "The Notebook", type: "movie", year: 2004 },
      { title: "Lost", type: "tv", year: 2004 },
      { title: "Final Fantasy VII", type: "game", year: 1997 },
      { title: "The Hangover", type: "movie", year: 2009 },
      { title: "Eternal Sunshine of the Spotless Mind", type: "movie", year: 2004 },
      { title: "Dark City", type: "movie", year: 1998 }
    ],
    tags: ["memory", "mystery", "identity", "drama"]
  },

  "love-triangle": {
    id: "love-triangle",
    name: "Love Triangle",
    definition: "A romantic situation where three people are involved, with one person torn between two potential romantic partners.",
    difficulty: "easy",
    hints: [
      "One person must choose between two love interests",
      "Creates romantic tension and conflict",
      "Very common in romance, drama, and teen stories"
    ],
    examples: [
      { title: "Twilight", type: "book", year: 2005 },
      { title: "The Hunger Games", type: "book", year: 2008 },
      { title: "Casablanca", type: "movie", year: 1942 },
      { title: "Gone with the Wind", type: "movie", year: 1939 },
      { title: "Titanic", type: "movie", year: 1997 },
      { title: "The Vampire Diaries", type: "tv", year: 2009 },
      { title: "Dawson's Creek", type: "tv", year: 1998 },
      { title: "Friends", type: "tv", year: 1994 },
      { title: "Pride and Prejudice", type: "book", year: 1813 },
      { title: "Bridget Jones's Diary", type: "movie", year: 2001 },
      { title: "The Bachelor", type: "tv", year: 2002 },
      { title: "Persona 4", type: "game", year: 2008 }
    ],
    tags: ["romance", "drama", "relationships", "conflict"]
  }
};

// Helper function to get today's trope (Phase 1 - simple rotation)
function getTodaysTrope() {
  const tropeIds = Object.keys(TROPES_DATABASE);
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const tropeIndex = dayOfYear % tropeIds.length;
  const tropeId = tropeIds[tropeIndex];
  return TROPES_DATABASE[tropeId];
}

// Helper function to validate if a submission matches any example
function validateSubmission(submission, trope) {
  const normalizedSubmission = submission.toLowerCase().trim();
  
  return trope.examples.some(example => {
    const normalizedTitle = example.title.toLowerCase();
    
    // Exact match
    if (normalizedTitle === normalizedSubmission) return true;
    
    // Basic fuzzy matching for common variations
    if (normalizedTitle.includes(normalizedSubmission) || 
        normalizedSubmission.includes(normalizedTitle)) return true;
    
    // Remove common words and try again
    const cleanSubmission = normalizedSubmission
      .replace(/^(the|a|an)\s+/i, '')
      .replace(/\s+(the|a|an)\s+/gi, ' ');
    const cleanTitle = normalizedTitle
      .replace(/^(the|a|an)\s+/i, '')
      .replace(/\s+(the|a|an)\s+/gi, ' ');
    
    return cleanTitle === cleanSubmission;
  });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TROPES_DATABASE, getTodaysTrope, validateSubmission };
}