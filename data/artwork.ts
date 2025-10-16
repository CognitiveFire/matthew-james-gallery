import { Artwork } from '@/types/artwork'

export const sampleArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Lytteren',
    description: 'Han har lyttet en stund, selv om ingen er helt sikre på hva. Lytteren blander dristige farger og awkward selvtillit, med de store øynene som tar alt inn og gir ingenting tilbake. Det grove penselarbeidet og de kraftige koralltone gjør det både alvorlig og litt latterlig, som noen som nettopp har innsett at de kanskje er i feil rom, men nekter å forlate. Det er moderne, uttryksfullt og stille morsomt, en påminnelse om at intensitet og humor ofte deler samme ansikt.',
    shortDescription: 'Han har lyttet hele dagen og er fortsatt ikke sikker på hva han har hørt.',
    translations: {
      en: {
        title: 'The Listener',
        description: 'He\'s been listening for a while, though no one\'s quite sure to what. The Listener mixes bold colour and awkward confidence, with those oversized eyes taking everything in and giving nothing away. The rough brushwork and punchy coral tones make it both serious and a bit ridiculous, like someone who\'s just realised they might be in the wrong room but refuses to leave. It\'s modern, expressive, and quietly funny, a reminder that intensity and humour often share the same face.',
        shortDescription: 'He\'s been listening all day and still isn\'t sure what he\'s heard.',
      },
      no: {
        title: 'Lytteren',
        description: 'Han har lyttet en stund, selv om ingen er helt sikre på hva. Lytteren blander dristige farger og awkward selvtillit, med de store øynene som tar alt inn og gir ingenting tilbake. Det grove penselarbeidet og de kraftige koralltone gjør det både alvorlig og litt latterlig, som noen som nettopp har innsett at de kanskje er i feil rom, men nekter å forlate. Det er moderne, uttryksfullt og stille morsomt, en påminnelse om at intensitet og humor ofte deler samme ansikt.',
        shortDescription: 'Han har lyttet hele dagen og er fortsatt ikke sikker på hva han har hørt.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/Lh0nWty9/1.png',
    secondImageUrl: 'https://i.ibb.co/50ycsJN/listener.jpg',
    dimensions: '50cm × 50cm',
    year: 2024,
    available: false,
    featured: true,
    likes: 24,
  },
  {
    id: '2',
    title: 'Vinterreven',
    description: 'Innpakket i sin fineste frakk og skarpere meninger, er Vinterreven en elegant eldre dame som liker en god tur, mest slik at hun kan dømme alle hun passerer. De store brillene og den rolige selvtilliten forteller at hun har sett det hele og sannsynligvis ikke godkjente det meste. Malt i kjølige blåtoner og varme gultoner, er hun delvis mote, delvis frost, og helt og holdent unnskyldningsfri.',
    shortDescription: 'Bærer dom bedre enn de fleste bærer skjerf.',
    translations: {
      en: {
        title: 'Winter Fox',
        description: 'Wrapped in her finest coat and sharper opinions, Winter Fox is an elegant older lady who enjoys a good walk, mostly so she can judge everyone she passes. Her oversized glasses and calm confidence say she\'s seen it all and probably didn\'t approve of most of it. Painted in cool blues and warm yellows, she\'s part fashion, part frost, and entirely unapologetic.',
        shortDescription: 'Wears judgement better than most people wear scarves.',
      },
      no: {
        title: 'Vinterreven',
        description: 'Innpakket i sin fineste frakk og skarpere meninger, er Vinterreven en elegant eldre dame som liker en god tur, mest slik at hun kan dømme alle hun passerer. De store brillene og den rolige selvtilliten forteller at hun har sett det hele og sannsynligvis ikke godkjente det meste. Malt i kjølige blåtoner og varme gultoner, er hun delvis mote, delvis frost, og helt og holdent unnskyldningsfri.',
        shortDescription: 'Bærer dom bedre enn de fleste bærer skjerf.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/bjFgQBqm/3-B7-DF6-AC-8897-4605-A0-C5-AAA78-D5031-A5-1-201-a.jpg',
    secondImageUrl: 'https://i.ibb.co/Y4VNWsMB/winterfox.jpg',
    dimensions: '70cm × 50cm',
    year: 2024,
    available: true,
    featured: true,
    likes: 24,
  },
  {
    id: '3',
    title: 'Bystøy',
    description: 'Et kaotisk utbrudd av farge og form, Bystøy føles som en kveld ute som kom ut av kontroll, men endte bra. Hvert hjørne surrer med energi, ansikter, lys, fragmenter av lyd, alt pakket sammen i unnskyldningsfri farge. Det er høyt, rotete og veldig levende.',
    shortDescription: 'En kveld ute, en dårlig idé og et veldig godt maleri.',
    translations: {
      en: {
        title: 'City Noise',
        description: 'A chaotic burst of colour and shape, City Noise feels like a night out that got out of hand but ended well. Every corner hums with energy, faces, lights, fragments of sound, all crammed together in unapologetic colour. It\'s loud, it\'s messy, and it\'s very much alive.',
        shortDescription: 'A night out, a bad idea, and a very good painting.',
      },
      no: {
        title: 'Bystøy',
        description: 'Et kaotisk utbrudd av farge og form, Bystøy føles som en kveld ute som kom ut av kontroll, men endte bra. Hvert hjørne surrer med energi, ansikter, lys, fragmenter av lyd, alt pakket sammen i unnskyldningsfri farge. Det er høyt, rotete og veldig levende.',
        shortDescription: 'En kveld ute, en dårlig idé og et veldig godt maleri.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 20000,
    imageUrl: 'https://i.ibb.co/BmqDWwN/3.png',
    secondImageUrl: 'https://i.ibb.co/TMDKWpr3/nighout.jpg',
    dimensions: '150cm × 120cm',
    year: 2023,
    available: true,
    featured: false,
    likes: 18,
  },
  {
    id: '4',
    title: 'Stille Vann',
    description: 'Stillhet i lag. Dypt Vann skifter mellom blått, grønt og grått som minnet selv, rolig, men ikke helt oppgjort. Det er det stille maleriet i et støyende rom, den typen som belønner et lengre blikk og et roligere pust.',
    shortDescription: 'Stillhet, dybde og et hint av noe uløst.',
    translations: {
      en: {
        title: 'Still Waters Run Deep',
        description: 'Stillness in layers. Deep Water shifts between blue, green, and grey like memory itself, calm, but not quite settled. It\'s the quiet painting in a noisy room, the kind that rewards a longer look and a slower breath.',
        shortDescription: 'Stillness, depth, and a hint of something unsolved.',
      },
      no: {
        title: 'Stille Vann',
        description: 'Stillhet i lag. Dypt Vann skifter mellom blått, grønt og grått som minnet selv, rolig, men ikke helt oppgjort. Det er det stille maleriet i et støyende rom, den typen som belønner et lengre blikk og et roligere pust.',
        shortDescription: 'Stillhet, dybde og et hint av noe uløst.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/k2bQHrBT/4.png',
    secondImageUrl: 'https://i.ibb.co/JRp632N2/still-waters.jpg',
    dimensions: '70cm × 50cm',
    year: 2024,
    available: true,
    featured: true,
    likes: 24,
  },
  {
    id: '5',
    title: 'Den Dømmende Svarttrost',
    description: 'En glanset svarttrost sitter i rosa lys. Den Dømmende Svarttrost balanserer realisme og holdning, delvis naturstudie, delvis noir-karakter. Den er både alvorlig og absurd, som er den perfekte balansen.',
    shortDescription: 'En glanset svarttrost med holdning og rosa lys.',
    translations: {
      en: {
        title: 'The Judgmental Blackbird',
        description: 'A glossy blackbird sits in pink light. The Judgmental Blackbird balances realism and attitude, part nature study, part noir character. It\'s both serious and absurd, which is the perfect balance.',
        shortDescription: 'A glossy blackbird with attitude and pink light.',
      },
      no: {
        title: 'Den Dømmende Svarttrost',
        description: 'En glanset svarttrost sitter i rosa lys. Den Dømmende Svarttrost balanserer realisme og holdning, delvis naturstudie, delvis noir-karakter. Den er både alvorlig og absurd, som er den perfekte balansen.',
        shortDescription: 'En glanset svarttrost med holdning og rosa lys.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/rKT2qXDF/5.png',
    secondImageUrl: 'https://i.ibb.co/fzSck7JV/thebirdwhonewtoolittle.jpg',
    dimensions: '50cm × 30cm',
    year: 2023,
    available: true,
    featured: false,
    likes: 18,
  },
  {
    id: '6',
    title: 'Sosial Lytting',
    description: 'En kald krig-scene gjenskapt for sladderens tidsalder. Sosial Lytting fanger en gruppe menn dypt i diskusjon, uvitende om at noen stille lytter fra balkongen over. De flate fargeblokkene og skarpe kontrastene ekko av propaganda fra midten av århundret, mens historien gjemmer seg i åpen sikt, delvis spionasje, delvis sosial kommentar. Det er den typen maleri der ingenting skjer, men alt blir overhørt.',
    shortDescription: 'Det er alltid noen som lytter.',
    translations: {
      en: {
        title: 'Social Listening',
        description: 'A Cold War scene reimagined for the age of gossip. Social Listening captures a group of men deep in discussion, unaware that someone is quietly listening from the balcony above. The flat colour blocks and sharp contrasts echo mid,century propaganda, while the story hides in plain sight, part espionage, part social commentary. It\'s the kind of painting where nothing happens, yet everything\'s being overheard.',
        shortDescription: 'There\'s always someone listening.',
      },
      no: {
        title: 'Sosial Lytting',
        description: 'En kald krig-scene gjenskapt for sladderens tidsalder. Sosial Lytting fanger en gruppe menn dypt i diskusjon, uvitende om at noen stille lytter fra balkongen over. De flate fargeblokkene og skarpe kontrastene ekko av propaganda fra midten av århundret, mens historien gjemmer seg i åpen sikt, delvis spionasje, delvis sosial kommentar. Det er den typen maleri der ingenting skjer, men alt blir overhørt.',
        shortDescription: 'Det er alltid noen som lytter.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/1GcgJXFN/6.png',
    secondImageUrl: 'https://i.ibb.co/cSDczkkV/social-listening.jpg',
    dimensions: '70cm × 50cm',
    year: 2024,
    available: true,
    featured: true,
    likes: 24,
  },
  {
    id: '7',
    title: 'Sjømonstrets Fridag',
    description: 'Selv mytiske skapninger trenger en pause. Sjømonstrets Fridag kaster sammen lyse former, rare lemmer og vandrende øyne i en vill komposisjon som på en eller annen måte gir mening, eller kanskje ikke, og det er det morsomme med det.',
    shortDescription: 'Selv kaosskapninger fortjener litt nedetid.',
    translations: {
      en: {
        title: 'Sea Monster\'s Day Off',
        description: 'Even mythical creatures need a break. Sea Monster\'s Day Off throws together bright shapes, odd limbs, and wandering eyes in a wild composition that somehow makes sense, or maybe doesn\'t, and that\'s the fun of it.',
        shortDescription: 'Even creatures of chaos deserve a little downtime.',
      },
      no: {
        title: 'Sjømonstrets Fridag',
        description: 'Selv mytiske skapninger trenger en pause. Sjømonstrets Fridag kaster sammen lyse former, rare lemmer og vandrende øyne i en vill komposisjon som på en eller annen måte gir mening, eller kanskje ikke, og det er det morsomme med det.',
        shortDescription: 'Selv kaosskapninger fortjener litt nedetid.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/bMm2z0Kp/7.png',
    secondImageUrl: 'https://i.ibb.co/Vc9v7CF3/monsterdayoff.jpg',
    dimensions: '120cm × 100cm',
    year: 2023,
    available: true,
    featured: false,
    likes: 18,
  },
  {
    id: '8',
    title: 'London - Et Nytt Perspektiv',
    description: 'Paraplyer, busser og en gate som nekter å holde seg rett - London i Regnet fanger byens kaos og sjarm i rushtiden. Den er lys, skjev og perfekt uperfekt, akkurat som London selv.',
    shortDescription: 'Paraplyer opp, busser ned, og ingen i tide.',
    translations: {
      en: {
        title: 'London - A New Perspective',
        description: 'Umbrellas, buses, and a street that refuses to stay straight - London in the Rain captures the chaos and charm of the city at rush hour. It\'s bright, crooked, and perfectly imperfect, just like London itself.',
        shortDescription: 'Umbrellas up, buses down, and nobody on time.',
      },
      no: {
        title: 'London - Et Nytt Perspektiv',
        description: 'Paraplyer, busser og en gate som nekter å holde seg rett - London i Regnet fanger byens kaos og sjarm i rushtiden. Den er lys, skjev og perfekt uperfekt, akkurat som London selv.',
        shortDescription: 'Paraplyer opp, busser ned, og ingen i tide.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/JwTLSD8n/8.png',
    secondImageUrl: 'https://i.ibb.co/JWGFCm9D/london.jpg',
    dimensions: '50cm × 50cm',
    year: 2024,
    available: true,
    featured: true,
    likes: 24,
  },
  {
    id: '9',
    title: 'Hundelufteren',
    description: 'Han liker alt som er amerikanske, denim, dinere og cowboystøvler. Hundelufteren er et portrett av en mann som bærer sin dobermann i en bæresele, og hodet hans bryter av og til ut i flammer. Det er leken, surrealistisk og merkelig sjarmerende. Som en veikantatttraksjon du ikke helt kan forklare, men definitivt husker.',
    shortDescription: 'Pålitelig, brennbar og hengiven til hunden sin.',
    translations: {
      en: {
        title: 'The Dog Walker',
        description: 'He likes all things Americana, denim, diners, and cowboy boots. The Dog Walker is a portrait of a man who carries his Dobermann in a baby sling, and his head occasionally bursts into flames. It\'s playful, surreal, and oddly endearing. Like a roadside attraction you can\'t quite explain but definitely remember.',
        shortDescription: 'Dependable, combustible, and devoted to his dog.',
      },
      no: {
        title: 'Hundelufteren',
        description: 'Han liker alt som er amerikanske, denim, dinere og cowboystøvler. Hundelufteren er et portrett av en mann som bærer sin dobermann i en bæresele, og hodet hans bryter av og til ut i flammer. Det er leken, surrealistisk og merkelig sjarmerende. Som en veikantatttraksjon du ikke helt kan forklare, men definitivt husker.',
        shortDescription: 'Pålitelig, brennbar og hengiven til hunden sin.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/GQP5cVxT/9.png',
    secondImageUrl: 'https://i.ibb.co/G4Q7v6tN/dogwalker.jpg',
    dimensions: '50cm × 40cm',
    year: 2023,
    available: true,
    featured: false,
    likes: 31,
  },
  {
    id: '10',
    title: 'Det Virket Som et Fint Nabolag å Ha Dårlige Vaner I',
    description: 'Et vindu sent om kvelden, en skjev gate, og noen som tenker for mye for sitt eget beste. Det Virket Som et Fint Nabolag å Ha Dårlige Vaner I låner stemningen fra gamle detektivromaner - den typen med sigarettrøyk, stille bekjennelser og ingen lykkelige slutter. De varme lysene og tunge skyggene får scenen til å føles både ensom og levende, som om historien fortsatt utspiller seg akkurat utenfor rammen.',
    shortDescription: 'Hvert vindu skjuler en plotvending.',
    translations: {
      en: {
        title: 'It Seemed Like a Nice Neighborhood to Have Bad Habits In',
        description: 'A late-night window, a crooked street, and someone thinking too much for their own good. It Seemed Like a Nice Neighborhood to Have Bad Habits In borrows its mood from old detective novels - the kind with cigarette smoke, quiet confessions, and no happy endings. The warm lights and heavy shadows make the scene feel both lonely and alive, like the story\'s still unfolding just out of frame.',
        shortDescription: 'Every window hides a plot twist.',
      },
      no: {
        title: 'Det Virket Som et Fint Nabolag å Ha Dårlige Vaner I',
        description: 'Et vindu sent om kvelden, en skjev gate, og noen som tenker for mye for sitt eget beste. Det Virket Som et Fint Nabolag å Ha Dårlige Vaner I låner stemningen fra gamle detektivromaner - den typen med sigarettrøyk, stille bekjennelser og ingen lykkelige slutter. De varme lysene og tunge skyggene får scenen til å føles både ensom og levende, som om historien fortsatt utspiller seg akkurat utenfor rammen.',
        shortDescription: 'Hvert vindu skjuler en plotvending.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 12000,
    imageUrl: 'https://i.ibb.co/jkkWMqXB/10.png',
    secondImageUrl: 'https://i.ibb.co/KjWw8nHf/aniceneighbiorhood.jpg',
    dimensions: '70cm × 50cm',
    year: 2024,
    available: true,
    featured: true,
    likes: 19,
  },
  {
    id: '11',
    title: 'Det Regner Igjen',
    description: 'Det Regner Igjen fanger den stille tyngden av enda en grå dag. Figurens uttrykk sier alt, sliten, tankefull og et sted mellom aksept og flukt. De myke gultone og utvasket fargene gjenspeiler det særegne Bergen-lyset som får alt til å føles både levende og halvt i søvne. Det er humor i utholdenheten, og en slags fred i melankolien.',
    shortDescription: 'Bergenvær, indre melankoli, samme sak egentlig.',
    translations: {
      en: {
        title: 'It\'s Raining Again',
        description: 'It\'s Raining Again captures the quiet weight of another grey day. The figure\'s expression says everything, tired, thoughtful, and somewhere between acceptance and escape. The soft yellows and washed-out tones echo that peculiar Bergen light that makes everything feel both alive and half-asleep. There\'s humour in the endurance, and a kind of peace in the melancholy.',
        shortDescription: 'Bergen weather, inner melancholy, same thing really.',
      },
      no: {
        title: 'Det Regner Igjen',
        description: 'Det Regner Igjen fanger den stille tyngden av enda en grå dag. Figurens uttrykk sier alt, sliten, tankefull og et sted mellom aksept og flukt. De myke gultone og utvasket fargene gjenspeiler det særegne Bergen-lyset som får alt til å føles både levende og halvt i søvne. Det er humor i utholdenheten, og en slags fred i melankolien.',
        shortDescription: 'Bergenvær, indre melankoli, samme sak egentlig.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/ccQGmx6H/11.png',
    secondImageUrl: 'https://i.ibb.co/ynQqzSRt/itsrainingagain.jpg',
    dimensions: '50cm × 50cm',
    year: 2024,
    available: true,
    featured: false,
    likes: 16,
  },
  {
    id: '12',
    title: 'Hagen ved Middagstid',
    description: 'Et utbrudd av grønt, rosa og gult - Hagen ved Middagstid feirer det øyeblikket når alt i hagen ser perfekt ut, rett før det ikke er det. Den er lys, rolig og litt for selvsikker på sin symmetri.',
    shortDescription: 'Orden før uorden.',
    translations: {
      en: {
        title: 'The Garden at Noon',
        description: 'A burst of green, pink, and yellow - The Garden at Noon celebrates that moment when everything in the garden looks perfect, right before it isn\'t. It\'s bright, calm, and a little too confident in its symmetry.',
        shortDescription: 'Order before disorder.',
      },
      no: {
        title: 'Hagen ved Middagstid',
        description: 'Et utbrudd av grønt, rosa og gult - Hagen ved Middagstid feirer det øyeblikket når alt i hagen ser perfekt ut, rett før det ikke er det. Den er lys, rolig og litt for selvsikker på sin symmetri.',
        shortDescription: 'Orden før uorden.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/4ZXbbHpg/12.png',
    secondImageUrl: 'https://i.ibb.co/n8mQCGz5/garden.jpg',
    dimensions: '40cm × 30cm',
    year: 2023,
    available: false,
    featured: true,
    likes: 22,
  },
  {
    id: '13',
    title: 'Tyrefekteren',
    description: 'Tyrefekteren fanger en stille pause midt i spektaklet, et enkelt øyeblikk før kaoset gjenopptar. Mengden lyser i rosa og lilla, mens arenaen føles både storslått og ensom. Det er drama uten rop.',
    shortDescription: 'Mot, farge og tvilsomme livsvalg.',
    translations: {
      en: {
        title: 'The Matador',
        description: 'The Matador captures a quiet pause in the middle of the spectacle, a single moment before chaos resumes. The crowd glows in pinks and purples, while the arena feels both grand and lonely. It\'s drama without shouting.',
        shortDescription: 'Courage, colour, and questionable life choices.',
      },
      no: {
        title: 'Tyrefekteren',
        description: 'Tyrefekteren fanger en stille pause midt i spektaklet, et enkelt øyeblikk før kaoset gjenopptar. Mengden lyser i rosa og lilla, mens arenaen føles både storslått og ensom. Det er drama uten rop.',
        shortDescription: 'Mot, farge og tvilsomme livsvalg.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 12000,
    imageUrl: 'https://i.ibb.co/pvWGzw8w/13.png',
    secondImageUrl: 'https://i.ibb.co/V0DMx682/bullfighter.jpg',
    dimensions: '70cm × 50cm',
    year: 2024,
    available: false,
    featured: false,
    likes: 27,
  },
  {
    id: '14',
    title: 'Gressklipperen',
    description: 'Satt på Kreta, viser Gressklipperen en kvinne fortapt i den enkle rytmen av gressklipping. Solen er sterk, luften stille, og den eneste lyden er summingen fra klipperen, en liten handling av orden i et vilt landskap. Det er ingen hast, ingen publikum, bare den rolige tilfredsstillelsen av klippet gress og klare tanker. Det er et maleri om å koble ut, innstille seg og finne fred.',
    shortDescription: 'Solskinn, ensomhet og det perfekte kuttet.',
    translations: {
      en: {
        title: 'The Mower',
        description: 'Set in Crete, The Mower shows a woman lost in the simple rhythm of cutting grass. The sun is bright, the air still, and the only sound is the hum of the mower, a small act of order in a wild landscape. There\'s no rush, no audience, just the calm satisfaction of cut grass and clear thoughts. It\'s a painting about zoning out, tuning in, and finding peace.',
        shortDescription: 'Sunshine, solitude, and the perfect cut.',
      },
      no: {
        title: 'Gressklipperen',
        description: 'Satt på Kreta, viser Gressklipperen en kvinne fortapt i den enkle rytmen av gressklipping. Solen er sterk, luften stille, og den eneste lyden er summingen fra klipperen, en liten handling av orden i et vilt landskap. Det er ingen hast, ingen publikum, bare den rolige tilfredsstillelsen av klippet gress og klare tanker. Det er et maleri om å koble ut, innstille seg og finne fred.',
        shortDescription: 'Solskinn, ensomhet og det perfekte kuttet.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/kgGJ5QVQ/gallery.png',
    secondImageUrl: 'https://i.ibb.co/fVQrHbW2/grassclipper.jpg',
    dimensions: '70cm × 50cm',
    year: 2024,
    available: false,
    featured: true,
    likes: 25,
  },
  {
    id: '15',
    title: 'Den Blå Stolen',
    description: 'Et fredelig hjørne ved vannet, to katter, en benk og et publikum av blomster. Den Blå Stolen er delvis hjemlig ro, delvis ugagn; du vet bare at noe er i ferd med å skje, sannsynligvis involverer krabbetinen.',
    shortDescription: 'Ro med en sidedose kattepolitikk.',
    translations: {
      en: {
        title: 'The Blue Chair',
        description: 'A peaceful corner by the water, two cats, one bench, and an audience of flowers. The Blue Bench is part domestic calm, part mischief; you just know something\'s about to happen, probably involving the crab pot.',
        shortDescription: 'Serenity with a side of cat politics.',
      },
      no: {
        title: 'Den Blå Stolen',
        description: 'Et fredelig hjørne ved vannet, to katter, en benk og et publikum av blomster. Den Blå Stolen er delvis hjemlig ro, delvis ugagn; du vet bare at noe er i ferd med å skje, sannsynligvis involverer krabbetinen.',
        shortDescription: 'Ro med en sidedose kattepolitikk.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 15000,
    imageUrl: 'https://i.ibb.co/bgNSj10c/15.png',
    secondImageUrl: 'https://i.ibb.co/gZNXjYSW/bluechair.jpg',
    dimensions: '70cm × 50cm',
    year: 2023,
    available: false,
    featured: false,
    likes: 20,
  },
  {
    id: '16',
    title: 'Innsvømming',
    description: 'Innsvømming fanger det frenetiske øyeblikket før et barnesvømmestevne når alle er i bassenget samtidig, armer, ben og kaos overalt. Det er organisert kaos, fullt av bevegelse og lyd, frosset inn i et mønster som på en eller annen måte gir mening. De dristige formene og abstrakte former gjenspeiler vannets rytme og den nervøse energien i konkurranse.',
    shortDescription: 'Oppvarming eller overlevelse? Vanskelig å si.',
    translations: {
      en: {
        title: 'Innsvømming',
        description: 'Innsvømming captures that frantic moment before a children\'s swim meet when everyone\'s in the pool at once, arms, legs, and chaos everywhere. It\'s organised mayhem, full of movement and noise, frozen into a pattern that somehow makes sense. The bold shapes and abstract forms echo the rhythm of water and the nervous energy of competition.',
        shortDescription: 'Warm-up or survival? Hard to tell.',
      },
      no: {
        title: 'Innsvømming',
        description: 'Innsvømming fanger det frenetiske øyeblikket før et barnesvømmestevne når alle er i bassenget samtidig, armer, ben og kaos overalt. Det er organisert kaos, fullt av bevegelse og lyd, frosset inn i et mønster som på en eller annen måte gir mening. De dristige formene og abstrakte former gjenspeiler vannets rytme og den nervøse energien i konkurranse.',
        shortDescription: 'Oppvarming eller overlevelse? Vanskelig å si.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/mm1PPb9/gallery-3.png',
    secondImageUrl: 'https://i.ibb.co/4wtJng60/innsvimming.jpg',
    dimensions: '40cm × 30cm',
    year: 2024,
    available: true,
    featured: true,
    likes: 23,
  },
  {
    id: '17',
    title: 'Mars Høst',
    description: 'I Mars Høst blir den kjente dyrkingshandlingen gjenskapt på et fremmed plan. Maleriets livlige lag - et smeltet rødt felt under en konstellasjon av elektrisk blå trær - fremkaller både overflod og isolasjon. Under overflateskjønnheten ligger et stille spørsmål: hva betyr det å slå rot på et sted som aldri var vårt? Verket stiller det organiske opp mot det kosmiske, ved bruk av tekstur og farge for å antyde livets utholdenhet utover Jorden. En gyllen månesigd svever over som et symbol på håp eller høst, og belyser menneskehetens varige ønske om å skape, transformere og tilhøre - selv på den røde jorden til en fjern verden.',
    shortDescription: 'Livet finner farge, selv på fjern jord.',
    translations: {
      en: {
        title: 'Mars Harvest',
        description: 'In Mars Harvest, the familiar act of cultivation is reimagined on an alien plane. The painting\'s vibrant strata — a molten red field beneath a constellation of electric blue trees — evoke both abundance and isolation. Beneath the surface beauty lies a quiet question: what does it mean to plant roots in a place that was never ours? The work juxtaposes the organic and the cosmic, using texture and colour to suggest the persistence of life beyond Earth. A golden crescent hovers above like a symbol of hope or harvest, illuminating humanity\'s enduring desire to create, transform, and belong — even on the red soil of a distant world.',
        shortDescription: 'Life finds colour, even on distant soil.',
      },
      no: {
        title: 'Mars Høst',
        description: 'I Mars Høst blir den kjente dyrkingshandlingen gjenskapt på et fremmed plan. Maleriets livlige lag - et smeltet rødt felt under en konstellasjon av elektrisk blå trær - fremkaller både overflod og isolasjon. Under overflateskjønnheten ligger et stille spørsmål: hva betyr det å slå rot på et sted som aldri var vårt? Verket stiller det organiske opp mot det kosmiske, ved bruk av tekstur og farge for å antyde livets utholdenhet utover Jorden. En gyllen månesigd svever over som et symbol på håp eller høst, og belyser menneskehetens varige ønske om å skape, transformere og tilhøre - selv på den røde jorden til en fjern verden.',
        shortDescription: 'Livet finner farge, selv på fjern jord.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/G3kdRDb2/Mars-Harvest.png',
    secondImageUrl: 'https://i.ibb.co/6cmWgMNY/marsharvest.jpg',
    dimensions: '50cm × 40cm',
    year: 2025,
    available: true,
    featured: true,
    likes: 0,
  },
  {
    id: '18',
    title: 'Jeg Elsker Thaimat',
    description: 'I Jeg Elsker Thaimat flettes humor og menneskelighet sammen i et portrett som føles både intimt og avvæpnende oppriktig. De tykke, teksturerte strøkene og den dempede paletten gir figuren en rå, taktil tilstedeværelse - en person formet ikke av idealisering, men av erfaring. T-skjorten hans, som dristig erklærer kjærlighet til thailandsk mat, forankrer verket i hverdagsvirkeligheten samtidig som den antyder dypere varme og individualitet. Bak den tilsynelatende enkelheten ligger en stille observasjon av identitet: hvordan små erklæringer - en t-skjorte, et blikk, en frase - blir fragmenter av selvuttrykk. Resultatet er et portrett som feirer skjønnheten i det ubemerkelsesverdige, og finner karakter og ømhet i det vanlige.',
    shortDescription: 'Et vanlig ansikt, en stille bekjennelse av glede.',
    translations: {
      en: {
        title: 'I Love Thai Food',
        description: 'In I Love Thai Food, humour and humanity intertwine in a portrait that feels both intimate and disarmingly sincere. The thick, textured strokes and muted palette give the figure a raw, tactile presence — a person shaped not by idealisation but by experience. His T-shirt, boldly proclaiming affection for Thai cuisine, grounds the piece in everyday reality while hinting at deeper warmth and individuality. Behind the apparent simplicity lies a quiet observation of identity: how small declarations — a shirt, a glance, a phrase — become fragments of self-expression. The result is a portrait that celebrates the beauty of the unremarkable, finding character and tenderness in the ordinary.',
        shortDescription: 'An ordinary face, a quiet confession of joy.',
      },
      no: {
        title: 'Jeg Elsker Thaimat',
        description: 'I Jeg Elsker Thaimat flettes humor og menneskelighet sammen i et portrett som føles både intimt og avvæpnende oppriktig. De tykke, teksturerte strøkene og den dempede paletten gir figuren en rå, taktil tilstedeværelse - en person formet ikke av idealisering, men av erfaring. T-skjorten hans, som dristig erklærer kjærlighet til thailandsk mat, forankrer verket i hverdagsvirkeligheten samtidig som den antyder dypere varme og individualitet. Bak den tilsynelatende enkelheten ligger en stille observasjon av identitet: hvordan små erklæringer - en t-skjorte, et blikk, en frase - blir fragmenter av selvuttrykk. Resultatet er et portrett som feirer skjønnheten i det ubemerkelsesverdige, og finner karakter og ømhet i det vanlige.',
        shortDescription: 'Et vanlig ansikt, en stille bekjennelse av glede.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/Kx5yLNrG/ilovethaifood.jpg',
    secondImageUrl: 'https://i.ibb.co/v4DXgnKr/ilovethaifood.jpg',
    dimensions: '50cm × 40cm',
    year: 2025,
    available: true,
    featured: true,
    likes: 0,
  },
  {
    id: '19',
    title: 'Bergen??',
    description: 'Bergen?? er et livlig, semi-abstrakt portrett av Norges kystby - et sted både kjent og fragmentert. Kantete former i dristige toner av rødt, blått, gult og rosa antyder tak og fasader stablet tett mot mørke fjellsilhuetter. Komposisjonens rytme speiler Bergens kaotiske skjønnhet: fargerik orden presset mot vekten av vær og landskap. Maleriet fanger ikke et bokstavelig bylandskap, men følelsen av Bergen slik den lever i kunstnerens sinn: lys, rastløs og full av motsetninger - en mosaikk av øyeblikk under en skiftende nordlig himmel.',
    shortDescription: 'En by husket, gjenskapt og litt på avveie.',
    translations: {
      en: {
        title: 'Bergen??',
        description: 'Bergen?? is a vibrant, semi-abstract portrait of Norway\'s coastal city — a place both familiar and fragmented. Angular shapes in bold tones of red, blue, yellow, and pink suggest rooftops and facades stacked tightly against dark mountain silhouettes. The rhythm of the composition mirrors Bergen\'s chaotic beauty: colourful order pressed against the weight of weather and landscape. The painting captures not a literal cityscape, but the feeling of Bergen as it lives in the artist\'s mind: bright, restless, and full of contradictions — a mosaic of moments under a shifting northern sky.',
        shortDescription: 'A city remembered, reimagined, and slightly out of place.',
      },
      no: {
        title: 'Bergen??',
        description: 'Bergen?? er et livlig, semi-abstrakt portrett av Norges kystby - et sted både kjent og fragmentert. Kantete former i dristige toner av rødt, blått, gult og rosa antyder tak og fasader stablet tett mot mørke fjellsilhuetter. Komposisjonens rytme speiler Bergens kaotiske skjønnhet: fargerik orden presset mot vekten av vær og landskap. Maleriet fanger ikke et bokstavelig bylandskap, men følelsen av Bergen slik den lever i kunstnerens sinn: lys, rastløs og full av motsetninger - en mosaikk av øyeblikk under en skiftende nordlig himmel.',
        shortDescription: 'En by husket, gjenskapt og litt på avveie.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/DPwtKqLm/Bergen.png',
    secondImageUrl: 'https://i.ibb.co/7xPVBTNX/bergen.jpg',
    dimensions: '60cm × 40cm',
    year: 2021,
    available: true,
    featured: false,
    likes: 0,
  },
  {
    id: '20',
    title: 'Fragment av Meg Selv',
    description: 'I Fragment av Meg Selv løses ansiktet opp i en kollisjon av farge og følelser - et selvportrett ikke av likhet, men av følelse. Dristige strøk av karmosinrødt, chartreuse og midnattsvart river over overflaten og danner øyne som ser ut til å formere seg og overlappe, som om de skimtes gjennom knust glass. Komposisjonen vibrerer mellom kaos og koherens, mellom skjuling og avsløring. Dette verket fanger spenningen i selvoppfatning: hvordan identitet splintres gjennom erfaring, minne og stemning. Resultatet er et levende psykologisk landskap - uttryksfullt, rått og ubeskyttet - der gjenkjennelse flimrer akkurat lenge nok til å stille spørsmål om hvem, nøyaktig, som blir sett.',
    shortDescription: 'Et selvportrett ikke av likhet, men av følelse.',
    translations: {
      en: {
        title: 'Fragment of Myself',
        description: 'In Fragment of Myself, the face dissolves into a collision of colour and emotion — a self-portrait not of likeness, but of feeling. Bold strokes of crimson, chartreuse, and midnight black tear across the surface, forming eyes that seem to multiply and overlap, as if glimpsed through fractured glass. The composition vibrates between chaos and coherence, between concealment and revelation. This work captures the tension of self-perception: how identity splinters through experience, memory, and mood. The result is a vivid psychological landscape — expressive, raw, and unguarded — where recognition flickers just long enough to question who, exactly, is being seen.',
        shortDescription: 'A self-portrait not of likeness, but of feeling.',
      },
      no: {
        title: 'Fragment av Meg Selv',
        description: 'I Fragment av Meg Selv løses ansiktet opp i en kollisjon av farge og følelser - et selvportrett ikke av likhet, men av følelse. Dristige strøk av karmosinrødt, chartreuse og midnattsvart river over overflaten og danner øyne som ser ut til å formere seg og overlappe, som om de skimtes gjennom knust glass. Komposisjonen vibrerer mellom kaos og koherens, mellom skjuling og avsløring. Dette verket fanger spenningen i selvoppfatning: hvordan identitet splintres gjennom erfaring, minne og stemning. Resultatet er et levende psykologisk landskap - uttryksfullt, rått og ubeskyttet - der gjenkjennelse flimrer akkurat lenge nok til å stille spørsmål om hvem, nøyaktig, som blir sett.',
        shortDescription: 'Et selvportrett ikke av likhet, men av følelse.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/YTWL2LNJ/Fragmentofmyself.png',
    secondImageUrl: 'https://i.ibb.co/XfmDXhZS/fracturedself.jpg',
    dimensions: '50cm × 50cm',
    year: 2022,
    available: true,
    featured: false,
    likes: 0,
  },
  {
    id: '21',
    title: 'Nøkkelhullet',
    description: 'I Nøkkelhullet møtes surrealisme og selvbiografi i en byscene full av symbolikk. En gigantisk blekksprut utfolder seg over dristige røde og okerfargede bygninger, med tentaklene krøllet mot et sentralt nøkkelhull - et motiv av nysgjerrighet, hemmeligholdelse og introspeksjon. Under går små menneskefigurer gjennom skyggefulle buer, deres anonymitet kontrasterer skapningens allstedsnærværelse over. Maleriet fungerer som et psykologisk selvportrett: blekkspruten som både vokter og inntrenger, nøkkelhullet som en portal innover. Det fremkaller følelsen av å bli observert - eller av å observere seg selv - innenfor hverdagslivets arkitektur. Gjennom lagdelte toner og grafisk spenning, fanger Nøkkelhullet kunstnerens egen søken etter mening blant strukturene som både inneholder og skjuler oss.',
    shortDescription: 'Surrealisme møter selvbiografi i en byscene full av symbolikk.',
    translations: {
      en: {
        title: 'The Keyhole',
        description: 'In The Keyhole, surrealism meets autobiography in a city scene alive with symbolism. A giant octopus unfurls across bold red and ochre buildings, its tentacles curling toward a central keyhole — a motif of curiosity, secrecy, and introspection. Beneath, small human figures walk through shadowed arches, their anonymity contrasting the creature\'s omnipresence above. The painting functions as a psychological self-portrait: the octopus as both guardian and intruder, the keyhole as a portal inward. It evokes the feeling of being observed — or of watching oneself — within the architecture of daily life. Through layered tones and graphic tension, The Keyhole captures the artist\'s own search for meaning amid the structures that both contain and conceal us.',
        shortDescription: 'Surrealism meets autobiography in a city scene alive with symbolism.',
      },
      no: {
        title: 'Nøkkelhullet',
        description: 'I Nøkkelhullet møtes surrealisme og selvbiografi i en byscene full av symbolikk. En gigantisk blekksprut utfolder seg over dristige røde og okerfargede bygninger, med tentaklene krøllet mot et sentralt nøkkelhull - et motiv av nysgjerrighet, hemmeligholdelse og introspeksjon. Under går små menneskefigurer gjennom skyggefulle buer, deres anonymitet kontrasterer skapningens allstedsnærværelse over. Maleriet fungerer som et psykologisk selvportrett: blekkspruten som både vokter og inntrenger, nøkkelhullet som en portal innover. Det fremkaller følelsen av å bli observert - eller av å observere seg selv - innenfor hverdagslivets arkitektur. Gjennom lagdelte toner og grafisk spenning, fanger Nøkkelhullet kunstnerens egen søken etter mening blant strukturene som både inneholder og skjuler oss.',
        shortDescription: 'Surrealisme møter selvbiografi i en byscene full av symbolikk.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/B2dy23q3/Thekeyhole.png',
    secondImageUrl: 'https://i.ibb.co/CswnFHT4/keyhole.jpg',
    dimensions: '60cm × 40cm',
    year: 2022,
    available: true,
    featured: false,
    likes: 0,
  },
  {
    id: '22',
    title: 'Øynene Lukket for Støyen',
    description: 'I dette verket utforsker kunstneren den stille spenningen mellom indre liv og eksterne forventninger. De lukkede øynene er ikke en flukt, men en form for motstand - et øyeblikk av stillhet som nekter å bli distrahert. Den forenklede paletten og de flate fargeplanene gir portrettet en tidløs intimitet, der stillheten i seg selv blir en uttalelse.',
    shortDescription: 'Et portrett om å finne styrke i stillhet.',
    translations: {
      en: {
        title: 'Eyes Closed to the Noise',
        description: 'In this work, the artist explores the quiet tension between inner life and external expectation. The closed eyes are not an escape but a form of resistance — a moment of stillness that refuses distraction. The simplified palette and flattened planes of colour lend the portrait a timeless intimacy, where silence itself becomes a statement.',
        shortDescription: 'A portrait about finding strength in stillness.',
      },
      no: {
        title: 'Øynene Lukket for Støyen',
        description: 'I dette verket utforsker kunstneren den stille spenningen mellom indre liv og eksterne forventninger. De lukkede øynene er ikke en flukt, men en form for motstand - et øyeblikk av stillhet som nekter å bli distrahert. Den forenklede paletten og de flate fargeplanene gir portrettet en tidløs intimitet, der stillheten i seg selv blir en uttalelse.',
        shortDescription: 'Et portrett om å finne styrke i stillhet.',
      }
    },
    materials: 'Acrylic on canvas',
    price: 10000,
    imageUrl: 'https://i.ibb.co/sd06X5c3/E022-E8-EE-5358-4404-8-BB8-5-ABC75-FC0418.jpg',
    secondImageUrl: 'https://i.ibb.co/My13hGD1/293-AEA7-C-4-C00-406-E-B956-39-C698-D57-D66.jpg',
    dimensions: '50 x 40cm',
    year: 2025,
    available: true,
    featured: true,
    likes: 0,
  },
]

export const getArtworkById = (id: string): Artwork | undefined => {
  return sampleArtworks.find(artwork => artwork.id === id)
}

export const getFeaturedArtworks = (): Artwork[] => {
  return sampleArtworks.filter(artwork => artwork.featured).slice(0, 10)
}

export const getAllArtworks = (): Artwork[] => {
  return sampleArtworks
}
