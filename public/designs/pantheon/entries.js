/* Extended entries for the overlay.
   Keyed by data-entry id. Each: cat, name, gk, roman, body (HTML, one or more <p>),
   and meta (label → value). Kept concise — real myth, no padding. */

window.PANTHEON_ENTRIES = {

  /* ---------------- PRIMORDIALS ---------------- */
  chaos: {
    cat: "Primordial · Origin",
    name: "Chaos", gk: "Χάος", roman: "— no Roman equivalent —",
    body: `<p>The first of all that is. Hesiod's <em>Theogony</em> begins with a flat statement: <em>verily, at the first, Chaos came to be</em>. He is not a person but a gap — neither matter nor absence, but the breach in which things may afterward come into being. From Chaos issued, without sexual union, Gaia the Earth, Tartarus the pit beneath her, Eros the drawing-together, and the dark pair Erebus and Nyx.</p>
           <p>Later Orphic cosmogony preferred to begin instead with Chronos and a great cosmic egg from which Phanes hatched; but Hesiod's reading remained the dominant one in cult and in poetic memory.</p>`,
    meta: { "Parents": "none — first to be", "Offspring": "Gaia · Tartarus · Eros · Erebus · Nyx", "Source": "Hesiod, Theogony 116", "Roman analogue": "the Latin chaos is borrowed wholesale" }
  },

  gaia: {
    cat: "Primordial · Earth",
    name: "Gaia", gk: "Γαῖα", roman: "Terra · Tellus Mater",
    body: `<p>The broad-bosomed earth herself, and the second of the Primordials. She brought forth Ouranos to be her equal in extent and to cover her on every side; from their union came the twelve Titans, the three Cyclopes, and the three Hundred-handed.</p>
           <p>Gaia is at every turn the mover of cosmic rebellion. She gave Cronus the adamant sickle with which to castrate his father; she warned Cronus that his own son would supplant him; she conspired in the hiding of the infant Zeus. After the fall of the Titans she bred her last and worst child, Typhon, in revenge — and was put down with him. Her oracle at Delphi predated Apollo's.</p>`,
    meta: { "Parents": "Chaos (alone)", "Consort": "Ouranos", "Symbols": "soil · grain · cornucopia · serpent", "Cult sites": "Delphi · Aigai · Olympia (oath-altar)" }
  },

  ouranos: {
    cat: "Primordial · Sky",
    name: "Ouranos", gk: "Οὐρανός", roman: "Caelus · Uranus",
    body: `<p>The starry sky, bred by Gaia to be her equal. He lay upon her without rising and fathered the Titans, but hated his children and hid them within her, so that the Earth groaned with their weight. Gaia forged a sickle of grey adamant and gave it to her youngest, Cronus, who from ambush severed his father's genitals and cast them into the sea.</p>
           <p>From the spilt blood of Ouranos sprang the Erinyes (Furies), the Giants, and the ash-tree nymphs called Meliae. From the foam where his sex fell into the waves was born Aphrodite. Thus the first act of cosmic violence was also the first generation of beauty and of vengeance.</p>`,
    meta: { "Parents": "Gaia (alone)", "Consort": "Gaia", "Symbols": "stars · the sickle of adamant", "Aftermath": "by his blood, the Furies and Giants; by his foam, Aphrodite" }
  },

  chronos: {
    cat: "Primordial · Time",
    name: "Chronos", gk: "Χρόνος", roman: "Aevum · Tempus",
    body: `<p>In the Orphic cosmogonies, Chronos — unageing time — arose self-formed and joined with Ananke (Necessity) to encircle the cosmos. From the cosmic egg he made arose Phanes, who first brought light into the void.</p>
           <p>Hellenistic and Roman art often confused Chronos with the Titan Cronus, in part because of the similarity of names and in part because both carry a sickle: one to harvest the grain of the year, the other to cut the seasons themselves. The two should be held distinct: Cronus is a person; Chronos is the river that wears persons away.</p>`,
    meta: { "Source": "Orphic fragments; Pherecydes of Syros", "Consort": "Ananke", "Symbols": "ouroboros · hourglass · the wheel of ages", "Not to be confused with": "Cronus the Titan" }
  },

  eros: {
    cat: "Primordial · Desire",
    name: "Eros", gk: "Ἔρως", roman: "Cupido · Amor",
    body: `<p>The fourth of the firstborn in Hesiod, and the most beautiful — the elemental power of attraction that draws all things into union and so makes generation possible. Without him neither the Titans nor the Olympians could have been begotten; he is what makes a cosmos out of a list of beings.</p>
           <p>The familiar winged boy with bow and arrows is a softening of this older force — a child of Aphrodite by Ares (or by Hermes) who shoots gods and mortals into ill-considered love. His arrows are leaden for refusal, golden for desire; the latter pierced Apollo and started the chase of Daphne.</p>`,
    meta: { "First form": "Primordial; Hesiod Theogony 120", "Later form": "son of Aphrodite", "Symbols": "bow · golden &amp; leaden arrows · torch · pair of wings", "Cult sites": "Thespiae (most famous)" }
  },

  nyx: {
    cat: "Primordial · Night",
    name: "Nyx", gk: "Νύξ", roman: "Nox",
    body: `<p>Night itself, born of Chaos. So old and so dark that Homer makes Zeus alone among the gods afraid to anger her: when in pursuit of Sleep he was about to strike, Sleep took refuge with Nyx, and Zeus drew back rather than affront her.</p>
           <p>By parthenogenesis she bore a long progeny of dark powers: Moros (doom), Ker (violent death), Thanatos and Hypnos, the Oneiroi (dreams), Momus and Oizys, the Hesperides, the Moirai, the Keres, Nemesis, Apate, Philotes, Geras, and Eris. The world's hardest realities are all her daughters.</p>`,
    meta: { "Parents": "Chaos (alone)", "Consort": "Erebus (for some of her offspring)", "Offspring": "Thanatos · Hypnos · Moirai · Nemesis · Eris · &amp;c.", "Sacred to": "Bouporthmos altar at Megara" }
  },

  erebus: {
    cat: "Primordial · Darkness",
    name: "Erebus", gk: "Ἔρεβος", roman: "Scotus",
    body: `<p>The deep, persistent darkness that lies between the surface of the earth and the realm of the dead. Twin and consort of Nyx, by whom he fathered Aether (the bright upper air) and Hemera (Day) — for the first time the cosmos saw light when their children entered it.</p>
           <p>In later usage, Erebus is the dark passage through which souls descend on their way to Hades; not the underworld itself, but the threshold of it. To say <em>he passed into Erebus</em> is a poetic euphemism for <em>he died</em>.</p>`,
    meta: { "Parents": "Chaos (alone)", "Consort": "Nyx", "Offspring": "Aether · Hemera · (and the older brood of Nyx, jointly)", "Symbols": "the lower mist · the unlit lamp" }
  },

  tartarus: {
    cat: "Primordial · Abyss",
    name: "Tartarus", gk: "Τάρταρος", roman: "Tartarus",
    body: `<p>The deepest part of the world: as far beneath Hades, says Hesiod, as the earth is below the sky. A brazen anvil dropped from heaven would fall nine days to reach the earth, and nine more to reach Tartarus. About it Poseidon set walls of bronze and the Hundred-handed stand as guards.</p>
           <p>Here Zeus locked the defeated Titans. Here too came the great offenders — Tantalus, Sisyphus, Ixion, the Danaids — to endure their pointed punishments. Tartarus is also a person: by Gaia he sired Typhon and Echidna, from whose union came the monstrous brood of the bestiary.</p>`,
    meta: { "Parents": "Chaos (alone)", "Consort": "Gaia", "Offspring": "Typhon · Echidna", "As place": "prison of the Titans; the deepest punishment-pit" }
  },

  /* ---------------- TITANS ---------------- */
  cronus: {
    cat: "Titan · Sovereign",
    name: "Cronus", gk: "Κρόνος", roman: "Saturn",
    body: `<p>Youngest of the twelve original Titans, and the one most resented by his father Ouranos. At his mother Gaia's urging he ambushed Ouranos with an adamant sickle and so became lord of the cosmos. By his sister-wife Rhea he had Hestia, Demeter, Hera, Hades, Poseidon, and at last Zeus — but, warned by his parents that a son would supplant him, he swallowed each child as it was born.</p>
           <p>Rhea hid the infant Zeus on Crete and gave Cronus a swaddled stone instead. Grown to manhood, Zeus forced his father to disgorge the swallowed children, and the war of ten years began. Cronus was chained in Tartarus; in some Roman traditions he was later freed and reigned in Elysium over the souls of the blessed. His age was remembered, paradoxically, as a golden one.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Rhea", "Offspring": "Hestia · Demeter · Hera · Hades · Poseidon · Zeus · Chiron", "Symbols": "sickle · scythe · the swaddled stone" }
  },

  rhea: {
    cat: "Titan · Mother of the Olympians",
    name: "Rhea", gk: "Ῥέα", roman: "Ops · Magna Mater",
    body: `<p>Sister-wife of Cronus and mother of the first six Olympians. When she had borne five children and seen them all swallowed, she went to her own mother Gaia and asked counsel; together they hid the newborn Zeus in a cave on Mount Ida (or Mount Dicte) in Crete, where the Curetes clashed their shields to drown out his crying.</p>
           <p>In her later cult she fused with the Anatolian mother-goddess Cybele and was drawn by lions through the forests, her followers in ecstatic procession behind her. The Romans called her Ops, the goddess of abundance — what is poured out into the harvest.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Cronus", "Offspring": "the elder Olympians", "Symbols": "lion-drawn chariot · drum · cypress · turreted crown" }
  },

  oceanus: {
    cat: "Titan · Encircling River",
    name: "Oceanus", gk: "Ὠκεανός", roman: "Oceanus",
    body: `<p>Eldest of the Titans and the great fresh-water river that runs around the disc of the world. Unlike his brothers he took no part in the war against Zeus and was therefore neither chained nor uncrowned; he kept his palace at the world's western edge, where Helios's chariot descends each evening.</p>
           <p>By his sister Tethys he sired three thousand Oceanid daughters (the salt and the salt-mingled streams) and three thousand Potamoi sons (every river that runs on the land). Among the Oceanids: Styx, Doris, Metis, Eurynome, and Clymene — mothers, between them, of much of the Olympian generation.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Tethys", "Offspring": "3000 Oceanids · 3000 Potamoi", "Stance in the Titanomachy": "neutral" }
  },

  tethys: {
    cat: "Titan · Nursing Waters",
    name: "Tethys", gk: "Τηθύς", roman: "Tethys",
    body: `<p>Sister-wife of Oceanus and mother of every freshwater spring. Where her husband is the salt circumference of the world, Tethys is the inland water that feeds field and orchard. Her name is preserved in our planet's geology in the long-vanished Tethys Ocean.</p>
           <p>Hera, the youngest goddess, was fostered for a time at her hearth; for which kindness Hera honoured her always and credited her with rearing her in the modest virtues. Tethys took no public part in mortal affairs; her work is in the world's quiet places.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Oceanus", "Offspring": "the Oceanids &amp; Potamoi", "Notable foster-daughter": "Hera" }
  },

  hyperion: {
    cat: "Titan · Heavenly Light",
    name: "Hyperion", gk: "Ὑπερίων", roman: "Hyperion",
    body: `<p>Titan of light and the patient watcher from above. His very name means <em>he who goes above</em>. By his sister Theia he fathered the three measured lights of the sky — Helios the Sun, Selene the Moon, and Eos the Dawn — and thereby gave to mortals the keeping of time.</p>
           <p>Homer sometimes calls Helios himself <em>Hyperion</em>, by patronymic shortening, so that the father and son are occasionally one figure in the older poetry.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Theia", "Offspring": "Helios · Selene · Eos", "Symbols": "rayed disc · the watchtower" }
  },

  theia: {
    cat: "Titan · Brightness",
    name: "Theia", gk: "Θεία", roman: "Theia",
    body: `<p>The Titaness of shining brightness — of the kind of light by which valuable things are seen to be valuable. Pindar's fifth Isthmian opens with a hymn to her: <em>Mother of the Sun, by whom gold flashes and athletes win their crowns</em>.</p>
           <p>Wife of Hyperion and mother of the heavenly lights, she is the principle by which the eye knows what to admire — the answer, in mythological form, to the question of why some things look precious and others do not.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Hyperion", "Offspring": "Helios · Selene · Eos", "Symbols": "gold · silver · the lit lamp" }
  },

  coeus: {
    cat: "Titan · Intellect",
    name: "Coeus", gk: "Κοῖος", roman: "Coeus · Polus",
    body: `<p>The Titan of resolute intellect and of the celestial pole — the unmoving axis around which the heavens turn. His Roman name <em>Polus</em> preserves this role.</p>
           <p>By his sister Phoebe he had Leto and Asteria, and through Leto his grandchildren are Apollo and Artemis. The cosmic axis is therefore, by marriage, the grandfather of light and of the hunt.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Phoebe", "Offspring": "Leto · Asteria", "Grandchildren": "Apollo · Artemis · Hecate" }
  },

  phoebe: {
    cat: "Titan · Oracular Moon",
    name: "Phoebe", gk: "Φοίβη", roman: "Phoebe",
    body: `<p>Titaness of bright moonlight and of oracular utterance. She was the third holder of the Delphic oracle — after Gaia and Themis — and gave it as a birthday gift to her grandson Apollo, who from her bears the epithet <em>Phoebus</em> Apollo.</p>
           <p>By Coeus she bore Leto, mother of Apollo and Artemis; and Asteria, mother of Hecate. Through this single line the prophetic, the luminous, and the chthonic descend together into the Olympian generation.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Coeus", "Offspring": "Leto · Asteria", "Held": "the Delphic oracle (third in line)" }
  },

  iapetus: {
    cat: "Titan · Mortality",
    name: "Iapetus", gk: "Ἰαπετός", roman: "Iapetus",
    body: `<p>Called <em>the piercer</em>; ancestor, through his children, of the human race. By the Oceanid Clymene he had Atlas, Prometheus, Epimetheus, and Menoetius — the four lines through which the cosmos and mankind are connected.</p>
           <p>He fought against Zeus in the Titanomachy and was cast down with his brothers into Tartarus. But his stamp is upon every mortal: Prometheus made men from clay, and gave them fire; Epimetheus accepted Pandora and her jar; Atlas bore the sky; Menoetius was struck down by a thunderbolt for his hubris.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Clymene (Oceanid)", "Offspring": "Atlas · Prometheus · Epimetheus · Menoetius", "Fate": "Tartarus" }
  },

  crius: {
    cat: "Titan · Constellations",
    name: "Crius", gk: "Κρεῖος", roman: "Crius",
    body: `<p>The least storied of the twelve, given by the lot to the southern quadrant of the sky as Hyperion was given to the eastern. His name connects to <em>krios</em>, the ram, and he is sometimes identified with the constellation Aries.</p>
           <p>By Eurybia he fathered Astraeus (father of the four winds and the stars), Pallas (father of Nike, Bia, Kratos, and Zelos), and Perses (father of Hecate). His grandchildren are therefore a roll-call of the most active personifications.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Eurybia", "Offspring": "Astraeus · Pallas · Perses", "Symbol": "the ram" }
  },

  themis: {
    cat: "Titan · Divine Law",
    name: "Themis", gk: "Θέμις", roman: "Themis · Justitia",
    body: `<p>Personification of divine law and right order — not statute, which is <em>nomos</em>, but the deeper sense of what is fitting. Of the few Titans honoured under the new Olympian regime: she served as second prophet at Delphi, before Apollo, and continued to advise Zeus from her seat beside his throne.</p>
           <p>By Zeus she bore the three Horae (Eunomia, Dike, Eirene — Order, Justice, Peace) and the three Moirai. Her balance, her sword, and her blindfold passed into Roman iconography as Justitia and from there into every modern courthouse.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Zeus (after his marriage to Hera)", "Offspring": "the Horae · the Moirai · Astraea", "Symbols": "balance · sword · blindfold" }
  },

  mnemosyne: {
    cat: "Titan · Memory",
    name: "Mnemosyne", gk: "Μνημοσύνη", roman: "Moneta",
    body: `<p>The personification of memory, and of the well from which the Muses draw. Hesiod tells us that Zeus came to her in Pieria and lay with her for nine successive nights; she bore him the nine Muses, who, born of memory, were the patron goddesses of every art that depended on remembering — epic, lyric, tragedy, history, astronomy.</p>
           <p>In Orphic ritual the initiated dead were instructed: drink from the spring of Mnemosyne, not from the spring of Lethe. To forget is to be lost; to remember is to be saved.</p>`,
    meta: { "Parents": "Ouranos &amp; Gaia", "Consort": "Zeus", "Offspring": "the nine Muses", "Symbols": "spring of memory · folded scroll" }
  },

  prometheus: {
    cat: "Titan · 2nd Generation",
    name: "Prometheus", gk: "Προμηθεύς", roman: "Prometheus",
    body: `<p>Son of Iapetus and brother of Atlas. His name means <em>forethought</em>; his brother's, <em>afterthought</em>. The two of them divided humanity between them, and Prometheus drew the harder lot.</p>
           <p>At Mecone he tricked Zeus into accepting the bones of the sacrificial ox while men kept the meat — for which Zeus took fire from the human race. Prometheus stole it back in a hollow fennel-stalk and gave it again to mortals. Zeus, enraged, chained him to the Caucasus and set an eagle to eat his liver, which regrew each night. After thirty thousand years (or thirteen generations, in another count) Heracles shot the eagle and broke the chain.</p>`,
    meta: { "Parents": "Iapetus &amp; Clymene", "Brothers": "Atlas · Epimetheus · Menoetius", "Gift to mortals": "fire", "Punishment": "the Caucasus; the eagle" }
  },

  atlas: {
    cat: "Titan · 2nd Generation",
    name: "Atlas", gk: "Ἄτλας", roman: "Atlas",
    body: `<p>Son of Iapetus and leader of the Titans in the second half of the war against Zeus. Defeated, he was sentenced not to Tartarus but to a public duty: to stand at the western edge of the world and hold up the vault of the sky upon his shoulders.</p>
           <p>Heracles, passing on the eleventh of his Labors, took the sky upon himself for a while so that Atlas might fetch him the golden apples of the Hesperides — Atlas's own daughters. Atlas, having delivered them, was disinclined to take his burden back; Heracles asked him to hold the sky a moment while he adjusted his cloak, and walked off.</p>`,
    meta: { "Parents": "Iapetus &amp; Clymene", "Daughters": "the Hesperides · the Pleiades · Calypso", "Burden": "the celestial vault", "Stood at": "the western edge of the world" }
  },

  helios: {
    cat: "Titan · Sun",
    name: "Helios", gk: "Ἥλιος", roman: "Sol",
    body: `<p>Son of Hyperion and Theia. Each morning he rises at the eastern gate, mounts his four-horse chariot, and drives across the dome of the sky; at evening he descends into the western Ocean and is borne home along its surface, by a great golden cup the smith Hephaestus made, to begin again.</p>
           <p>He sees everything: it was Helios who told Demeter that Hades had taken Persephone, and Helios who saw Ares and Aphrodite together and brought the news to Hephaestus. His son Phaethon begged once to drive the chariot, and Zeus had to strike the boy down with a thunderbolt before he set the world on fire.</p>`,
    meta: { "Parents": "Hyperion &amp; Theia", "Children": "Phaethon · Circe · Pasiphaë · the Heliades", "Sacred animals": "the rooster; the white horse", "Cult": "Rhodes (the Colossus)" }
  },

  selene: {
    cat: "Titan · Moon",
    name: "Selene", gk: "Σελήνη", roman: "Luna",
    body: `<p>Sister of Helios and Eos. Each night she crosses the sky in a silver chariot drawn by two white horses or, in some accounts, by oxen. Her crown is the crescent.</p>
           <p>She loved the shepherd Endymion of Mount Latmus and asked her father (or Zeus) to grant him whatever he wished. He wished for eternal sleep, immortal and unaging — and so each night she descends to him in his cave and visits him as he sleeps. By him she bore fifty daughters.</p>`,
    meta: { "Parents": "Hyperion &amp; Theia", "Siblings": "Helios · Eos", "Lover": "Endymion", "Symbols": "crescent · two white horses · torch" }
  },

  leto: {
    cat: "Titan · 2nd Generation",
    name: "Leto", gk: "Λητώ", roman: "Latona",
    body: `<p>Daughter of Coeus and Phoebe. Modest, gentle, and of all Zeus's lovers the one Hera pursued most relentlessly. Hera forbade any solid ground to receive her in her labor; only floating Delos, anchored to nothing, was willing — and so on Delos, beneath a palm tree, she bore Apollo and Artemis.</p>
           <p>After the birth, Delos was rooted to the seabed by four diamond pillars in honour of the goddesses, and the island became one of the holiest sanctuaries of the Greek world. Niobe, the Theban queen, boasted she had more children than Leto; Apollo and Artemis killed every one of them with arrows in an afternoon.</p>`,
    meta: { "Parents": "Coeus &amp; Phoebe", "Consort": "Zeus", "Offspring": "Apollo · Artemis", "Sacred to": "Delos · Lycia" }
  },

  /* ---------------- OLYMPIANS ---------------- */
  zeus: {
    cat: "Olympian · King of the Gods",
    name: "Zeus", gk: "Ζεύς", roman: "Jupiter · Iuppiter Optimus Maximus",
    body: `<p>Youngest son of Cronus and Rhea, born on Crete and reared in a cave on Mount Ida by the nymph Amalthea, while the Curetes clashed their shields and bronze spears to mask the sound of his crying. Grown to manhood, he forced his father to disgorge his swallowed brothers and sisters; he allied with the Cyclopes (who forged him his thunderbolts) and the Hundred-handed (who hurled the boulders of the Titanomachy); and after ten years of war he chained the elder gods in Tartarus.</p>
           <p>By lot of his brothers he received the sky. He took as queen his sister Hera, but his marriages and abductions — of Leto, Demeter, Mnemosyne, Themis, Maia, Semele, Europa, Io, Leda, Danaë, Alcmene, Ganymede — produced most of the second-generation gods and the great mortal heroes. His justice is the justice of the storm: sudden, irreversible, often partial. He is the upholder of oaths, the protector of guests and of suppliants, and the only god the others all fear.</p>`,
    meta: { "Parents": "Cronus &amp; Rhea", "Consort": "Hera", "Symbols": "thunderbolt · eagle · oak · aegis · sceptre", "Sacred sites": "Olympia · Dodona · Mount Ida · the Diktaean cave", "Roman": "Jupiter" }
  },

  hera: {
    cat: "Olympian · Queen of the Gods",
    name: "Hera", gk: "Ἥρα", roman: "Juno · Iuno Regina",
    body: `<p>Eldest daughter of Cronus and Rhea, fostered at the Ocean's edge by Tethys, and so the youngest in temperament of the great gods. By the time Zeus wooed her she had grown into the dignity that her cult would honour: matron of the legitimate household, of childbirth in marriage, of the sworn vow between man and woman.</p>
           <p>Zeus came to her in the form of a small and shivering cuckoo, which she warmed against her breast — and the wedding upon Mount Cithaeron lasted three hundred years. The marriage was not happy. Zeus's serial infidelities became the engine of her longest mythic projects: the twelve labors of Heracles were her doing; the trials of Io and of Leto were her work. Her bird is the peacock, in whose tail are set the hundred eyes of her watchman Argus, slain by Hermes.</p>`,
    meta: { "Parents": "Cronus &amp; Rhea", "Consort": "Zeus", "Offspring": "Ares · Hephaestus · Eileithyia · Hebe", "Symbols": "peacock · cuckoo · diadem · pomegranate", "Sacred sites": "Argos · Samos · the Heraion" }
  },

  poseidon: {
    cat: "Olympian · God of the Sea",
    name: "Poseidon", gk: "Ποσειδῶν", roman: "Neptune · Neptunus",
    body: `<p>Brother of Zeus and Hades, and elder of them by lot of the salt sea. He carries the trident the Cyclopes made for him; with it he raises and stills the storm, splits cliffs, and shakes the earth — which is why he is called <em>Ennosigaios</em>, the earth-shaker, and why earthquake-prone shores belong by tradition to him.</p>
           <p>He contended with Athena for the patronage of Athens by striking the rock of the Acropolis with his trident; salt water flowed. She planted the olive, and the citizens chose her. He was thereafter never an entirely well-disposed god toward the city. He raised the storm against Odysseus for blinding his son Polyphemus, and for ten years prevented his return.</p>`,
    meta: { "Parents": "Cronus &amp; Rhea", "Consort": "Amphitrite", "Symbols": "trident · horse · bull · dolphin", "Sacred sites": "Isthmia · Cape Sounion · Helike (lost to him in earthquake)" }
  },

  demeter: {
    cat: "Olympian · Goddess of the Grain",
    name: "Demeter", gk: "Δημήτηρ", roman: "Ceres · Ceres Mater",
    body: `<p>Goddess of the harvest, of the year's grain, of agriculture and of the slow seasonal turn. Her name preserves the older word for mother — <em>De-meter</em>, earth-mother. She is the steady, mourning power on whom all civilised life depends.</p>
           <p>Her daughter Persephone, gathering narcissi in the meadow at Enna, was seen by Hades and snatched into the earth. Demeter searched the world by torchlight, refusing food and rest, until at Eleusis the daughter of the king of that place comforted her; in gratitude she taught the Eleusinians the rites that became the Mysteries, the most august of all Greek initiations. When Helios at last told her what had happened she refused to let any grain grow until her daughter was returned. Hades returned her on the condition that she had eaten nothing in his realm — but she had eaten six pomegranate seeds, and so must spend a third of each year below.</p>`,
    meta: { "Parents": "Cronus &amp; Rhea", "Daughter": "Persephone (by Zeus)", "Symbols": "sheaf of wheat · torch · poppy · piglet", "Sacred to": "Eleusis · Enna · the threshing-floor" }
  },

  athena: {
    cat: "Olympian · Goddess of Wisdom",
    name: "Athena", gk: "Ἀθηνᾶ", roman: "Minerva · Minerva Pallas",
    body: `<p>Daughter of Zeus and the Titaness Metis. Zeus, warned that Metis would bear children mightier than himself, swallowed her whole; the child grew within him until, his head splitting with the pain, Hephaestus took an axe and clove his skull. Out leaped Athena, fully armed, with a war-cry.</p>
           <p>Of all the gods she is the one steadiest with mortals — Odysseus's patron through every shipwreck, Heracles's helper, Perseus's tactician. She loved Athens because Athens loved knowledge; she gave the city the olive in her contest with Poseidon, and from her it took its name. Alone of the Olympians she never married; her epithet <em>Parthenos</em> (the maiden) named the great temple on the Acropolis. The aegis on her breast bears the head of Medusa.</p>`,
    meta: { "Parents": "Zeus &amp; Metis", "Status": "Parthenos — unwed", "Symbols": "owl · olive · aegis · spear · Corinthian helm", "Sacred sites": "Athens (Parthenon, Erechtheion) · Sounion" }
  },

  apollo: {
    cat: "Olympian · God of Music &amp; Prophecy",
    name: "Apollo", gk: "Ἀπόλλων", roman: "Apollo · Phoebus Apollo",
    body: `<p>Son of Zeus and Leto, twin to Artemis, born on the floating island of Delos under a palm tree. As soon as he could walk he set out for Delphi and slew there the great earth-serpent Python, whose oracle (originally Gaia's, then Themis's, then Phoebe's) became his own. From his grandmother Phoebe he took his shining epithet.</p>
           <p>He is the most Greek of the gods — orderly, lucid, capable of plague. His arrows brought the plague upon the Achaean camp at the opening of the Iliad. He flayed Marsyas, who had presumed to challenge him at the flute; he won the lyre from the infant Hermes in exchange for a herd of stolen cattle. His unhappiest love was Daphne, who became a laurel rather than be caught by him; the laurel is therefore his.</p>`,
    meta: { "Parents": "Zeus &amp; Leto", "Twin": "Artemis", "Symbols": "lyre · laurel · bow · raven · tripod · sun-chariot (late)", "Sacred sites": "Delphi · Delos · Didyma · Claros" }
  },

  artemis: {
    cat: "Olympian · Goddess of the Hunt",
    name: "Artemis", gk: "Ἄρτεμις", roman: "Diana · Diana Venatrix",
    body: `<p>Daughter of Zeus and Leto, born first of the twins on Delos and at once the midwife of her brother. At three she sat upon her father's knee and asked of him a bow, a quiver, sixty Oceanid attendants, twenty river-nymphs to keep her hounds, a tunic short enough to run in, all the mountains of the world, and eternal virginity. He gave her all of these.</p>
           <p>She is wild in a way Apollo is not. She killed Orion (out of jealousy, in some accounts; in others, in defence of her virtue); she set the boar upon Calydon; she demanded the sacrifice of Iphigenia at Aulis before the fleet could sail. Actaeon stumbled on her bathing and was changed into a stag and torn apart by his own hounds. Her temple at Ephesus was one of the seven wonders of the ancient world.</p>`,
    meta: { "Parents": "Zeus &amp; Leto", "Status": "Parthenos — unwed", "Symbols": "bow · stag · hound · crescent · short tunic", "Sacred sites": "Ephesus · Brauron · Sparta (Artemis Orthia)" }
  },

  ares: {
    cat: "Olympian · God of War",
    name: "Ares", gk: "Ἄρης", roman: "Mars · Mars Gradivus",
    body: `<p>Son of Zeus and Hera and disliked by both. Where Athena is war's strategy, Ares is its slaughter — the noise, the dust, the lust for harm. The Iliad calls him <em>man-slayer</em> and <em>plague to mortals</em>; even Zeus dismisses him as the most hateful of the gods.</p>
           <p>He took Aphrodite as his lover, and was caught with her in an unbreakable golden net of Hephaestus's making, in which the gathered Olympians laughed at them both. By her he fathered Phobos and Deimos (Terror and Dread, his charioteers), Harmonia (who married Cadmus of Thebes), and Eros (in some accounts). The Romans, who had a different temperament, raised Mars almost to the dignity of Jupiter himself.</p>`,
    meta: { "Parents": "Zeus &amp; Hera", "Consort": "Aphrodite (adulterous)", "Offspring": "Phobos · Deimos · Harmonia · Eros", "Symbols": "spear · shield · vulture · dog", "Sacred to": "Sparta · Thrace · the Areopagus" }
  },

  aphrodite: {
    cat: "Olympian · Goddess of Love",
    name: "Aphrodite", gk: "Ἀφροδίτη", roman: "Venus · Venus Genetrix",
    body: `<p>Hesiod tells that when Cronus severed his father's genitals and cast them into the sea, foam (<em>aphros</em>) gathered around the falling parts and from that foam Aphrodite rose, on a scallop shell, near Cythera and again near Paphos. Homer prefers a quieter genealogy: daughter of Zeus by the Titaness Dione.</p>
           <p>She was married, against her wishes, to Hephaestus, and was unfaithful with Ares. Her gift to the shepherd Paris of the most beautiful woman in the world — Helen — set the Trojan War in motion. Her son Aeneas escaped that war with the surviving Trojans and, in Roman telling, founded Rome; the Julian line claimed her as ancestor. Her bird is the dove; her plant the myrtle; her sea the warm Aegean.</p>`,
    meta: { "Birth": "from sea-foam, near Cythera &amp; Paphos", "Consort": "Hephaestus (forced); lovers Ares, Adonis, Anchises", "Offspring": "Eros · Aeneas · Harmonia · Hermaphroditus", "Symbols": "dove · myrtle · rose · scallop shell", "Sacred sites": "Paphos · Cythera · Mount Eryx" }
  },

  hephaestus: {
    cat: "Olympian · God of the Forge",
    name: "Hephaestus", gk: "Ἥφαιστος", roman: "Vulcan · Vulcanus",
    body: `<p>God of fire, of the forge, and of the patient mastery of bronze and iron. Some say Hera bore him alone, in resentment that Zeus had borne Athena from his head; she found her child lame and cast him from Olympus into the sea, where he was caught and reared by Thetis and the Oceanid Eurynome.</p>
           <p>He returned, in time, with a gift for his mother — a golden throne that bound her fast — and was reconciled to the gods only when Dionysus brought him back drunk on a mule. In his forge under Mount Etna (or on Lemnos) the Cyclopes work his bellows; from it have come the thunderbolts of Zeus, the aegis of Athena, the shield of Achilles, the bronze giant Talos, the chariot of Helios, and Pandora — the first woman.</p>`,
    meta: { "Parents": "Hera (alone) or Zeus &amp; Hera", "Consort": "Aphrodite", "Symbols": "hammer · anvil · tongs · volcano · prosthesis", "Sacred sites": "Lemnos · the Athenian Hephaisteion · Etna" }
  },

  hermes: {
    cat: "Olympian · Messenger of the Gods",
    name: "Hermes", gk: "Ἑρμῆς", roman: "Mercury · Mercurius",
    body: `<p>Son of Zeus and the gentle Maia, born at dawn in a cave on Mount Cyllene. He could not lie still: by noon he had stolen Apollo's cattle and driven them backwards to confuse the trail; by evening he had killed a tortoise, strung its shell with sheep-gut, and invented the lyre; by nightfall he had charmed his furious brother into accepting the lyre in trade for the cattle, and into giving him besides the herald's staff. Thus the youngest Olympian is a thief, a musician, and a peace-broker before his first day is out.</p>
           <p>He is the messenger of Zeus, the patron of travellers, traders, herdsmen, athletes, and thieves; the guide of dreams and of sleep; and, uniquely among the Olympians, the conductor of souls — <em>Psychopompos</em> — across the river to Hades. Where Iris carries word from the gods to mortals, Hermes carries it from gods to gods, and from gods to the dead.</p>`,
    meta: { "Parents": "Zeus &amp; Maia", "Offspring": "Pan · Hermaphroditus · Autolycus", "Office": "messenger; psychopomp; herald", "Symbols": "caduceus · winged sandals · petasos · tortoise", "Sacred sites": "Mount Cyllene · crossroads · the agora" }
  },

  dionysus: {
    cat: "Olympian · God of Wine &amp; Theatre",
    name: "Dionysus", gk: "Διόνυσος", roman: "Bacchus · Bacchus Liber",
    body: `<p>The twice-born. His mother Semele, daughter of Cadmus, was tricked by a disguised Hera into asking Zeus to reveal himself in his full form; she was burned to ash, but Zeus rescued the unborn child and sewed him into his own thigh, from which Dionysus came at term. So he is, in a sense, born of both his parents in succession.</p>
           <p>He wandered the world introducing the vine and the rites that go with it — the ivy-wreathed thyrsus, the panther-drawn chariot, the satyrs and maenads, the night-time torch-procession, and at last, in Athens, the dithyramb and the stage. The Greek theatre is his temple. Where he was resisted — by Pentheus at Thebes, by the daughters of Minyas, by King Lycurgus — the resistance ended badly.</p>`,
    meta: { "Parents": "Zeus &amp; Semele", "Retinue": "satyrs · maenads · Silenus · panthers", "Symbols": "thyrsus · grapevine · ivy · kantharos · panther", "Sacred sites": "Thebes · Naxos · the Theatre of Dionysus, Athens" }
  },

  /* ---------------- PERSONIFICATIONS ---------------- */
  nike: {
    cat: "Personification · Victory",
    name: "Nike", gk: "Νίκη", roman: "Victoria",
    body: `<p>Winged daughter of the Titan Pallas and the river Styx. She and her three siblings — Bia, Kratos, and Zelos (Force, Power, Rivalry) — were the first to side with Zeus in the Titanomachy and ever after stood at his throne.</p>
           <p>She crowns the victor in every contest, military or athletic, with a wreath of olive (at Olympia) or laurel (at Delphi). The Athenians built her a small temple on the Acropolis and worshipped her there as <em>Nike Apteros</em>, the wingless Victory, so that she might never fly away from the city.</p>`,
    meta: { "Parents": "Pallas &amp; Styx", "Siblings": "Bia · Kratos · Zelos", "Symbols": "wings · olive wreath · laurel · palm branch", "Sacred to": "Athens (Nike Apteros temple)" }
  },

  thanatos: {
    cat: "Personification · Death",
    name: "Thanatos", gk: "Θάνατος", roman: "Mors",
    body: `<p>Son of Nyx and twin of Hypnos. He is gentle death — the quiet exit at the appointed hour — as distinct from his sisters the Keres, who feed on violent death in battle, and from his cousin Moros, who is doom in the abstract.</p>
           <p>Sisyphus, the king of Corinth, once chained him when he came to fetch him, so that for a time no mortal could die; Ares had to free him before the war-dead would lie down. He carried Sarpedon's body home to Lycia, in the Iliad, with his brother Hypnos and laid him on his bier.</p>`,
    meta: { "Parents": "Nyx (alone)", "Twin": "Hypnos", "Symbols": "inverted torch · butterfly · sword", "Memorable myth": "chained by Sisyphus" }
  },

  hypnos: {
    cat: "Personification · Sleep",
    name: "Hypnos", gk: "Ὕπνος", roman: "Somnus",
    body: `<p>Twin of Thanatos and the gentlest of Nyx's many children. He lives in a cave on Lemnos through which Lethe flows; about him gather his thousand sons, the Oneiroi, the dreams who each night climb into mortal heads. Three are named: Morpheus, who appears as human; Phobetor, who appears as beast; and Phantasos, who appears as inanimate thing.</p>
           <p>Hera, in the Iliad, asked Hypnos to put Zeus to sleep while she stirred up trouble against the Trojans. He did it twice; the second time Zeus woke furious and would have killed him, but Hypnos took refuge with Nyx, his mother — and even Zeus was afraid to follow.</p>`,
    meta: { "Parents": "Nyx (alone)", "Twin": "Thanatos", "Offspring": "the Oneiroi (Morpheus, Phobetor, Phantasos)", "Symbols": "poppy · horn of dreams · drowsing wings" }
  },

  nemesis: {
    cat: "Personification · Retribution",
    name: "Nemesis", gk: "Νέμεσις", roman: "Invidia · Rivalitas",
    body: `<p>Daughter of Nyx, or in some accounts of Oceanus. She measures unmerited good fortune and dispenses the correction. Where Tyche bestows luck without regard for desert, Nemesis follows behind to set the books straight.</p>
           <p>She had a great sanctuary at Rhamnous in Attica; the marble of her cult statue was a block the Persians had brought ashore to make a victory monument before Marathon. After they lost, the Greeks carved their goddess of comeuppance out of it.</p>`,
    meta: { "Parents": "Nyx (alone)", "Symbols": "wheel · scales · sword · winged", "Sacred to": "Rhamnous in Attica" }
  },

  eris: {
    cat: "Personification · Strife",
    name: "Eris", gk: "Ἔρις", roman: "Discordia",
    body: `<p>Strife, contention, the quarrel that grows in the corner of a gathering. She is the sister of Ares and his companion on the battlefield. Hesiod knew of two Erises: a worse one who breeds war, and a better one who breeds competition — the rivalry that makes the potter throw a finer pot than his neighbour.</p>
           <p>The famous moment is hers: uninvited to the wedding of Peleus and Thetis (the parents of Achilles), she threw among the gathered goddesses a golden apple inscribed <em>for the fairest</em>. Hera, Athena, and Aphrodite each claimed it; Paris, asked to judge, chose Aphrodite; Aphrodite gave him Helen; and the ten years of Troy began.</p>`,
    meta: { "Parents": "Nyx (alone), or Zeus &amp; Hera", "Sibling": "Ares", "Symbols": "the golden apple of discord", "Pivotal in": "the Judgment of Paris &amp; the Trojan War" }
  },

  tyche: {
    cat: "Personification · Fortune",
    name: "Tyche", gk: "Τύχη", roman: "Fortuna",
    body: `<p>The goddess of fortune — of accident, of how a thing happens to fall. She bears the cornucopia of plenty in one hand and the rudder of the world in the other; sometimes she stands upon a wheel, sometimes upon a ball, signifying how easily she rolls away.</p>
           <p>Each Hellenistic city had its own Tyche, crowned with the turreted wall of that city. The most famous statue was the Tyche of Antioch by Eutychides, seated upon a rock with the river Orontes swimming at her feet. As the classical era turned into the Hellenistic, she absorbed more and more of the moral weight that once belonged to the Olympians.</p>`,
    meta: { "Parents": "Oceanus (in Hesiod), Zeus (in later sources)", "Symbols": "cornucopia · rudder · wheel · turreted crown", "Sacred sites": "every Hellenistic city had its own" }
  },

  iris: {
    cat: "Personification · The Rainbow",
    name: "Iris", gk: "Ἶρις", roman: "Iris",
    body: `<p>Daughter of the Titan Thaumas and the Oceanid Electra; sister of the Harpies. She is the rainbow, and where Hermes carries Zeus's word among the gods, Iris carries it from gods to mortals.</p>
           <p>She moves on golden wings between heaven, earth, and the world below, and may fetch water from the river Styx with which the gods swear their unbreakable oaths.</p>`,
    meta: { "Parents": "Thaumas &amp; Electra (Oceanid)", "Sisters": "the Harpies", "Symbols": "rainbow · winged sandals · kerykeion (heraldic staff)" }
  },

  hebe: {
    cat: "Personification · Youth",
    name: "Hebe", gk: "Ἥβη", roman: "Iuventas",
    body: `<p>Daughter of Zeus and Hera, and the personification of youth in full bloom. She poured the nectar of the gods at the Olympian table until Ganymede, the beautiful Trojan prince, was carried up by Zeus's eagle and given the office.</p>
           <p>When Heracles, having died of the centaur Nessus's poisoned tunic, was admitted to Olympus and made a god, Zeus gave him Hebe as wife. She is therefore the divine reward of the greatest mortal labor.</p>`,
    meta: { "Parents": "Zeus &amp; Hera", "Consort": "Heracles (after his apotheosis)", "Office": "cupbearer of the gods, before Ganymede", "Symbols": "wine-cup · ivy · the wings of youth" }
  },

  hecate: {
    cat: "Goddess · Liminal",
    name: "Hecate", gk: "Ἑκάτη", roman: "Trivia",
    body: `<p>Daughter of the Titans Perses and Asteria. The only child of Titans whom Zeus honoured under the new regime: she received from him a portion of every realm — sea, earth, and sky — and the special privilege of being called upon at the start of every sacrifice.</p>
           <p>She is the goddess of crossroads (her Roman name <em>Trivia</em> means <em>three ways</em>), of magic and witchcraft, of necromancy and the moon. She helped Demeter to search for Persephone with torches; she came at the call of Medea. Her statues stood at every Greek doorway and at the meeting of every three roads, three-faced, three-bodied.</p>`,
    meta: { "Parents": "Perses &amp; Asteria", "Symbols": "two torches · three-formed image · the dog · the polecat", "Sacred to": "crossroads · doorways · the dark of the moon" }
  },

  pan: {
    cat: "God · Pastoral",
    name: "Pan", gk: "Πάν", roman: "Faunus · Sylvanus",
    body: `<p>Goat-legged, horned son of Hermes and a nymph (the variants differ). His nurse fled at the sight of him; his father wrapped him in a hare-skin and carried him up to Olympus, where the gods laughed and named him <em>Pan</em> because he delighted them all (<em>pan</em> meaning <em>all</em>).</p>
           <p>He lives in the mountain pastures of Arcadia, sleeps through the noon (do not wake him), pursues nymphs (Syrinx escaped him by becoming the reed of his pipes; Echo refused him and was torn apart), and at evening leads the dance. The panic that empties an army at dusk is his work — sudden, contagious, and reasonless. In late antiquity it was said the Great Pan was dead. He probably is not.</p>`,
    meta: { "Parents": "Hermes &amp; a nymph (var.)", "Symbols": "syrinx (pan-pipes) · goat legs &amp; horns · the wild pine", "Sacred to": "Arcadia · mountain pastures · the noon hour" }
  },

  hades: {
    cat: "God · Lord of the Dead",
    name: "Hades", gk: "Ἅιδης", roman: "Pluto · Dis Pater",
    body: `<p>Brother of Zeus and Poseidon. By lot of the third share he received the world below, and rarely came up from it. He is grave, just, and severe; his name was so unlucky that the Greeks preferred to call him <em>Plouton</em>, the rich one — for in his realm are the seeds that wait to sprout, and the buried metals.</p>
           <p>He carries a great key, the helm of darkness (which the Cyclopes made for him in the Titanomachy and which renders the wearer invisible), and sometimes a bident. His one famous trespass was to seize Persephone, daughter of Demeter, while she gathered narcissi at Enna; the season of the year is the result. He is sometimes counted among the twelve Olympians (in place of Hestia or of Dionysus), but he is by temperament a god apart.</p>`,
    meta: { "Parents": "Cronus &amp; Rhea", "Consort": "Persephone", "Symbols": "helm of darkness · bident · key · cypress · the chthonic narcissus", "Realm": "the world below, Erebus, Tartarus" }
  },

  persephone: {
    cat: "Goddess · Chthonic",
    name: "Persephone", gk: "Περσεφόνη", roman: "Proserpina · Kore",
    body: `<p>Daughter of Demeter and Zeus, called also <em>Kore</em>, the Maiden. She was gathering narcissi in the meadow at Enna when the earth opened and Hades drew her down in his chariot. Her mother's grief left the world barren until Zeus intervened.</p>
           <p>But Hades, before letting her go, gave her pomegranate seeds to eat — six of them — and so she was bound to spend a third of each year below. Her descent is winter; her return is spring. As queen of the underworld she is no longer the abducted girl: she sits beside Hades in her own dignity, judges the dead, and grants safe passage (or not) to the great travellers — Orpheus, Heracles, Theseus.</p>`,
    meta: { "Parents": "Zeus &amp; Demeter", "Consort": "Hades", "Symbols": "pomegranate · narcissus · torch · sheaf · sceptre", "Sacred to": "Eleusis · Locri · Enna" }
  },

  eos: {
    cat: "Personification · Dawn",
    name: "Eos", gk: "Ἠώς", roman: "Aurora",
    body: `<p>Daughter of Hyperion and Theia, sister of Helios and Selene. Each morning she rises from her bed in Oceanus in saffron robes, mounts a chariot drawn by two horses, and ascends to announce her brother. The pink that precedes sunrise is her colour.</p>
           <p>Aphrodite, jealous because Eos had bedded Ares, cursed her with insatiable desire for mortal men. She loved Tithonus of Troy and begged Zeus to give him immortality; she forgot to ask for his youth, and he aged without end. He shrivelled into the chirping cicada at last.</p>`,
    meta: { "Parents": "Hyperion &amp; Theia", "Lovers": "Tithonus · Cephalus · Orion", "Offspring": "Memnon · the four Anemoi (winds)", "Symbols": "saffron robe · rose · two horses" }
  },

  moirai: {
    cat: "Personifications · the Three Fates",
    name: "The Moirai", gk: "Μοῖραι", roman: "Parcae · Fata",
    body: `<p>Daughters (in Hesiod) of Nyx alone, or (later) of Zeus and Themis. Three sisters: Clotho the spinner, who draws the thread of each mortal life from her distaff; Lachesis the allotter, who measures it out with her rod; and Atropos, the inflexible, who cuts it with her shears.</p>
           <p>Their decree is the deepest in the order of things — older, in some accounts, than the gods themselves; even Zeus must defer to them. The Iliad sometimes credits a particular Moira to a particular man (his <em>moira</em>, his portion); but in the end the three speak together, and what they appoint cannot be undone.</p>`,
    meta: { "Parents": "Nyx (alone), or Zeus &amp; Themis", "The three": "Clotho (spinner) · Lachesis (measurer) · Atropos (cutter)", "Symbols": "thread · distaff · scroll · shears", "Even Zeus": "defers to them" }
  },

  ananke: {
    cat: "Personification · Necessity",
    name: "Ananke", gk: "Ἀνάγκη", roman: "Necessitas",
    body: `<p>In the Orphic cosmogony, Ananke arose at the very beginning, twined around the cosmic egg with her consort Chronos, her arms encircling all of being. She is necessity — what must be — and is older than the gods. Plato puts her at the centre of the cosmos, holding the spindle on which the heavens turn.</p>
           <p>Her daughters in some accounts are the Moirai themselves: necessity gives birth to fate. She is rarely depicted, almost never worshipped, and never propitiated. There is no point.</p>`,
    meta: { "Source": "Orphic; Plato, Republic X (Myth of Er)", "Consort": "Chronos", "Offspring": "the Moirai (in some accounts)", "Symbols": "the spindle of the world · iron bands" }
  },

  "phobos-deimos": {
    cat: "Personifications · Terror &amp; Dread",
    name: "Phobos &amp; Deimos", gk: "Φόβος &amp; Δεῖμος", roman: "Pavor · Metus",
    body: `<p>Twin sons of Ares and Aphrodite. Phobos is panic-rout, the terror that empties the ranks; Deimos is dread, the slower fear that gathers in the breast before the battle is joined. They drive their father's chariot and clear the field of resolve before he himself joins the fight.</p>
           <p>Their faces are emblazoned upon the shields of warriors in Homer — chiefly upon Heracles's, in the <em>Shield</em> attributed to Hesiod. The two moons of the planet Mars are named after them.</p>`,
    meta: { "Parents": "Ares &amp; Aphrodite", "Roles": "Phobos — panic-rout · Deimos — slow dread", "Symbols": "the lion-faced shield · the war-chariot", "Heraldic": "appear on the shields of warriors" }
  },

  /* ---------------- BESTIARY ---------------- */
  pegasus: {
    cat: "Bestiary · Winged Horse",
    name: "Pegasus", gk: "Πήγασος", roman: "Pegasus",
    body: `<p>Sprang from the neck of Medusa when Perseus severed her head; his brother Chrysaor, the man with the golden sword, sprang with him. He flew at once to Olympus, where he became the bearer of Zeus's thunderbolt.</p>
           <p>Bellerophon tamed him with a golden bridle that Athena gave him in a dream, and on his back slew the Chimera. Later, growing proud, Bellerophon tried to fly to Olympus on him; Zeus sent a gadfly, Pegasus threw him, and Bellerophon fell to limp out his days in disgrace. Pegasus stayed on the mountain.</p>`,
    meta: { "Born of": "Medusa &amp; Poseidon", "Brother": "Chrysaor", "Riders": "Bellerophon (against the Chimera)", "Now": "constellation; bearer of the thunderbolt" }
  },

  minotaur: {
    cat: "Bestiary · Cretan",
    name: "Minotaur", gk: "Μῑνώταυρος", roman: "Minotaurus",
    body: `<p>Son of Pasiphaë, queen of Crete, and a magnificent white bull sent by Poseidon. Minos had been meant to sacrifice the bull; he kept it. In revenge Poseidon caused Pasiphaë to lust after it, and from that union came the bull-headed Minotaur.</p>
           <p>Minos commissioned Daedalus to build the Labyrinth beneath the palace at Knossos, in which the creature was hidden. Every nine years (or every year, in some accounts) seven Athenian youths and seven maidens were sent in as tribute; Theseus, on the third tribute, slew the Minotaur and, by Ariadne's thread, found his way back out.</p>`,
    meta: { "Parents": "Pasiphaë &amp; the Cretan Bull", "Born of": "Poseidon's revenge on Minos", "Built for him": "the Labyrinth (by Daedalus)", "Slain by": "Theseus, by Ariadne's thread" }
  },

  hydra: {
    cat: "Bestiary · Lernaean",
    name: "Lernaean Hydra", gk: "Λερναία Ὕδρα", roman: "Hydra Lernaea",
    body: `<p>Nine-headed water-serpent of the marsh of Lerna, child of Typhon and Echidna. For each head Heracles severed, two regrew — until his nephew Iolaus brought a torch and seared each stump as it was cut.</p>
           <p>The middle head was immortal; Heracles buried it under a great rock by the road to Elaeus, where (it was said) it remained, hissing under its stone. He dipped his arrows in the Hydra's bile, which gave them the property of inflicting wounds that could not heal — and which would prove, much later, the means of his own death.</p>`,
    meta: { "Parents": "Typhon &amp; Echidna", "Slain by": "Heracles &amp; Iolaus (Second Labor)", "Aftermath": "her bile poisoned Heracles's arrows; her shell became the constellation Hydra" }
  },

  chimera: {
    cat: "Bestiary · Lycian",
    name: "Chimera", gk: "Χίμαιρα", roman: "Chimaera",
    body: `<p>A creature with the body and head of a lion, a goat's head rising from her back, and a serpent for a tail; breather of fire. Child of Typhon and Echidna, sister of the Hydra and of Cerberus.</p>
           <p>She ravaged Lycia until King Iobates set Bellerophon, mounted on Pegasus, against her. Bellerophon thrust a lead-tipped spear into her throat; the lead, melted by her own breath, ran down her gullet and choked her.</p>`,
    meta: { "Parents": "Typhon &amp; Echidna", "Form": "lion-fore · goat-back · serpent-tail", "Slain by": "Bellerophon, mounted on Pegasus", "Country": "Lycia" }
  },

  cerberus: {
    cat: "Bestiary · Hellhound",
    name: "Cerberus", gk: "Κέρβερος", roman: "Cerberus",
    body: `<p>Three-headed hound at the gates of Hades, child of Typhon and Echidna. He fawns on those who enter and devours those who try to leave.</p>
           <p>Heracles, in his twelfth and last labor, descended to the underworld and asked Hades for the dog. Hades consented, on condition that he take him without weapons; Heracles wrestled him into submission, dragged him into the light of day, presented him to Eurystheus (who hid in his great jar in terror), and returned him. The drool that fell from his three jaws on the way back gave rise, where it touched the earth, to aconite.</p>`,
    meta: { "Parents": "Typhon &amp; Echidna", "Office": "watchdog at the gates of Hades", "Captured by": "Heracles (Twelfth Labor)", "From his spittle": "the plant aconite" }
  },

  sphinx: {
    cat: "Bestiary · Theban",
    name: "Sphinx", gk: "Σφίγξ", roman: "Sphinx",
    body: `<p>Body of a lion, face of a woman, wings of an eagle; child of Typhon and Echidna (or, by Hera's hand, set there as a plague upon Thebes). She crouched on a rock outside the city and put her riddle to every traveller: <em>what walks on four legs in the morning, two at noon, three in the evening?</em></p>
           <p>Every traveller failed and was devoured, until Oedipus said <em>man</em> — who crawls in infancy, walks upright in his prime, and leans on a staff in age. The Sphinx threw herself from her rock and died. Oedipus entered Thebes, was made king, and married the queen who turned out to be his mother.</p>`,
    meta: { "Parents": "Typhon &amp; Echidna (or Orthrus &amp; Echidna)", "Set upon Thebes by": "Hera", "Riddle solved by": "Oedipus", "Form": "lion-bodied, woman-faced, winged" }
  },

  medusa: {
    cat: "Bestiary · Gorgon",
    name: "Medusa", gk: "Μέδουσα", roman: "Medusa",
    body: `<p>One of the three Gorgons, daughters of the sea-deities Phorcys and Ceto; alone of the three, mortal. In one telling, she was once a beautiful priestess of Athena, raped by Poseidon in the goddess's temple; Athena, unable to punish Poseidon, turned the priestess into a snake-haired terror whose look turned men to stone.</p>
           <p>Perseus, sent by Polydectes to fetch her head, was given winged sandals by Hermes, a polished shield by Athena, the helm of darkness by Hades, and a curved sword. Looking only at her reflection in the shield, he struck off her head; from the bleeding neck sprang Pegasus and Chrysaor. He gave the head to Athena, who set it on her aegis.</p>`,
    meta: { "Parents": "Phorcys &amp; Ceto", "Sisters": "Stheno &amp; Euryale (immortal)", "Slain by": "Perseus", "From her neck": "Pegasus &amp; Chrysaor" }
  },

  cyclops: {
    cat: "Bestiary · One-eyed Giants",
    name: "Cyclopes", gk: "Κύκλωπες", roman: "Cyclopes",
    body: `<p>Three brothers — Brontes (thunder), Steropes (lightning), and Arges (brightness) — sons of Ouranos and Gaia. Imprisoned by Cronus and freed by Zeus before the Titanomachy. In gratitude they forged for Zeus his thunderbolts, for Poseidon his trident, and for Hades his helm of darkness.</p>
           <p>A later, savage breed of Cyclopes dwelt in Sicily, herding sheep and keeping no laws. One of these was Polyphemus, son of Poseidon, whom Odysseus and his crew blinded with a sharpened stake in the cave from which they could not otherwise escape. Polyphemus's curse on Odysseus is what kept the hero ten years from home.</p>`,
    meta: { "First kind": "Brontes · Steropes · Arges — forgers of the thunderbolt", "Later kind": "Sicilian shepherds (Polyphemus the chief)", "Parents (first kind)": "Ouranos &amp; Gaia" }
  },

  centaur: {
    cat: "Bestiary · Thessalian",
    name: "Centaurs", gk: "Κένταυροι", roman: "Centauri",
    body: `<p>Half-man, half-horse, born of the rash king Ixion's lust for Hera. Zeus, suspecting him, made a cloud (Nephele) in Hera's shape; from Ixion's union with the cloud came the first Centaur, whose own offspring with the wild mares of Magnesia bred the race.</p>
           <p>Most were drunken and violent: invited to the wedding of Pirithous and Hippodamia, they tried to carry off the bride, and the long battle with the Lapiths that followed is sculpted on the Parthenon and on the temple of Zeus at Olympia. Two were different: Chiron, son of Cronus by an Oceanid, was the wisest tutor of his age — teacher of Achilles, Asclepius, Jason, Heracles — and Pholos was his courteous friend.</p>`,
    meta: { "Origin": "Ixion &amp; Nephele (the cloud)", "Notable conflict": "the Centauromachy (wedding of Pirithous)", "Wise exception": "Chiron, tutor of heroes", "Region": "Thessaly" }
  },

  harpy: {
    cat: "Bestiary · Winged Snatchers",
    name: "Harpies", gk: "Ἅρπυιαι", roman: "Harpyiae",
    body: `<p>Daughters of the Titan Thaumas and the Oceanid Electra; sisters of Iris. Originally they may have been the personifications of sudden storm-winds — the gust that snatches a cloak or a child. Hesiod names two, Aello (storm-swift) and Ocypete (swift-flying); later sources add Celaeno (dark).</p>
           <p>Their most famous appearance is at the table of the blind seer Phineus, whom Zeus punished for misuse of his gift of prophecy: each time food was set before him the Harpies snatched it away or defiled it. The Argonauts, on their voyage, drove them off; Calais and Zetes, the winged sons of the North Wind, pursued them to the Strophades.</p>`,
    meta: { "Parents": "Thaumas &amp; Electra (Oceanid)", "Sister": "Iris", "Named": "Aello · Ocypete · (Celaeno)", "Tormented": "blind Phineus, until the Boreads drove them off" }
  },

  typhon: {
    cat: "Bestiary · Serpent of Storms",
    name: "Typhon", gk: "Τυφῶν", roman: "Typhoeus",
    body: `<p>Last and worst child of Gaia, conceived in her rage at the fall of the Titans. Of immense size, his shoulders touched the stars and his arms reached east and west; from his thighs downward he was a coil of vipers; from each shoulder rose a hundred serpent-heads, each speaking with a different voice — sometimes the voices of gods, sometimes of beasts.</p>
           <p>He almost overthrew Zeus. The gods fled to Egypt and disguised themselves as animals (which the Greeks said was why the Egyptians worshipped beast-headed gods). At last Zeus rallied, struck him with a hundred thunderbolts, and pinned him beneath Mount Etna, whose eruptions are his struggling and whose tremors are his breath. By Echidna he had fathered the great brood of monsters.</p>`,
    meta: { "Parents": "Gaia &amp; Tartarus", "Consort": "Echidna", "Offspring": "Cerberus · Hydra · Chimera · Sphinx · Orthrus · the Nemean Lion", "Pinned beneath": "Mount Etna" }
  },

  echidna: {
    cat: "Bestiary · Mother of Monsters",
    name: "Echidna", gk: "Ἔχιδνα", roman: "Echidna",
    body: `<p>Half-woman, half-serpent, who dwells in a cave below the earth, deathless and unageing. Hesiod calls her <em>fierce Echidna of the speckled skin</em>. Her parentage is disputed — daughter of Phorcys and Ceto, or of Tartarus and Gaia.</p>
           <p>Bride of Typhon, mother of most of the great bestiary: the Nemean Lion, the Lernaean Hydra, the Chimera, the hellhound Cerberus, Orthrus the two-headed dog, the Sphinx, and (in some sources) the Caucasian Eagle that fed on Prometheus. Heracles, in the course of his Labors, killed most of her children; she herself was spared, and is somewhere still.</p>`,
    meta: { "Parents": "(disputed) Phorcys &amp; Ceto · Tartarus &amp; Gaia", "Consort": "Typhon", "Offspring": "Cerberus · Hydra · Chimera · Sphinx · Orthrus · Nemean Lion", "Dwelling": "a cave below the earth" }
  },

};
