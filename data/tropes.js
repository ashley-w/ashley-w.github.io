// TropeOut - Expanded Trope Database (Phase 1.5)
// 25 tropes with 15-20 examples each for proper testing

const TROPES_DATABASE = {
  // EASY TROPES (Recognizable, popular concepts)
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
    // MOVIES (50 examples)
    { title: "Star Wars", type: "movie", year: 1977 },
    { title: "The Matrix", type: "movie", year: 1999 },
    { title: "Superman", type: "movie", year: 1978 },
    { title: "Wonder Woman", type: "movie", year: 2017 },
    { title: "The Karate Kid", type: "movie", year: 1984 },
    { title: "Shrek", type: "movie", year: 2001 },
    { title: "Kung Fu Panda", type: "movie", year: 2008 },
    { title: "The Iron Giant", type: "movie", year: 1999 },
    { title: "Moana", type: "movie", year: 2016 },
    { title: "Doctor Strange", type: "movie", year: 2016 },
    { title: "Black Panther", type: "movie", year: 2018 },
    { title: "Thor", type: "movie", year: 2011 },
    { title: "Captain America", type: "movie", year: 2011 },
    { title: "Green Lantern", type: "movie", year: 2011 },
    { title: "Aquaman", type: "movie", year: 2018 },
    { title: "Spider-Man", type: "movie", year: 2002 },
    { title: "Batman Begins", type: "movie", year: 2005 },
    { title: "Iron Man", type: "movie", year: 2008 },
    { title: "Captain Marvel", type: "movie", year: 2019 },
    { title: "Shazam", type: "movie", year: 2019 },
    { title: "The Incredible Hulk", type: "movie", year: 2008 },
    { title: "Ant-Man", type: "movie", year: 2015 },
    { title: "Guardians of the Galaxy", type: "movie", year: 2014 },
    { title: "The Last Airbender", type: "movie", year: 2010 },
    { title: "Avatar", type: "movie", year: 2009 },
    { title: "John Carter", type: "movie", year: 2012 },
    { title: "Green Arrow", type: "movie", year: 2011 },
    { title: "The Chronicles of Narnia", type: "movie", year: 2005 },
    { title: "Percy Jackson", type: "movie", year: 2010 },
    { title: "Eragon", type: "movie", year: 2006 },
    { title: "The Golden Compass", type: "movie", year: 2007 },
    { title: "The Mortal Instruments", type: "movie", year: 2013 },
    { title: "The Maze Runner", type: "movie", year: 2014 },
    { title: "Divergent", type: "movie", year: 2014 },
    { title: "The Hunger Games", type: "movie", year: 2012 },
    { title: "Ready Player One", type: "movie", year: 2018 },
    { title: "TRON", type: "movie", year: 1982 },
    { title: "The NeverEnding Story", type: "movie", year: 1984 },
    { title: "Willow", type: "movie", year: 1988 },
    { title: "The Dark Crystal", type: "movie", year: 1982 },
    { title: "Labyrinth", type: "movie", year: 1986 },
    { title: "The Princess Bride", type: "movie", year: 1987 },
    { title: "Big Fish", type: "movie", year: 2003 },
    { title: "Life of Pi", type: "movie", year: 2012 },
    { title: "The Shape of Water", type: "movie", year: 2017 },
    { title: "Encanto", type: "movie", year: 2021 },
    { title: "Raya and the Last Dragon", type: "movie", year: 2021 },
    { title: "Frozen", type: "movie", year: 2013 },
    { title: "Brave", type: "movie", year: 2012 },
    { title: "How to Train Your Dragon", type: "movie", year: 2010 },

    // TV SHOWS (50 examples)
    { title: "Avatar The Last Airbender", type: "tv", year: 2005 },
    { title: "Buffy the Vampire Slayer", type: "tv", year: 1997 },
    { title: "Dragon Ball Z", type: "tv", year: 1989 },
    { title: "Naruto", type: "tv", year: 2002 },
    { title: "My Hero Academia", type: "tv", year: 2016 },
    { title: "The Flash", type: "tv", year: 2014 },
    { title: "Arrow", type: "tv", year: 2012 },
    { title: "Smallville", type: "tv", year: 2001 },
    { title: "He-Man", type: "tv", year: 1983 },
    { title: "Voltron", type: "tv", year: 1984 },
    { title: "Sailor Moon", type: "tv", year: 1992 },
    { title: "Dragon Ball", type: "tv", year: 1986 },
    { title: "One Piece", type: "tv", year: 1999 },
    { title: "Bleach", type: "tv", year: 2004 },
    { title: "Attack on Titan", type: "tv", year: 2013 },
    { title: "Demon Slayer", type: "tv", year: 2019 },
    { title: "JoJo's Bizarre Adventure", type: "tv", year: 2012 },
    { title: "Fullmetal Alchemist", type: "tv", year: 2003 },
    { title: "Hunter x Hunter", type: "tv", year: 2011 },
    { title: "Yu Yu Hakusho", type: "tv", year: 1992 },
    { title: "InuYasha", type: "tv", year: 2000 },
    { title: "Fairy Tail", type: "tv", year: 2009 },
    { title: "Seven Deadly Sins", type: "tv", year: 2014 },
    { title: "Black Clover", type: "tv", year: 2017 },
    { title: "Fire Force", type: "tv", year: 2019 },
    { title: "Mob Psycho 100", type: "tv", year: 2016 },
    { title: "One Punch Man", type: "tv", year: 2015 },
    { title: "The Legend of Korra", type: "tv", year: 2012 },
    { title: "Steven Universe", type: "tv", year: 2013 },
    { title: "Star vs. The Forces of Evil", type: "tv", year: 2015 },
    { title: "Gravity Falls", type: "tv", year: 2012 },
    { title: "Adventure Time", type: "tv", year: 2010 },
    { title: "Ben 10", type: "tv", year: 2005 },
    { title: "Teen Titans", type: "tv", year: 2003 },
    { title: "Young Justice", type: "tv", year: 2010 },
    { title: "Justice League", type: "tv", year: 2001 },
    { title: "Batman The Animated Series", type: "tv", year: 1992 },
    { title: "Superman The Animated Series", type: "tv", year: 1996 },
    { title: "X-Men", type: "tv", year: 1992 },
    { title: "Spider-Man", type: "tv", year: 1994 },
    { title: "The Witcher", type: "tv", year: 2019 },
    { title: "Game of Thrones", type: "tv", year: 2011 },
    { title: "The Umbrella Academy", type: "tv", year: 2019 },
    { title: "Stranger Things", type: "tv", year: 2016 },
    { title: "The Boys", type: "tv", year: 2019 },
    { title: "Invincible", type: "tv", year: 2021 },
    { title: "The Mandalorian", type: "tv", year: 2019 },
    { title: "Loki", type: "tv", year: 2021 },
    { title: "WandaVision", type: "tv", year: 2021 },
    { title: "The Falcon and the Winter Soldier", type: "tv", year: 2021 },

    // VIDEO GAMES (50 examples)
    { title: "The Legend of Zelda", type: "game", year: 1986 },
    { title: "Final Fantasy VII", type: "game", year: 1997 },
    { title: "Final Fantasy X", type: "game", year: 2001 },
    { title: "Final Fantasy XIII", type: "game", year: 2009 },
    { title: "Final Fantasy XV", type: "game", year: 2016 },
    { title: "Kingdom Hearts", type: "game", year: 2002 },
    { title: "Chrono Trigger", type: "game", year: 1995 },
    { title: "Dragon Quest", type: "game", year: 1986 },
    { title: "Dragon Quest XI", type: "game", year: 2017 },
    { title: "Persona 3", type: "game", year: 2006 },
    { title: "Persona 4", type: "game", year: 2008 },
    { title: "Persona 5", type: "game", year: 2016 },
    { title: "Tales of Symphonia", type: "game", year: 2003 },
    { title: "Tales of Vesperia", type: "game", year: 2008 },
    { title: "Xenoblade Chronicles", type: "game", year: 2010 },
    { title: "Xenoblade Chronicles 2", type: "game", year: 2017 },
    { title: "Fire Emblem", type: "game", year: 1990 },
    { title: "Fire Emblem Awakening", type: "game", year: 2012 },
    { title: "Golden Sun", type: "game", year: 2001 },
    { title: "Breath of Fire", type: "game", year: 1993 },
    { title: "Secret of Mana", type: "game", year: 1993 },
    { title: "Ni No Kuni", type: "game", year: 2010 },
    { title: "Radiant Historia", type: "game", year: 2010 },
    { title: "The Elder Scrolls", type: "game", year: 1994 },
    { title: "The Elder Scrolls V Skyrim", type: "game", year: 2011 },
    { title: "Fable", type: "game", year: 2004 },
    { title: "Dragon Age Origins", type: "game", year: 2009 },
    { title: "Mass Effect", type: "game", year: 2007 },
    { title: "The Witcher 3", type: "game", year: 2015 },
    { title: "Destiny", type: "game", year: 2014 },
    { title: "Halo", type: "game", year: 2001 },
    { title: "Metroid", type: "game", year: 1986 },
    { title: "Star Fox", type: "game", year: 1993 },
    { title: "Kid Icarus", type: "game", year: 1986 },
    { title: "Earthbound", type: "game", year: 1994 },
    { title: "Mother 3", type: "game", year: 2006 },
    { title: "Undertale", type: "game", year: 2015 },
    { title: "Deltarune", type: "game", year: 2018 },
    { title: "Hollow Knight", type: "game", year: 2017 },
    { title: "Ori and the Blind Forest", type: "game", year: 2015 },
    { title: "Journey", type: "game", year: 2012 },
    { title: "Shadow of the Colossus", type: "game", year: 2005 },
    { title: "The Last Guardian", type: "game", year: 2016 },
    { title: "Ico", type: "game", year: 2001 },
    { title: "Okami", type: "game", year: 2006 },
    { title: "Bastion", type: "game", year: 2011 },
    { title: "Transistor", type: "game", year: 2014 },
    { title: "Pyre", type: "game", year: 2017 },
    { title: "Hades", type: "game", year: 2020 },
    { title: "Celeste", type: "game", year: 2018 },

    // BOOKS (50 examples)
    { title: "Harry Potter", type: "book", year: 1997 },
    { title: "The Lord of the Rings", type: "book", year: 1954 },
    { title: "Dune", type: "book", year: 1965 },
    { title: "The Chronicles of Narnia", type: "book", year: 1950 },
    { title: "Percy Jackson", type: "book", year: 2005 },
    { title: "The Wheel of Time", type: "book", year: 1990 },
    { title: "The Sword of Truth", type: "book", year: 1994 },
    { title: "A Song of Ice and Fire", type: "book", year: 1996 },
    { title: "The Dark Tower", type: "book", year: 1982 },
    { title: "The Kingkiller Chronicle", type: "book", year: 2007 },
    { title: "The Stormlight Archive", type: "book", year: 2010 },
    { title: "Mistborn", type: "book", year: 2006 },
    { title: "The First Law", type: "book", year: 2006 },
    { title: "The Broken Earth", type: "book", year: 2015 },
    { title: "The Earthsea Cycle", type: "book", year: 1968 },
    { title: "The Belgariad", type: "book", year: 1982 },
    { title: "The Malloreon", type: "book", year: 1987 },
    { title: "The Riftwar Saga", type: "book", year: 1982 },
    { title: "The Memory Sorrow and Thorn", type: "book", year: 1988 },
    { title: "The Farseer Trilogy", type: "book", year: 1995 },
    { title: "The Liveship Traders", type: "book", year: 1998 },
    { title: "The Realm of the Elderlings", type: "book", year: 1995 },
    { title: "The Inheritance Cycle", type: "book", year: 2003 },
    { title: "The His Dark Materials", type: "book", year: 1995 },
    { title: "The Mortal Instruments", type: "book", year: 2007 },
    { title: "The Infernal Devices", type: "book", year: 2010 },
    { title: "The Hunger Games", type: "book", year: 2008 },
    { title: "Divergent", type: "book", year: 2011 },
    { title: "The Maze Runner", type: "book", year: 2009 },
    { title: "The Giver", type: "book", year: 1993 },
    { title: "Ender's Game", type: "book", year: 1985 },
    { title: "Foundation", type: "book", year: 1951 },
    { title: "The Left Hand of Darkness", type: "book", year: 1969 },
    { title: "Hyperion", type: "book", year: 1989 },
    { title: "The Time Machine", type: "book", year: 1895 },
    { title: "A Wrinkle in Time", type: "book", year: 1962 },
    { title: "The Stand", type: "book", year: 1978 },
    { title: "The Shining", type: "book", year: 1977 },
    { title: "Carrie", type: "book", year: 1974 },
    { title: "The Green Mile", type: "book", year: 1996 },
    { title: "11/22/63", type: "book", year: 2011 },
    { title: "The Talisman", type: "book", year: 1984 },
    { title: "The Outsiders", type: "book", year: 1967 },
    { title: "The Perks of Being a Wallflower", type: "book", year: 1999 },
    { title: "Ready Player One", type: "book", year: 2011 },
    { title: "The Martian", type: "book", year: 2011 },
    { title: "The Handmaid's Tale", type: "book", year: 1985 },
    { title: "1984", type: "book", year: 1949 },
    { title: "Brave New World", type: "book", year: 1932 },
    { title: "Fahrenheit 451", type: "book", year: 1953 }
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
    // MOVIES (50 examples)
    { title: "The Lion King", type: "movie", year: 1994 },
    { title: "Batman", type: "movie", year: 1989 },
    { title: "The Little Mermaid", type: "movie", year: 1989 },
    { title: "Star Wars", type: "movie", year: 1977 },
    { title: "The Dark Knight", type: "movie", year: 2008 },
    { title: "Austin Powers", type: "movie", year: 1997 },
    { title: "Aladdin", type: "movie", year: 1992 },
    { title: "The Emperor's New Groove", type: "movie", year: 2000 },
    { title: "Cruella", type: "movie", year: 2021 },
    { title: "Maleficent", type: "movie", year: 2014 },
    { title: "Sleeping Beauty", type: "movie", year: 1959 },
    { title: "The Incredibles", type: "movie", year: 2004 },
    { title: "Dr. Strangelove", type: "movie", year: 1964 },
    { title: "The Great Mouse Detective", type: "movie", year: 1986 },
    { title: "Snow White", type: "movie", year: 1937 },
    { title: "Cinderella", type: "movie", year: 1950 },
    { title: "101 Dalmatians", type: "movie", year: 1961 },
    { title: "The Jungle Book", type: "movie", year: 1967 },
    { title: "Beauty and the Beast", type: "movie", year: 1991 },
    { title: "The Princess and the Frog", type: "movie", year: 2009 },
    { title: "Tangled", type: "movie", year: 2010 },
    { title: "Frozen", type: "movie", year: 2013 },
    { title: "Moana", type: "movie", year: 2016 },
    { title: "Coco", type: "movie", year: 2017 },
    { title: "The Nightmare Before Christmas", type: "movie", year: 1993 },
    { title: "Corpse Bride", type: "movie", year: 2005 },
    { title: "The Addams Family", type: "movie", year: 1991 },
    { title: "Beetlejuice", type: "movie", year: 1988 },
    { title: "Ghostbusters", type: "movie", year: 1984 },
    { title: "Young Frankenstein", type: "movie", year: 1974 },
    { title: "The Rocky Horror Picture Show", type: "movie", year: 1975 },
    { title: "Army of Darkness", type: "movie", year: 1992 },
    { title: "The Mask", type: "movie", year: 1994 },
    { title: "Who Framed Roger Rabbit", type: "movie", year: 1988 },
    { title: "Dick Tracy", type: "movie", year: 1990 },
    { title: "The Rocketeer", type: "movie", year: 1991 },
    { title: "Indiana Jones", type: "movie", year: 1981 },
    { title: "The Mummy", type: "movie", year: 1999 },
    { title: "Van Helsing", type: "movie", year: 2004 },
    { title: "The League of Extraordinary Gentlemen", type: "movie", year: 2003 },
    { title: "Sky High", type: "movie", year: 2005 },
    { title: "The Phantom", type: "movie", year: 1996 },
    { title: "Flash Gordon", type: "movie", year: 1980 },
    { title: "Superman", type: "movie", year: 1978 },
    { title: "Superman II", type: "movie", year: 1980 },
    { title: "Batman Returns", type: "movie", year: 1992 },
    { title: "Batman Forever", type: "movie", year: 1995 },
    { title: "The Joker", type: "movie", year: 2019 },
    { title: "Venom", type: "movie", year: 2018 },
    { title: "Furiosa Mad Max Saga", type: "movie", year: 2024 },

    // TV SHOWS (50 examples)
    { title: "The Simpsons", type: "tv", year: 1989 },
    { title: "SpongeBob SquarePants", type: "tv", year: 1999 },
    { title: "Scooby-Doo", type: "tv", year: 1969 },
    { title: "Tom and Jerry", type: "tv", year: 1940 },
    { title: "Looney Tunes", type: "tv", year: 1930 },
    { title: "Animaniacs", type: "tv", year: 1993 },
    { title: "Pinky and the Brain", type: "tv", year: 1995 },
    { title: "Dexter's Laboratory", type: "tv", year: 1996 },
    { title: "The Powerpuff Girls", type: "tv", year: 1998 },
    { title: "Johnny Bravo", type: "tv", year: 1997 },
    { title: "Ed Edd n Eddy", type: "tv", year: 1999 },
    { title: "Courage the Cowardly Dog", type: "tv", year: 1999 },
    { title: "Kim Possible", type: "tv", year: 2002 },
    { title: "The Fairly OddParents", type: "tv", year: 2001 },
    { title: "Danny Phantom", type: "tv", year: 2004 },
    { title: "Teen Titans", type: "tv", year: 2003 },
    { title: "Justice League", type: "tv", year: 2001 },
    { title: "Batman The Animated Series", type: "tv", year: 1992 },
    { title: "Superman The Animated Series", type: "tv", year: 1996 },
    { title: "X-Men", type: "tv", year: 1992 },
    { title: "Spider-Man", type: "tv", year: 1994 },
    { title: "Fantastic Four", type: "tv", year: 1994 },
    { title: "The Tick", type: "tv", year: 1994 },
    { title: "Darkwing Duck", type: "tv", year: 1991 },
    { title: "DuckTales", type: "tv", year: 1987 },
    { title: "Chip 'n Dale Rescue Rangers", type: "tv", year: 1989 },
    { title: "Gargoyles", type: "tv", year: 1994 },
    { title: "He-Man", type: "tv", year: 1983 },
    { title: "She-Ra", type: "tv", year: 1985 },
    { title: "ThunderCats", type: "tv", year: 1985 },
    { title: "Voltron", type: "tv", year: 1984 },
    { title: "Transformers", type: "tv", year: 1984 },
    { title: "G.I. Joe", type: "tv", year: 1985 },
    { title: "The Real Ghostbusters", type: "tv", year: 1986 },
    { title: "Teenage Mutant Ninja Turtles", type: "tv", year: 1987 },
    { title: "Inspector Gadget", type: "tv", year: 1983 },
    { title: "Gadget and the Gadgetinis", type: "tv", year: 2001 },
    { title: "The Pink Panther", type: "tv", year: 1993 },
    { title: "Woody Woodpecker", type: "tv", year: 1940 },
    { title: "Foghorn Leghorn", type: "tv", year: 1946 },
    { title: "Yosemite Sam", type: "tv", year: 1945 },
    { title: "Marvin the Martian", type: "tv", year: 1948 },
    { title: "The Flintstones", type: "tv", year: 1960 },
    { title: "The Jetsons", type: "tv", year: 1962 },
    { title: "Scooby-Doo Where Are You", type: "tv", year: 1969 },
    { title: "The Addams Family", type: "tv", year: 1964 },
    { title: "The Munsters", type: "tv", year: 1964 },
    { title: "Dark Shadows", type: "tv", year: 1966 },
    { title: "The Twilight Zone", type: "tv", year: 1959 },
    { title: "Tales from the Crypt", type: "tv", year: 1989 },

    // VIDEO GAMES (50 examples)
    { title: "Final Fantasy VI", type: "game", year: 1994 },
    { title: "Super Mario Bros", type: "game", year: 1985 },
    { title: "Super Mario World", type: "game", year: 1990 },
    { title: "Super Mario 64", type: "game", year: 1996 },
    { title: "Mario Kart", type: "game", year: 1992 },
    { title: "Donkey Kong", type: "game", year: 1981 },
    { title: "Donkey Kong Country", type: "game", year: 1994 },
    { title: "The Legend of Zelda", type: "game", year: 1986 },
    { title: "Zelda Ocarina of Time", type: "game", year: 1998 },
    { title: "Zelda Majora's Mask", type: "game", year: 2000 },
    { title: "Zelda Wind Waker", type: "game", year: 2002 },
    { title: "Zelda Twilight Princess", type: "game", year: 2006 },
    { title: "Zelda Breath of the Wild", type: "game", year: 2017 },
    { title: "Zelda Tears of the Kingdom", type: "game", year: 2023 },
    { title: "Metroid", type: "game", year: 1986 },
    { title: "Metroid Prime", type: "game", year: 2002 },
    { title: "Star Fox", type: "game", year: 1993 },
    { title: "Star Fox 64", type: "game", year: 1997 },
    { title: "F-Zero", type: "game", year: 1990 },
    { title: "Punch-Out", type: "game", year: 1984 },
    { title: "Mike Tyson's Punch-Out", type: "game", year: 1987 },
    { title: "Street Fighter", type: "game", year: 1987 },
    { title: "Street Fighter II", type: "game", year: 1991 },
    { title: "Mortal Kombat", type: "game", year: 1992 },
    { title: "Tekken", type: "game", year: 1994 },
    { title: "King of Fighters", type: "game", year: 1994 },
    { title: "Fatal Fury", type: "game", year: 1991 },
    { title: "Sonic the Hedgehog", type: "game", year: 1991 },
    { title: "Sonic 2", type: "game", year: 1992 },
    { title: "Sonic 3", type: "game", year: 1994 },
    { title: "Sonic Adventure", type: "game", year: 1998 },
    { title: "Crash Bandicoot", type: "game", year: 1996 },
    { title: "Spyro the Dragon", type: "game", year: 1998 },
    { title: "Ratchet and Clank", type: "game", year: 2002 },
    { title: "Jak and Daxter", type: "game", year: 2001 },
    { title: "Sly Cooper", type: "game", year: 2002 },
    { title: "Banjo-Kazooie", type: "game", year: 1998 },
    { title: "Conker's Bad Fur Day", type: "game", year: 2001 },
    { title: "Rayman", type: "game", year: 1995 },
    { title: "Earthworm Jim", type: "game", year: 1994 },
    { title: "Mega Man", type: "game", year: 1987 },
    { title: "Mega Man X", type: "game", year: 1993 },
    { title: "Mega Man Legends", type: "game", year: 1997 },
    { title: "Castlevania", type: "game", year: 1986 },
    { title: "Contra", type: "game", year: 1987 },
    { title: "Gradius", type: "game", year: 1985 },
    { title: "R-Type", type: "game", year: 1987 },
    { title: "Galaga", type: "game", year: 1981 },
    { title: "Pac-Man", type: "game", year: 1980 },
    { title: "Ms. Pac-Man", type: "game", year: 1982 },

    // BOOKS (50 examples)
    { title: "Harry Potter", type: "book", year: 1997 },
    { title: "The Lord of the Rings", type: "book", year: 1954 },
    { title: "The Chronicles of Narnia", type: "book", year: 1950 },
    { title: "A Series of Unfortunate Events", type: "book", year: 1999 },
    { title: "Roald Dahl's The Witches", type: "book", year: 1983 },
    { title: "Roald Dahl's Matilda", type: "book", year: 1988 },
    { title: "Charlie and the Chocolate Factory", type: "book", year: 1964 },
    { title: "James and the Giant Peach", type: "book", year: 1961 },
    { title: "The BFG", type: "book", year: 1982 },
    { title: "The Twits", type: "book", year: 1980 },
    { title: "George's Marvellous Medicine", type: "book", year: 1981 },
    { title: "The Enormous Crocodile", type: "book", year: 1978 },
    { title: "Fantastic Mr. Fox", type: "book", year: 1970 },
    { title: "Dr. Jekyll and Mr. Hyde", type: "book", year: 1886 },
    { title: "Frankenstein", type: "book", year: 1818 },
    { title: "Dracula", type: "book", year: 1897 },
    { title: "The Strange Case of Dr. Jekyll and Mr. Hyde", type: "book", year: 1886 },
    { title: "The Picture of Dorian Gray", type: "book", year: 1890 },
    { title: "The Phantom of the Opera", type: "book", year: 1910 },
    { title: "The Hunchback of Notre-Dame", type: "book", year: 1831 },
    { title: "The Count of Monte Cristo", type: "book", year: 1844 },
    { title: "Les Misérables", type: "book", year: 1862 },
    { title: "The Three Musketeers", type: "book", year: 1844 },
    { title: "Twenty Thousand Leagues Under the Sea", type: "book", year: 1870 },
    { title: "The Time Machine", type: "book", year: 1895 },
    { title: "The War of the Worlds", type: "book", year: 1898 },
    { title: "The Invisible Man", type: "book", year: 1897 },
    { title: "The Island of Dr. Moreau", type: "book", year: 1896 },
    { title: "Journey to the Center of the Earth", type: "book", year: 1864 },
    { title: "From the Earth to the Moon", type: "book", year: 1865 },
    { title: "Around the World in Eighty Days", type: "book", year: 1873 },
    { title: "The Mysterious Island", type: "book", year: 1874 },
    { title: "Treasure Island", type: "book", year: 1883 },
    { title: "Robinson Crusoe", type: "book", year: 1719 },
    { title: "Gulliver's Travels", type: "book", year: 1726 },
    { title: "The Adventures of Tom Sawyer", type: "book", year: 1876 },
    { title: "The Adventures of Huckleberry Finn", type: "book", year: 1884 },
    { title: "Alice's Adventures in Wonderland", type: "book", year: 1865 },
    { title: "Through the Looking-Glass", type: "book", year: 1871 },
    { title: "Peter Pan", type: "book", year: 1904 },
    { title: "The Wind in the Willows", type: "book", year: 1908 },
    { title: "The Secret Garden", type: "book", year: 1911 },
    { title: "A Little Princess", type: "book", year: 1905 },
    { title: "Little Lord Fauntleroy", type: "book", year: 1886 },
    { title: "The Princess and the Goblin", type: "book", year: 1872 },
    { title: "The Princess and Curdie", type: "book", year: 1883 },
    { title: "At the Back of the North Wind", type: "book", year: 1871 },
    { title: "The Light Princess", type: "book", year: 1864 },
    { title: "The Golden Key", type: "book", year: 1867 },
    { title: "Phantastes", type: "book", year: 1858 }
  ],
  tags: ["villain", "comedy", "animation", "classic"]
},

  "red-herring": {
    id: "red-herring",
    name: "Red Herring",
    definition: "A misleading clue or piece of information intended to divert attention from the real solution or truth.",
    difficulty: "hard",
    hints: [
      "Something that seems important but leads you astray",
      "Common in mystery and detective stories",
      "Designed to make you suspect the wrong person or thing"
    ],
    examples: [
      { title: "Scream", type: "movie", year: 1996 },
      { title: "The Usual Suspects", type: "movie", year: 1995 },
      { title: "Knives Out", type: "movie", year: 2019 },
      { title: "Shutter Island", type: "movie", year: 2010 },
      { title: "Gone Girl", type: "movie", year: 2014 },
      { title: "Zodiac", type: "movie", year: 2007 },
      { title: "The Prestige", type: "movie", year: 2006 },
      { title: "Sherlock Holmes", type: "book", year: 1887 },
      { title: "Agatha Christie", type: "book", year: 1920 },
      { title: "Twin Peaks", type: "tv", year: 1990 },
      { title: "Lost", type: "tv", year: 2004 },
      { title: "Westworld", type: "tv", year: 2016 },
      { title: "True Detective", type: "tv", year: 2014 },
      { title: "Fargo", type: "tv", year: 2014 },
      { title: "The Sixth Sense", type: "movie", year: 1999 },
      { title: "The Village", type: "movie", year: 2004 }
    ],
    tags: ["mystery", "misdirection", "detective", "plot-twist"]
  },

  "damsel-in-distress": {
    id: "damsel-in-distress",
    name: "Damsel in Distress",
    definition: "A female character who needs to be rescued by a male hero, often serving as motivation for the protagonist's quest.",
    difficulty: "easy",
    hints: [
      "Usually a female character who gets captured or threatened",
      "Serves as motivation for the hero to take action",
      "Common in older stories but often subverted in modern media"
    ],
    examples: [
      { title: "Super Mario Bros", type: "game", year: 1985 },
      { title: "The Legend of Zelda", type: "game", year: 1986 },
      { title: "King Kong", type: "movie", year: 1933 },
      { title: "Superman", type: "movie", year: 1978 },
      { title: "Indiana Jones", type: "movie", year: 1981 },
      { title: "Sleeping Beauty", type: "movie", year: 1959 },
      { title: "Snow White", type: "movie", year: 1937 },
      { title: "Rapunzel", type: "book", year: 1812 },
      { title: "Donkey Kong", type: "game", year: 1981 },
      { title: "Final Fantasy", type: "game", year: 1987 },
      { title: "The Princess Bride", type: "movie", year: 1987 },
      { title: "Taken", type: "movie", year: 2008 },
      { title: "Die Hard", type: "movie", year: 1988 },
      { title: "Speed", type: "movie", year: 1994 },
      { title: "Pirates of the Caribbean", type: "movie", year: 2003 },
      { title: "Shrek", type: "movie", year: 2001 }
    ],
    tags: ["rescue", "classic", "motivation", "gender-roles"]
  },

  "unlikely-friendship": {
    id: "unlikely-friendship",
    name: "Unlikely Friendship",
    definition: "Two characters who seem completely different or incompatible gradually develop a strong bond and friendship.",
    difficulty: "easy",
    hints: [
      "Characters start as opposites or enemies",
      "They learn to understand and appreciate each other",
      "Often involves characters from different backgrounds or species"
    ],
    examples: [
      { title: "Shrek", type: "movie", year: 2001 },
      { title: "Toy Story", type: "movie", year: 1995 },
      { title: "The Odd Couple", type: "movie", year: 1968 },
      { title: "Rush Hour", type: "movie", year: 1998 },
      { title: "Lethal Weapon", type: "movie", year: 1987 },
      { title: "48 Hrs", type: "movie", year: 1982 },
      { title: "Men in Black", type: "movie", year: 1997 },
      { title: "Turner & Hooch", type: "movie", year: 1989 },
      { title: "The Lion King", type: "movie", year: 1994 },
      { title: "Finding Nemo", type: "movie", year: 2003 },
      { title: "Monsters Inc", type: "movie", year: 2001 },
      { title: "How to Train Your Dragon", type: "movie", year: 2010 },
      { title: "The Princess and the Frog", type: "movie", year: 2009 },
      { title: "Zootopia", type: "movie", year: 2016 },
      { title: "The Breakfast Club", type: "movie", year: 1985 },
      { title: "E.T.", type: "movie", year: 1982 }
    ],
    tags: ["friendship", "bonding", "opposites", "character-development"]
  },

  "time-loop": {
    id: "time-loop",
    name: "Time Loop",
    definition: "A character or characters are trapped repeating the same period of time until they learn something or break the cycle.",
    difficulty: "medium",
    hints: [
      "Same events happen over and over again",
      "Character retains memory from previous loops",
      "Usually must learn a lesson or solve a problem to escape"
    ],
    examples: [
      { title: "Groundhog Day", type: "movie", year: 1993 },
      { title: "Edge of Tomorrow", type: "movie", year: 2014 },
      { title: "Happy Death Day", type: "movie", year: 2017 },
      { title: "Palm Springs", type: "movie", year: 2020 },
      { title: "Source Code", type: "movie", year: 2011 },
      { title: "The Map of Tiny Perfect Things", type: "movie", year: 2021 },
      { title: "Russian Doll", type: "tv", year: 2019 },
      { title: "Dark", type: "tv", year: 2017 },
      { title: "The Endless", type: "movie", year: 2017 },
      { title: "Triangle", type: "movie", year: 2009 },
      { title: "Predestination", type: "movie", year: 2014 },
      { title: "Doctor Strange", type: "movie", year: 2016 },
      { title: "Star Trek", type: "tv", year: 1966 },
      { title: "The X-Files", type: "tv", year: 1993 },
      { title: "Supernatural", type: "tv", year: 2005 },
      { title: "The Twilight Zone", type: "tv", year: 1959 }
    ],
    tags: ["time", "repetition", "learning", "sci-fi"]
  },

  "villain-monologue": {
    id: "villain-monologue",
    name: "Villain Monologue",
    definition: "The antagonist explains their evil plan in detail, often giving the hero time to escape or plan a counterattack.",
    difficulty: "easy",
    hints: [
      "Bad guy talks too much instead of just winning",
      "Usually happens when the villain thinks they've already won",
      "Gives heroes time to figure out how to escape"
    ],
    examples: [
      { title: "James Bond", type: "movie", year: 1962 },
      { title: "Austin Powers", type: "movie", year: 1997 },
      { title: "The Incredibles", type: "movie", year: 2004 },
      { title: "Spider-Man", type: "movie", year: 2002 },
      { title: "Batman", type: "movie", year: 1989 },
      { title: "Superman", type: "movie", year: 1978 },
      { title: "Die Hard", type: "movie", year: 1988 },
      { title: "The Dark Knight", type: "movie", year: 2008 },
      { title: "Indiana Jones", type: "movie", year: 1981 },
      { title: "The Princess Bride", type: "movie", year: 1987 },
      { title: "Star Wars", type: "movie", year: 1977 },
      { title: "Scooby-Doo", type: "tv", year: 1969 },
      { title: "The Simpsons", type: "tv", year: 1989 },
      { title: "Kim Possible", type: "tv", year: 2002 },
      { title: "Megamind", type: "movie", year: 2010 },
      { title: "The Avengers", type: "movie", year: 2012 }
    ],
    tags: ["villain", "exposition", "classic", "comedy"]
  },

  "fake-death": {
    id: "fake-death",
    name: "Fake Death",
    definition: "A character appears to die but is later revealed to be alive, often returning at a crucial moment.",
    difficulty: "medium",
    hints: [
      "Character seems to die but didn't really",
      "Often returns to surprise everyone later",
      "May have been planned or just lucky survival"
    ],
    examples: [
      { title: "The Lord of the Rings", type: "book", year: 1954 },
      { title: "Harry Potter", type: "book", year: 1997 },
      { title: "Star Wars", type: "movie", year: 1977 },
      { title: "The Dark Knight", type: "movie", year: 2008 },
      { title: "Marvel Movies", type: "movie", year: 2008 },
      { title: "Game of Thrones", type: "tv", year: 2011 },
      { title: "Lost", type: "tv", year: 2004 },
      { title: "Sherlock", type: "tv", year: 2010 },
      { title: "The Walking Dead", type: "tv", year: 2010 },
      { title: "24", type: "tv", year: 2001 },
      { title: "Mission Impossible", type: "movie", year: 1996 },
      { title: "The Prestige", type: "movie", year: 2006 },
      { title: "Casino Royale", type: "movie", year: 2006 },
      { title: "The Princess Bride", type: "movie", year: 1987 },
      { title: "Pirates of the Caribbean", type: "movie", year: 2003 },
      { title: "The Matrix", type: "movie", year: 1999 }
    ],
    tags: ["death", "survival", "surprise", "return"]
  },

  "double-agent": {
    id: "double-agent",
    name: "Double Agent",
    definition: "A character who pretends to work for one side while secretly serving another, creating plot twists and betrayals.",
    difficulty: "medium",
    hints: [
      "Character is secretly working for the other side",
      "Creates major plot twists when revealed",
      "Common in spy stories and war films"
    ],
    examples: [
      { title: "Mission Impossible", type: "movie", year: 1996 },
      { title: "James Bond", type: "movie", year: 1962 },
      { title: "The Departed", type: "movie", year: 2006 },
      { title: "Casino Royale", type: "movie", year: 2006 },
      { title: "North by Northwest", type: "movie", year: 1959 },
      { title: "The Bourne Identity", type: "movie", year: 2002 },
      { title: "Tinker Tailor Soldier Spy", type: "movie", year: 2011 },
      { title: "The Americans", type: "tv", year: 2013 },
      { title: "24", type: "tv", year: 2001 },
      { title: "Homeland", type: "tv", year: 2011 },
      { title: "Alias", type: "tv", year: 2001 },
      { title: "The Man from U.N.C.L.E.", type: "movie", year: 2015 },
      { title: "Bridge of Spies", type: "movie", year: 2015 },
      { title: "Atomic Blonde", type: "movie", year: 2017 },
      { title: "Red Sparrow", type: "movie", year: 2018 },
      { title: "The Spy Who Came in from the Cold", type: "book", year: 1963 }
    ],
    tags: ["spy", "betrayal", "deception", "twist"]
  },

  "ensemble-cast": {
    id: "ensemble-cast",
    name: "Ensemble Cast",
    definition: "A story structure where multiple characters share equal importance rather than focusing on a single protagonist.",
    difficulty: "easy",
    hints: [
      "No single main character - everyone is important",
      "Multiple storylines often intersect",
      "Characters have equal screen time and development"
    ],
    examples: [
      { title: "The Avengers", type: "movie", year: 2012 },
      { title: "Ocean's Eleven", type: "movie", year: 2001 },
      { title: "The Magnificent Seven", type: "movie", year: 1960 },
      { title: "Love Actually", type: "movie", year: 2003 },
      { title: "Crash", type: "movie", year: 2004 },
      { title: "Pulp Fiction", type: "movie", year: 1994 },
      { title: "The Big Chill", type: "movie", year: 1983 },
      { title: "Friends", type: "tv", year: 1994 },
      { title: "Lost", type: "tv", year: 2004 },
      { title: "Game of Thrones", type: "tv", year: 2011 },
      { title: "The Walking Dead", type: "tv", year: 2010 },
      { title: "Glee", type: "tv", year: 2009 },
      { title: "This Is Us", type: "tv", year: 2016 },
      { title: "The Office", type: "tv", year: 2005 },
      { title: "Brooklyn Nine-Nine", type: "tv", year: 2013 },
      { title: "Community", type: "tv", year: 2009 }
    ],
    tags: ["multiple-protagonists", "group", "equal-focus", "collaboration"]
  },

  "villain-monologue": {
    id: "villain-monologue",
    name: "Villain Monologue",
    definition: "The antagonist explains their evil plan in detail, often giving the hero time to escape or plan a counterattack.",
    difficulty: "easy",
    hints: [
      "Bad guy talks too much instead of just winning",
      "Usually happens when the villain thinks they've already won",
      "Gives heroes time to figure out how to escape"
    ],
    examples: [
      { title: "James Bond", type: "movie", year: 1962 },
      { title: "Austin Powers", type: "movie", year: 1997 },
      { title: "The Incredibles", type: "movie", year: 2004 },
      { title: "Spider-Man", type: "movie", year: 2002 },  
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
      { title: "Austin Powers", type: "movie", year: 1997 },
      { title: "Aladdin", type: "movie", year: 1992 },
      { title: "The Emperor's New Groove", type: "movie", year: 2000 },
      { title: "Cruella", type: "movie", year: 2021 },
      { title: "Maleficent", type: "movie", year: 2014 },
      { title: "The Dark Knight", type: "movie", year: 2008 }
    ],
    tags: ["villain", "comedy", "animation", "classic"]
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
      { title: "Persona 4", type: "game", year: 2008 },
      { title: "Grease", type: "movie", year: 1978 },
      { title: "The Notebook", type: "movie", year: 2004 },
      { title: "Grey's Anatomy", type: "tv", year: 2005 },
      { title: "Archie Comics", type: "comic", year: 1942 },
      { title: "The Phantom of the Opera", type: "movie", year: 2004 },
      { title: "West Side Story", type: "movie", year: 1961 }
    ],
    tags: ["romance", "drama", "relationships", "conflict"]
  },

  "superhero-origin": {
    id: "superhero-origin",
    name: "Superhero Origin Story",
    definition: "The backstory explaining how a character gained their superpowers and decided to become a hero.",
    difficulty: "easy",
    hints: [
      "Shows how an ordinary person becomes extraordinary",
      "Often involves a traumatic or life-changing event",
      "Explains the hero's motivation and moral code"
    ],
    examples: [
      { title: "Spider-Man", type: "movie", year: 2002 },
      { title: "Batman Begins", type: "movie", year: 2005 },
      { title: "Iron Man", type: "movie", year: 2008 },
      { title: "Superman", type: "movie", year: 1978 },
      { title: "Wonder Woman", type: "movie", year: 2017 },
      { title: "Captain America", type: "movie", year: 2011 },
      { title: "The Flash", type: "tv", year: 2014 },
      { title: "Arrow", type: "tv", year: 2012 },
      { title: "Daredevil", type: "tv", year: 2015 },
      { title: "X-Men", type: "movie", year: 2000 },
      { title: "The Incredible Hulk", type: "movie", year: 2008 },
      { title: "Thor", type: "movie", year: 2011 },
      { title: "Black Panther", type: "movie", year: 2018 },
      { title: "Shazam", type: "movie", year: 2019 },
      { title: "The Boys", type: "tv", year: 2019 },
      { title: "Invincible", type: "tv", year: 2021 },
      { title: "My Hero Academia", type: "tv", year: 2016 }
    ],
    tags: ["superhero", "origin", "transformation", "heroism"]
  },

  "fish-out-of-water": {
    id: "fish-out-of-water",
    name: "Fish Out of Water",
    definition: "A character who is placed in an unfamiliar environment or situation where they must adapt to survive or succeed.",
    difficulty: "easy",
    hints: [
      "Character is in a completely new or strange environment",
      "Often creates comedy through cultural misunderstandings",
      "Character must learn new rules and customs"
    ],
    examples: [
      { title: "The Beverly Hillbillies", type: "tv", year: 1962 },
      { title: "Coming to America", type: "movie", year: 1988 },
      { title: "Elf", type: "movie", year: 2003 },
      { title: "Thor", type: "movie", year: 2011 },
      { title: "Crocodile Dundee", type: "movie", year: 1986 },
      { title: "Big", type: "movie", year: 1988 },
      { title: "Legally Blonde", type: "movie", year: 2001 },
      { title: "Pretty Woman", type: "movie", year: 1990 },
      { title: "My Fair Lady", type: "movie", year: 1964 },
      { title: "Trading Places", type: "movie", year: 1983 },
      { title: "The Fresh Prince of Bel-Air", type: "tv", year: 1990 },
      { title: "Avatar", type: "movie", year: 2009 },
      { title: "Enchanted", type: "movie", year: 2007 },
      { title: "School of Rock", type: "movie", year: 2003 },
      { title: "Sister Act", type: "movie", year: 1992 },
      { title: "The Princess Diaries", type: "movie", year: 2001 },
      { title: "Clueless", type: "movie", year: 1995 }
    ],
    tags: ["comedy", "adaptation", "culture-clash", "transformation"]
  },

  // MEDIUM TROPES (Require some genre knowledge)
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
      { title: "Speed", type: "movie", year: 1994 },
      { title: "The Thomas Crown Affair", type: "movie", year: 1999 },
      { title: "Ocean's Eleven", type: "movie", year: 2001 },
      { title: "The Italian Job", type: "movie", year: 2003 },
      { title: "National Treasure", type: "movie", year: 2004 }
    ],
    tags: ["plot-device", "mystery", "thriller", "adventure"]
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
      { title: "Dark City", type: "movie", year: 1998 },
      { title: "The Vow", type: "movie", year: 2012 },
      { title: "Unknown", type: "movie", year: 2011 },
      { title: "Shutter Island", type: "movie", year: 2010 },
      { title: "Regarding Henry", type: "movie", year: 1991 }
    ],
    tags: ["memory", "mystery", "identity", "drama"]
  },

  "mentor-death": {
    id: "mentor-death",
    name: "Mentor's Death",
    definition: "The wise guide or teacher figure dies, forcing the protagonist to continue their journey alone and reach their full potential.",
    difficulty: "medium",
    hints: [
      "Usually happens at a crucial moment in the story",
      "Forces the hero to become independent and grow",
      "Often sacrifices themselves to save or teach the hero"
    ],
    examples: [
      { title: "Star Wars", type: "movie", year: 1977 },
      { title: "The Lion King", type: "movie", year: 1994 },
      { title: "Harry Potter", type: "book", year: 1997 },
      { title: "The Karate Kid", type: "movie", year: 1984 },
      { title: "Batman Begins", type: "movie", year: 2005 },
      { title: "Doctor Strange", type: "movie", year: 2016 },
      { title: "The Lord of the Rings", type: "book", year: 1954 },
      { title: "Finding Nemo", type: "movie", year: 2003 },
      { title: "Moana", type: "movie", year: 2016 },
      { title: "Mulan", type: "movie", year: 1998 },
      { title: "The Matrix", type: "movie", year: 1999 },
      { title: "Iron Man", type: "movie", year: 2008 },
      { title: "X-Men", type: "movie", year: 2000 },
      { title: "Avatar The Last Airbender", type: "tv", year: 2005 },
      { title: "Naruto", type: "tv", year: 2002 },
      { title: "Dragon Ball Z", type: "tv", year: 1989 }
    ],
    tags: ["mentor", "death", "sacrifice", "growth"]
  },

  "redemption-arc": {
    id: "redemption-arc",
    name: "Redemption Arc",
    definition: "A character who starts as an antagonist or morally questionable figure gradually becomes good through their experiences and choices.",
    difficulty: "medium",
    hints: [
      "Character begins as villain or anti-hero",
      "Gradually shows more heroic qualities over time",
      "Often involves a moment of choosing good over evil"
    ],
    examples: [
      { title: "Star Wars", type: "movie", year: 1977 },
      { title: "Avatar The Last Airbender", type: "tv", year: 2005 },
      { title: "The Lion King", type: "movie", year: 1994 },
      { title: "Beauty and the Beast", type: "movie", year: 1991 },
      { title: "A Christmas Carol", type: "book", year: 1843 },
      { title: "Iron Man", type: "movie", year: 2008 },
      { title: "Thor", type: "movie", year: 2011 },
      { title: "Despicable Me", type: "movie", year: 2010 },
      { title: "Shrek", type: "movie", year: 2001 },
      { title: "The Grinch", type: "movie", year: 2000 },
      { title: "Megamind", type: "movie", year: 2010 },
      { title: "Wreck-It Ralph", type: "movie", year: 2012 },
      { title: "The Good Place", type: "tv", year: 2016 },
      { title: "Smallville", type: "tv", year: 2001 },
      { title: "Lost", type: "tv", year: 2004 },
      { title: "Prison Break", type: "tv", year: 2005 }
    ],
    tags: ["character-development", "villain", "transformation", "heroism"]
  },

  "training-montage": {
    id: "training-montage",
    name: "Training Montage",
    definition: "A sequence showing a character improving their skills over time, often set to uplifting music to show progress and determination.",
    difficulty: "medium",
    hints: [
      "Usually shows passage of time through quick cuts",
      "Often features uplifting or energetic music",
      "Character goes from weak to strong or amateur to expert"
    ],
    examples: [
      { title: "Rocky", type: "movie", year: 1976 },
      { title: "The Karate Kid", type: "movie", year: 1984 },
      { title: "Mulan", type: "movie", year: 1998 },
      { title: "Montage Parody", type: "movie", year: 2004 },
      { title: "The A-Team", type: "tv", year: 1983 },
      { title: "Batman Begins", type: "movie", year: 2005 },
      { title: "Iron Man", type: "movie", year: 2008 },
      { title: "Captain America", type: "movie", year: 2011 },
      { title: "Creed", type: "movie", year: 2015 },
      { title: "The Pursuit of Happyness", type: "movie", year: 2006 },
      { title: "Legally Blonde", type: "movie", year: 2001 },
      { title: "Flashdance", type: "movie", year: 1983 },
      { title: "Top Gun", type: "movie", year: 1986 },
      { title: "Dirty Dancing", type: "movie", year: 1987 },
      { title: "The Matrix", type: "movie", year: 1999 },
      { title: "Kill Bill", type: "movie", year: 2003 }
    ],
    tags: ["improvement", "montage", "determination", "growth"]
  },

  "manic-pixie-dream-girl": {
    id: "manic-pixie-dream-girl",
    name: "Manic Pixie Dream Girl",
    definition: "A quirky, free-spirited female character whose main purpose is to help a male protagonist discover himself and embrace life.",
    difficulty: "medium",
    hints: [
      "Usually energetic, spontaneous, and unconventional",
      "Helps brooding male character find joy and meaning",
      "Often has unusual hobbies or interests"
    ],
    examples: [
      { title: "Garden State", type: "movie", year: 2004 },
      { title: "Eternal Sunshine of the Spotless Mind", type: "movie", year: 2004 },
      { title: "500 Days of Summer", type: "movie", year: 2009 },
      { title: "Almost Famous", type: "movie", year: 2000 },
      { title: "Elizabethtown", type: "movie", year: 2005 },
      { title: "The Holiday", type: "movie", year: 2006 },
      { title: "Yes Man", type: "movie", year: 2008 },
      { title: "Scott Pilgrim vs The World", type: "movie", year: 2010 },
      { title: "Ruby Sparks", type: "movie", year: 2012 },
      { title: "Her", type: "movie", year: 2013 },
      { title: "Breakfast at Tiffany's", type: "movie", year: 1961 },
      { title: "Annie Hall", type: "movie", year: 1977 },
      { title: "Amélie", type: "movie", year: 2001 },
      { title: "Big Fish", type: "movie", year: 2003 },
      { title: "What Dreams May Come", type: "movie", year: 1998 }
    ],
    tags: ["romance", "quirky", "character-type", "indie"]
  },

  "final-girl": {
    id: "final-girl",
    name: "Final Girl",
    definition: "In horror films, the last surviving female character who confronts and often defeats the killer in the climax.",
    difficulty: "medium",
    hints: [
      "Common in slasher and horror films",
      "Usually the most moral or 'pure' character",
      "Survives to face the killer in the final confrontation"
    ],
    examples: [
      { title: "Halloween", type: "movie", year: 1978 },
      { title: "Friday the 13th", type: "movie", year: 1980 },
      { title: "A Nightmare on Elm Street", type: "movie", year: 1984 },
      { title: "Scream", type: "movie", year: 1996 },
      { title: "The Texas Chain Saw Massacre", type: "movie", year: 1974 },
      { title: "Black Christmas", type: "movie", year: 1974 },
      { title: "I Know What You Did Last Summer", type: "movie", year: 1997 },
      { title: "The Strangers", type: "movie", year: 2008 },
      { title: "You're Next", type: "movie", year: 2011 },
      { title: "The Cabin in the Woods", type: "movie", year: 2012 },
      { title: "Ready or Not", type: "movie", year: 2019 },
      { title: "American Horror Story", type: "tv", year: 2011 },
      { title: "The Final Girls", type: "movie", year: 2015 },
      { title: "Happy Death Day", type: "movie", year: 2017 },
      { title: "X", type: "movie", year: 2022 }
    ],
    tags: ["horror", "survivor", "slasher", "final-confrontation"]
  },

  // HARD TROPES (Require deeper media knowledge)
  "chekhov-gun": {
    id: "chekhov-gun",
    name: "Chekhov's Gun",
    definition: "A seemingly unimportant object or detail introduced early in a story that becomes significant later, usually in the resolution.",
    difficulty: "hard",
    hints: [
      "Named after playwright Anton Chekhov's principle",
      "Something mentioned early becomes important later",
      "Often used in mysteries and thrillers"
    ],
    examples: [
      { title: "The Sixth Sense", type: "movie", year: 1999 },
      { title: "Shutter Island", type: "movie", year: 2010 },
      { title: "Breaking Bad", type: "tv", year: 2008 },
      { title: "Lost", type: "tv", year: 2004 },
      { title: "Westworld", type: "tv", year: 2016 },
      { title: "The Prestige", type: "movie", year: 2006 },
      { title: "Knives Out", type: "movie", year: 2019 },
      { title: "Memento", type: "movie", year: 2000 },
      { title: "The Usual Suspects", type: "movie", year: 1995 },
      { title: "Psycho", type: "movie", year: 1960 },
      { title: "Rear Window", type: "movie", year: 1954 },
      { title: "Fargo", type: "tv", year: 2014 },
      { title: "Better Call Saul", type: "tv", year: 2015 },
      { title: "Zodiac", type: "movie", year: 2007 },
      { title: "Gone Girl", type: "movie", year: 2014 }
    ],
    tags: ["foreshadowing", "plot-device", "mystery", "storytelling"]
  },

  "unreliable-narrator": {
    id: "unreliable-narrator",
    name: "Unreliable Narrator",
    definition: "A storyteller whose credibility is compromised, misleading the audience about events, either intentionally or due to their limited understanding.",
    difficulty: "hard",
    hints: [
      "The person telling the story can't be fully trusted",
      "May be lying, delusional, or have limited information",
      "Creates plot twists when truth is revealed"
    ],
    examples: [
      { title: "Fight Club", type: "movie", year: 1999 },
      { title: "The Sixth Sense", type: "movie", year: 1999 },
      { title: "Shutter Island", type: "movie", year: 2010 },
      { title: "Memento", type: "movie", year: 2000 },
      { title: "The Usual Suspects", type: "movie", year: 1995 },
      { title: "Gone Girl", type: "movie", year: 2014 },
      { title: "American Psycho", type: "movie", year: 2000 },
      { title: "Rashomon", type: "movie", year: 1950 },
      { title: "The Great Gatsby", type: "book", year: 1925 },
      { title: "Lolita", type: "book", year: 1955 },
      { title: "The Catcher in the Rye", type: "book", year: 1951 },
      { title: "Life of Pi", type: "book", year: 2001 },
      { title: "Mr. Robot", type: "tv", year: 2015 },
      { title: "Westworld", type: "tv", year: 2016 },
      { title: "The Handmaid's Tale", type: "tv", year: 2017 }
    ],
    tags: ["narration", "twist", "deception", "perspective"]
  },

  "breaking-the-fourth-wall": {
    id: "breaking-the-fourth-wall",
    name: "Breaking the Fourth Wall",
    definition: "When a character acknowledges they are in a fictional work and directly addresses the audience or references the medium itself.",
    difficulty: "hard",
    hints: [
      "Character talks directly to the audience",
      "Acknowledges they're in a movie, TV show, or game",
      "Often used for comedy or meta-commentary"
    ],
    examples: [
      { title: "Deadpool", type: "movie", year: 2016 },
      { title: "The Office", type: "tv", year: 2005 },
      { title: "Ferris Bueller's Day Off", type: "movie", year: 1986 },
      { title: "House of Cards", type: "tv", year: 2013 },
      { title: "Fleabag", type: "tv", year: 2016 },
      { title: "Wayne's World", type: "movie", year: 1992 },
      { title: "Spaceballs", type: "movie", year: 1987 },
      { title: "The Stanley Parable", type: "game", year: 2013 },
      { title: "Doki Doki Literature Club", type: "game", year: 2017 },
      { title: "She-Hulk", type: "tv", year: 2022 },
      { title: "Saved by the Bell", type: "tv", year: 1989 },
      { title: "Malcolm in the Middle", type: "tv", year: 2000 },
      { title: "Blazing Saddles", type: "movie", year: 1974 },
      { title: "The Purple Rose of Cairo", type: "movie", year: 1985 },
      { title: "Funny Games", type: "movie", year: 1997 }
    ],
    tags: ["meta", "comedy", "self-aware", "audience"]
  },

  "deus-ex-machina": {
    id: "deus-ex-machina",
    name: "Deus Ex Machina",
    definition: "A plot device where an unexpected, artificial, or improbable event suddenly resolves a seemingly unsolvable problem.",
    difficulty: "hard",
    hints: [
      "Latin for 'god from the machine'",
      "Sudden, unexpected solution to a major problem",
      "Often criticized as lazy writing"
    ],
    examples: [
      { title: "War of the Worlds", type: "movie", year: 2005 },
      { title: "Independence Day", type: "movie", year: 1996 },
      { title: "The Matrix Revolutions", type: "movie", year: 2003 },
      { title: "Avengers Endgame", type: "movie", year: 2019 },
      { title: "Lost", type: "tv", year: 2004 },
      { title: "Signs", type: "movie", year: 2002 },
      { title: "The Lion King", type: "movie", year: 1994 }
    ],
    tags: ["plot-device", "resolution", "convenience", "criticism"]
  }
};

// Helper function to get trope by ID
function getTropeById(id) {
  return TROPES_DATABASE[id];
}

// Helper function to get all trope IDs
function getAllTropeIds() {
  return Object.keys(TROPES_DATABASE);
}

// Helper function to get tropes by difficulty
function getTropesByDifficulty(difficulty) {
  return Object.values(TROPES_DATABASE).filter(trope => trope.difficulty === difficulty);
}

// Helper function to get random trope
function getRandomTrope() {
  const ids = getAllTropeIds();
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  return TROPES_DATABASE[randomId];
}

// Updated scheduler-compatible function
function getTodaysTrope() {
  // This will be overridden by tropeScheduler.js when loaded
  const tropeIds = Object.keys(TROPES_DATABASE);
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const tropeIndex = dayOfYear % tropeIds.length;
  const tropeId = tropeIds[tropeIndex];
  return TROPES_DATABASE[tropeId];
}

// Enhanced validation function (basic version - will be overridden by validator.js)
function validateSubmission(submission, trope) {
  if (!submission || !trope || !trope.examples) return false;
  
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
    
    return cleanTitle === cleanSubmission || 
           cleanTitle.includes(cleanSubmission) || 
           cleanSubmission.includes(cleanTitle);
  });
}

// Database statistics
function getDatabaseStats() {
  const tropes = Object.values(TROPES_DATABASE);
  const totalTropes = tropes.length;
  const totalExamples = tropes.reduce((sum, trope) => sum + trope.examples.length, 0);
  
  const difficultyCount = tropes.reduce((acc, trope) => {
    acc[trope.difficulty] = (acc[trope.difficulty] || 0) + 1;
    return acc;
  }, {});
  
  const mediaTypeCount = tropes.reduce((acc, trope) => {
    trope.examples.forEach(example => {
      acc[example.type] = (acc[example.type] || 0) + 1;
    });
    return acc;
  }, {});
  
  return {
    totalTropes,
    totalExamples,
    averageExamplesPerTrope: Math.round(totalExamples / totalTropes),
    difficultyBreakdown: difficultyCount,
    mediaTypeBreakdown: mediaTypeCount
  };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    TROPES_DATABASE, 
    getTodaysTrope, 
    validateSubmission,
    getTropeById,
    getAllTropeIds,
    getTropesByDifficulty,
    getRandomTrope,
    getDatabaseStats
  }}
