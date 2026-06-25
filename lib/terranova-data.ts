export const LINKS = {
  curseforge: "https://www.curseforge.com/minecraft-bedrock/addons/terranova",
  discord: "https://discord.gg/",
}

export type Lang = "en" | "pt"

/** A localized string with English (default) and Portuguese variants. */
export type LS = { en: string; pt: string }

/** Pick the right variant for the active language. */
export function pick(value: LS, lang: Lang): string {
  return value[lang]
}

export type BadgeType = "survival" | "creative" | "passive" | "wip"

type BadgeRaw = { label: LS; className: string }

const BADGES_RAW: Record<BadgeType, BadgeRaw> = {
  survival: {
    label: { en: "Survival", pt: "Sobrevivência" },
    className: "border-ember-green/50 text-ember-green bg-ember-green/15",
  },
  creative: {
    label: { en: "Creative only", pt: "Só Criativo" },
    className: "border-ember-red/50 text-ember-red bg-ember-red/15",
  },
  passive: {
    label: { en: "Passive", pt: "Passivo" },
    className: "border-info-blue/50 text-info-blue bg-info-blue/15",
  },
  wip: {
    label: { en: "Work in progress", pt: "Em desenvolvimento" },
    className: "border-gold/50 text-gold bg-gold/15",
  },
}

export type Badge = { label: string; className: string }

export function getBadge(type: BadgeType, lang: Lang): Badge {
  const b = BADGES_RAW[type]
  return { label: b.label[lang], className: b.className }
}

/* ---------------- Creatures ---------------- */

export type CreatureRow = { label: string; value: string }
export type Creature = {
  name: string
  badges: BadgeType[]
  summary: string
  rows: CreatureRow[]
  warning?: string
}

type CreatureRaw = {
  name: string
  badges: BadgeType[]
  summary: LS
  rows: { label: LS; value: LS }[]
  warning?: LS
}

const CREATURES_RAW: CreatureRaw[] = [
  {
    name: "Dracon",
    badges: ["survival"],
    summary: {
      en: "The great reptile of the arcane sands — an acid-spitting flying mount.",
      pt: "O grande réptil das areias arcanas, montaria voadora cuspidora de ácido.",
    },
    rows: [
      {
        label: { en: "Spawns in", pt: "Surge em" },
        value: {
          en: "Arcane Desert — rarely, on sand/sandstone, light level 7+",
          pt: "Deserto Arcano — raramente, em areia/arenito, nível de luz 7+",
        },
      },
      {
        label: { en: "Variants", pt: "Variantes" },
        value: {
          en: "Dracoryth (75%) / Virelayn (25%) — Sunscale, Dusksand, Pineclaw, Veilshade",
          pt: "Dracoryth (75%) / Virelayn (25%) — Sunscale, Dusksand, Pineclaw, Veilshade",
        },
      },
      {
        label: { en: "Taming", pt: "Domar" },
        value: {
          en: "Newborn hatchling → any raw meat (1/3 chance per feeding). Wild hatchling → requires Draconic Crumble.",
          pt: "Filhote recém-nascido → qualquer carne crua (1/3 de chance por alimentação). Filhote selvagem → exige Draconic Crumble.",
        },
      },
      {
        label: { en: "Drops", pt: "Drops" },
        value: {
          en: "Dracon Bone · Bone Shard · Dracon Scute · Dracon Skull (10%) · Dracon Leather",
          pt: "Dracon Bone · Bone Shard · Dracon Scute · Dracon Skull (10%) · Dracon Leather",
        },
      },
      {
        label: { en: "Riding", pt: "Montaria" },
        value: {
          en: "Equip the Draconic Saddle. Look 22.5°+ upward to fly. Jump while riding = acid spit.",
          pt: "Equipe a Draconic Saddle. Olhe 22,5°+ para cima para voar. Pular cavalgando = cuspe de ácido.",
        },
      },
      {
        label: { en: "Armour", pt: "Armadura" },
        value: {
          en: "Interact to equip the Dracon Armour. Remove with shears. Only the owner can interact.",
          pt: "Interaja para equipar a Dracon Armour. Remova com tesoura. Só o dono interage.",
        },
      },
    ],
    warning: {
      en: "Adults may drop nothing in some versions.",
      pt: "Adultos podem dropar nada em algumas versões.",
    },
  },
  {
    name: "Maragon",
    badges: ["survival"],
    summary: {
      en: "Aquatic reptile that charges on land and devastates enemies underwater.",
      pt: "Réptil aquático que avança em terra e devasta inimigos debaixo d'água.",
    },
    rows: [
      {
        label: { en: "Spawns in", pt: "Surge em" },
        value: {
          en: "Ocean biomes (except frozen or warm)",
          pt: "Biomas de oceano (exceto congelados ou quentes)",
        },
      },
      {
        label: { en: "Taming", pt: "Domar" },
        value: {
          en: "Babies only — Draconic Crumble + any raw or cooked ammonite",
          pt: "Apenas filhotes — Draconic Crumble + qualquer amonita crua ou cozida",
        },
      },
      {
        label: { en: "Drops", pt: "Drops" },
        value: {
          en: "Maragon Bone · Bone Shard · Scales · Leather · Osteoderm · Broken Mandible",
          pt: "Maragon Bone · Bone Shard · Scales · Leather · Osteoderm · Broken Mandible",
        },
      },
      {
        label: { en: "Riding", pt: "Montaria" },
        value: {
          en: "Maragon Saddle. Can dash on land. Bone arrows deal extra damage underwater.",
          pt: "Maragon Saddle. Pode dar dash em terra. Flechas de osso causam dano extra na água.",
        },
      },
      {
        label: { en: "Chest", pt: "Baú" },
        value: { en: "Equippable for storage.", pt: "Equipável para armazenamento." },
      },
      {
        label: { en: "Control", pt: "Controle" },
        value: {
          en: "Use the Draconic Horn from afar to command. Has a home-position system.",
          pt: "Use a Draconic Horn à distância para comandar. Possui sistema de posição base (home).",
        },
      },
    ],
    warning: {
      en: "Baby Maragons can drown — keep them in a half-slab with water.",
      pt: "Maragons bebês podem se afogar — mantenha em meia-laje com água.",
    },
  },
  {
    name: "Fire Dragon",
    badges: ["creative", "wip"],
    summary: {
      en: "The fire dragon is not yet available in survival. In development.",
      pt: "O dragão de fogo ainda não está disponível na sobrevivência. Em desenvolvimento.",
    },
    rows: [
      {
        label: { en: "Status", pt: "Status" },
        value: {
          en: "Not yet available in survival. The solo dev (KyuuDesperation) is in college — work in progress.",
          pt: "Ainda não disponível na sobrevivência. Dev solo (KyuuDesperation) está na faculdade — em progresso.",
        },
      },
      {
        label: { en: "Taming", pt: "Domar" },
        value: {
          en: "Babies only. Must be tamed + full health to grow, or wild in creative.",
          pt: "Apenas filhotes. Precisa estar domado + vida cheia para crescer, ou selvagem no criativo.",
        },
      },
      {
        label: { en: "Growth", pt: "Crescimento" },
        value: {
          en: "Baby → Adult: 5h | Juvenile → Adult: 2.5h. Needs a LOT of meat.",
          pt: "Bebê → Adulto: 5h | Juvenil → Adulto: 2,5h. Precisa de MUITA carne.",
        },
      },
      {
        label: { en: "Drops (creative)", pt: "Drops (criativo)" },
        value: {
          en: "Fire Dragon Bones · Scales · Osteoderms · Steel · Eggs",
          pt: "Fire Dragon Bones · Scales · Osteoderms · Steel · Eggs",
        },
      },
      {
        label: { en: "Control", pt: "Controle" },
        value: {
          en: "Drakonetian Horn (forged with fire dragon materials + steel + leather).",
          pt: "Drakonetian Horn (forjada com materiais de dragão de fogo + steel + couro).",
        },
      },
    ],
    warning: {
      en: 'TRAP: interacting with Sacrificed Flesh shows "Tame", but makes the dragon hostile and permanently untameable.',
      pt: 'ARMADILHA: interagir com Sacrificed Flesh mostra "Tame", mas torna o dragão hostil e indomável permanentemente.',
    },
  },
  {
    name: "Direwolf",
    badges: ["survival"],
    summary: {
      en: "Giant wolf with updated textures and models.",
      pt: "Lobo gigante com texturas e modelos atualizados.",
    },
    rows: [
      {
        label: { en: "Taming", pt: "Domar" },
        value: { en: "Deer Skulls", pt: "Deer Skulls (caveiras de cervo)" },
      },
      {
        label: { en: "Notes", pt: "Notas" },
        value: {
          en: "New textures and models. The pup has a unique model. Tamed ones wear collars.",
          pt: "Texturas e modelos novos. Filhote tem modelo único. Os domados usam coleiras.",
        },
      },
    ],
  },
  {
    name: "Ammonite",
    badges: ["passive"],
    summary: {
      en: "Prehistoric cephalopod, the Maragons' main food source.",
      pt: "Cefalópode pré-histórico, alimento principal dos Maragons.",
    },
    rows: [
      {
        label: { en: "Spawns in", pt: "Surge em" },
        value: {
          en: "Any ocean biome with seagrass. More common than the nautilus. Grows over time.",
          pt: "Qualquer bioma de oceano com seagrass. Mais comum que o nautilus. Cresce com o tempo.",
        },
      },
      {
        label: { en: "Drops", pt: "Drops" },
        value: {
          en: "Raw ammonite · Shelled ammonite (eat to recover the shell)",
          pt: "Amonita crua · Amonita com casca (coma para recuperar a casca)",
        },
      },
      {
        label: { en: "Notes", pt: "Notas" },
        value: {
          en: "Adults fight back. The ammonite shell is an alternative to the conduit.",
          pt: "Adultos revidam. A casca de amonita é alternativa ao conduíte.",
        },
      },
    ],
  },
  {
    name: "Oukelaphos",
    badges: ["passive"],
    summary: {
      en: "Solitary woodland creature, source of Sacrificed Flesh.",
      pt: "Criatura solitária das matas, fonte de Sacrificed Flesh.",
    },
    rows: [
      {
        label: { en: "Spawns in", pt: "Surge em" },
        value: {
          en: "Same biomes as deer, but alone, at light level 0–7",
          pt: "Mesmos biomas dos cervos, mas sozinho, em nível de luz 0–7",
        },
      },
      {
        label: { en: "Drops", pt: "Drops" },
        value: {
          en: "Sacrificed Flesh (5%: Deer Skull, 5%: Raw Essentia Magic)",
          pt: "Sacrificed Flesh (5%: Deer Skull, 5%: Raw Essentia Magic)",
        },
      },
    ],
  },
]

export function getCreatures(lang: Lang): Creature[] {
  return CREATURES_RAW.map((c) => ({
    name: c.name,
    badges: c.badges,
    summary: c.summary[lang],
    rows: c.rows.map((r) => ({ label: r.label[lang], value: r.value[lang] })),
    warning: c.warning ? c.warning[lang] : undefined,
  }))
}

/* ---------------- Biomes ---------------- */

export type Biome = { name: string; near: string; resources: string[] }
type BiomeRaw = { name: LS; near: LS; resources: LS[] }

const BIOMES_RAW: BiomeRaw[] = [
  {
    name: { en: "Arcane Desert", pt: "Deserto Arcano" },
    near: { en: "Deserts", pt: "Desertos" },
    resources: [
      { en: "Arcane sand", pt: "Areia arcana" },
      { en: "Scarabs", pt: "Escaravelhos" },
      { en: "Dracon spawn", pt: "Spawn de Dracon" },
    ],
  },
  {
    name: { en: "Great Velanidia Forest", pt: "Grande Floresta de Velanidia" },
    near: { en: "Forests (rare)", pt: "Florestas (raro)" },
    resources: [
      { en: "Silver", pt: "Prata" },
      { en: "Gold", pt: "Ouro" },
      { en: "Mythrilite (high Y)", pt: "Mythrilite (Y alto)" },
    ],
  },
  {
    name: { en: "Velanidia Forest", pt: "Floresta de Velanidia" },
    near: { en: "Forests (rare)", pt: "Florestas (raro)" },
    resources: [
      { en: "Silver", pt: "Prata" },
      { en: "Gold", pt: "Ouro" },
    ],
  },
  {
    name: { en: "Mulberry Forest", pt: "Floresta de Amoreiras" },
    near: { en: "Jungles", pt: "Selvas" },
    resources: [
      { en: "Mulberry trees", pt: "Árvores de amora" },
      { en: "Silk moths", pt: "Mariposas-da-seda" },
    ],
  },
  {
    name: { en: "Volcanic Fields", pt: "Campos Vulcânicos" },
    near: { en: "Savanna / Badlands", pt: "Savana / Badlands" },
    resources: [
      { en: "Galena", pt: "Galena" },
      { en: "Gold", pt: "Ouro" },
      { en: "Sulfur", pt: "Enxofre" },
    ],
  },
  {
    name: { en: "Prairie", pt: "Pradaria" },
    near: { en: "Plains", pt: "Planícies" },
    resources: [{ en: "Coal", pt: "Carvão" }],
  },
  {
    name: { en: "Shrubland", pt: "Matagal" },
    near: { en: "Plains / Forests", pt: "Planícies / Florestas" },
    resources: [{ en: "Bauxite", pt: "Bauxita" }],
  },
  {
    name: { en: "Marsh", pt: "Pântano (Marsh)" },
    near: { en: "Swamps", pt: "Pântanos" },
    resources: [
      { en: "Wild wheat", pt: "Trigo selvagem" },
      { en: "No trees", pt: "Sem árvores" },
      { en: "No animals", pt: "Sem animais" },
    ],
  },
  {
    name: { en: "Coniferous Forest", pt: "Floresta de Coníferas" },
    near: { en: "Taigas", pt: "Taigas" },
    resources: [{ en: "—", pt: "—" }],
  },
  {
    name: { en: "Deciduous Forest", pt: "Floresta Decídua" },
    near: { en: "Forests", pt: "Florestas" },
    resources: [{ en: "—", pt: "—" }],
  },
]

export function getBiomes(lang: Lang): Biome[] {
  return BIOMES_RAW.map((b) => ({
    name: b.name[lang],
    near: b.near[lang],
    resources: b.resources.map((r) => r[lang]),
  }))
}

/* ---------------- Items ---------------- */

export type ItemCategory = "taming" | "riding" | "command" | "armour" | "danger" | "crafting" | "weapon" | "siege" | "ammo"

export type Item = { name: string; category: string; categoryKey: ItemCategory; description: string }
type ItemRaw = { name: string; categoryKey: ItemCategory; description: LS }

const CATEGORY_LABELS: Record<ItemCategory, LS> = {
  taming: { en: "Taming", pt: "Domar" },
  riding: { en: "Riding", pt: "Montaria" },
  command: { en: "Command", pt: "Comando" },
  armour: { en: "Armour", pt: "Armadura" },
  danger: { en: "Danger", pt: "Perigo" },
  crafting: { en: "Crafting", pt: "Criação" },
  weapon: { en: "Weapon", pt: "Arma" },
  siege: { en: "Siege", pt: "Cerco" },
  ammo: { en: "Ammo", pt: "Munição" },
}

const ITEMS_RAW: ItemRaw[] = [
  {
    name: "Draconic Crumble",
    categoryKey: "taming",
    description: {
      en: "Tames wild Draconlings and baby Maragons. Forged with Dracon/Dracan bone shards. (Drops may be buggy in some versions — check the in-game recipe book.)",
      pt: "Doma Draconlings selvagens e Maragons bebês. Forjado com fragmentos de osso de Dracon/Dracan. (Drops podem estar bugados em algumas versões — confira o livro de receitas no jogo.)",
    },
  },
  {
    name: "Draconic Saddle",
    categoryKey: "riding",
    description: {
      en: "Required to ride adult Dracons. Forged with draconian bone shards + materials.",
      pt: "Necessária para cavalgar Dracons adultos. Forjada com fragmentos de osso draconiano + materiais.",
    },
  },
  {
    name: "Draconic Horn",
    categoryKey: "command",
    description: {
      en: "Commands tamed Maragons and dragons from afar. Can interact or be used at range.",
      pt: "Comanda Maragons e dragões domados à distância. Pode interagir ou usar de longe.",
    },
  },
  {
    name: "Drakonetian Horn",
    categoryKey: "command",
    description: {
      en: "Specifically commands Fire Dragons. Forged with fire dragon materials + steel + leather.",
      pt: "Comanda especificamente os Fire Dragons. Forjada com materiais de dragão de fogo + steel + couro.",
    },
  },
  {
    name: "Dracon Skull",
    categoryKey: "armour",
    description: {
      en: "10% drop from adult Dracons. Wearing it hides the player from locator maps.",
      pt: "Drop de 10% de Dracons adultos. Usá-la esconde o jogador dos mapas localizadores.",
    },
  },
  {
    name: "Sacrificed Flesh",
    categoryKey: "danger",
    description: {
      en: 'Do NOT feed baby Fire Dragons. Shows "Tame" in the UI, but turns them permanently hostile. Can be cooked into rotten flesh (causes nausea).',
      pt: 'NÃO alimente os Fire Dragons bebês. Mostra "Tame" na UI, mas os torna hostis permanentemente. Pode ser cozida em carne podre (causa intoxicação).',
    },
  },
  {
    name: "Ammonite Shell",
    categoryKey: "crafting",
    description: {
      en: "Alternative to the Heart of the Sea in conduit crafting.",
      pt: "Alternativa ao Coração do Mar na criação do conduíte.",
    },
  },
  {
    name: "Draconic Bow",
    categoryKey: "weapon",
    description: {
      en: "Not yet obtainable in survival. 2× durability, 3× enchantability of the normal bow. 0.7× draw speed.",
      pt: "Ainda não obtenível na sobrevivência. 2× durabilidade, 3× encantabilidade do arco normal. Velocidade 0,7× ao puxar.",
    },
  },
  {
    name: "Maragon Bone Bow",
    categoryKey: "weapon",
    description: {
      en: "Craftable. Maragon bone arrows deal extra damage underwater and less in the air.",
      pt: "Forjável. Flechas de osso de Maragon causam dano extra na água e menos no ar.",
    },
  },
  {
    name: "Cannon",
    categoryKey: "siege",
    description: {
      en: "4 material types. Requires powder charge bag + cannonball + rammer + linstock. Recoils when fired and hurts nearby entities.",
      pt: "4 tipos de material. Requer powder charge bag + cannonball + rammer + linstock. Recua ao disparar e fere entidades próximas.",
    },
  },
  {
    name: "Ballista",
    categoryKey: "siege",
    description: {
      en: "Craftable with planks, ropes, an iron block and a tripwire hook. 1-2 players. Bolts: 3 sticks + 1 iron ingot.",
      pt: "Forjável com tábuas, cordas, bloco de ferro e tripwire hook. 1-2 jogadores. Bolts: 3 gravetos + 1 lingote de ferro.",
    },
  },
  {
    name: "Powder Charge Bag",
    categoryKey: "ammo",
    description: {
      en: "Gunpowder + rope + cloth. Cannon charge.",
      pt: "Pólvora/gunpowder + corda + tecido. Carga do canhão.",
    },
  },
  {
    name: "Cannonball",
    categoryKey: "ammo",
    description: {
      en: "20% chance to break blocks up to stone. Craftable with lead/pig iron + stone.",
      pt: "20% de chance de quebrar blocos até pedra. Forjável com lead/pig iron + pedra.",
    },
  },
]

export function getItems(lang: Lang): Item[] {
  return ITEMS_RAW.map((i) => ({
    name: i.name,
    categoryKey: i.categoryKey,
    category: CATEGORY_LABELS[i.categoryKey][lang],
    description: i.description[lang],
  }))
}

/* ---------------- Timeline ---------------- */

export type TimelineEntry = { date: string; title: string; description: string }
type TimelineRaw = { date: LS; title: LS; description: LS }

const TIMELINE_RAW: TimelineRaw[] = [
  {
    date: { en: "600–501 BFSD", pt: "600–501 AFSD" },
    title: { en: "The Century-Long Catastrophe", pt: "A Catástrofe de Um Século" },
    description: {
      en: "A devastating era that reshaped the foundations of Terra.",
      pt: "Uma era devastadora que remodelou as fundações de Terra.",
    },
  },
  {
    date: { en: "580–563 BFSD", pt: "580–563 AFSD" },
    title: { en: "Unification of Draconia", pt: "Unificação de Draconia" },
    description: {
      en: "Roman-era soldiers and Dracons forge the Kingdom of Draconia. The rise of the draconian military state.",
      pt: "Soldados da era romana e Dracons forjam o Reino de Draconia. Ascensão do estado militar draconiano.",
    },
  },
  {
    date: { en: "380–369 BFSD", pt: "380–369 AFSD" },
    title: { en: "The Draconian Empire", pt: "O Império Draconiano" },
    description: {
      en: "Mages and Dragons unite. The Draconian Empire is born through ancient pacts.",
      pt: "Magos e Dragões se unem. O Império Draconiano nasce através de pactos antigos.",
    },
  },
]

export function getTimeline(lang: Lang): TimelineEntry[] {
  return TIMELINE_RAW.map((t) => ({ date: t.date[lang], title: t.title[lang], description: t.description[lang] }))
}

/* ---------------- Characters ---------------- */

export type Character = { name: string; role: string; description: string }
type CharacterRaw = { name: string; role: LS; description: LS }

const CHARACTERS_RAW: CharacterRaw[] = [
  {
    name: 'Evelina "Rin" Charlotte',
    role: { en: "Protagonist", pt: "Protagonista" },
    description: {
      en: "A girl from Earth (2034) transported to Terra. An inventor whose creations were turned into weapons by the Draconian Empire — bombs powered by fire magic and draconic blood. Christmas was abolished in her time; she tries to celebrate it in Terra for the first time.",
      pt: "Garota da Terra (2034) transportada para Terra. Inventora cujas criações foram transformadas em armas pelo Império Draconiano — bombas movidas por magia de fogo e sangue draconiano. O Natal foi abolido em sua época; ela tenta celebrá-lo em Terra pela primeira vez.",
    },
  },
  {
    name: "Ennia Dyo",
    role: { en: "Explorer", pt: "Exploradora" },
    description: {
      en: "Betrothed to the Girl from the Other World. She descends into ancient ruins in search of the truth.",
      pt: "Prometida à Garota do Outro Mundo. Desce em ruínas antigas em busca da verdade.",
    },
  },
  {
    name: "DIODE",
    role: { en: "Mechanic", pt: "Mecânico" },
    description: {
      en: "A being with a redesigned, one-of-a-kind chest cavity. Companion of Evelina and Ennia.",
      pt: "Um ser com uma cavidade torácica redesenhada e única. Companheiro de Evelina e Ennia.",
    },
  },
]

export function getCharacters(lang: Lang): Character[] {
  return CHARACTERS_RAW.map((c) => ({ name: c.name, role: c.role[lang], description: c.description[lang] }))
}

/* ---------------- Changelog ---------------- */

export type Changelog = { version: string; changes: string[] }
type ChangelogRaw = { version: string; changes: LS[] }

const CHANGELOG_RAW: ChangelogRaw[] = [
  {
    version: "V0.1.3",
    changes: [
      { en: "Fire Dragon (creative only)", pt: "Fire Dragon (só criativo)" },
      { en: "Dragon-fire ash layers", pt: "Camadas de cinza do fogo de dragão" },
      { en: "Ballista + Bolts", pt: "Ballista + Bolts" },
      { en: "Drakonetian Horn", pt: "Drakonetian Horn" },
      { en: "9 new biomes", pt: "9 novos biomas" },
      { en: "Arcane Desert blocks", pt: "Blocos do Deserto Arcano" },
      { en: "Atelaiozoic Scarabs", pt: "Atelaiozoic Scarabs" },
      { en: "Fire Dragon drops added", pt: "Drops do Fire Dragon adicionados" },
      { en: "Blaze powder recipe added", pt: "Receita de blaze powder adicionada" },
    ],
  },
  {
    version: "V0.1.25",
    changes: [
      {
        en: "Ammonites (prehistoric cephalopods, ocean biomes)",
        pt: "Amonitas (cefalópodes pré-históricos, biomas de oceano)",
      },
      { en: "Ammonite shell as conduit material", pt: "Casca de amonita como material de conduíte" },
    ],
  },
  {
    version: "V0.1.23",
    changes: [
      {
        en: "Flower Crown (any vanilla or TerraNova flower, no armor points)",
        pt: "Coroa de Flores (qualquer flor vanilla ou TerraNova, sem pontos de armadura)",
      },
      {
        en: "Suspicious stew recipes for TerraNova flowers",
        pt: "Receitas de suspicious stew para flores do TerraNova",
      },
    ],
  },
  {
    version: "V0.1.21",
    changes: [
      { en: "Ash block/brick", pt: "Bloco/tijolo de cinza" },
      { en: "Aurochs (2× meat/leather)", pt: "Aurochs (2× carne/couro)" },
      { en: "Boar farming + truffle system", pt: "Sistema de fazenda de javali + trufas" },
      {
        en: "New crowns/tiaras (copper/bronze/brass/silver/gold, enchantable)",
        pt: "Novas coroas/tiaras (cobre/bronze/latão/prata/ouro, encantáveis)",
      },
      { en: "Rotorcraft (creative)", pt: "Rotorcraft (criativo)" },
      { en: "Music disc: Kyuu Desperation - StellarNightDreams", pt: "Disco de música: Kyuu Desperation - StellarNightDreams" },
      { en: "Bronze-aluminum hull block", pt: "Bloco de casco de bronze-alumínio" },
    ],
  },
  {
    version: "V0.1.2",
    changes: [
      { en: "Maragon added", pt: "Maragon adicionado" },
      { en: "Dracon Skull (10% drop on adults)", pt: "Dracon Skull (drop de 10% em adultos)" },
      { en: "Dracan bone & bone shard", pt: "Dracan bone & bone shard" },
      { en: "Coins (copper/silver/gold)", pt: "Moedas (cobre/prata/ouro)" },
      { en: "Draconic Bow (creative)", pt: "Draconic Bow (criativo)" },
      { en: "Ice Wyvern egg tag fix", pt: "Correção da tag do ovo de Ice Wyvern" },
      { en: "Ammonite shell as conduit material", pt: "Casca de amonita como material de conduíte" },
      { en: "Maragon bone bow and arrows", pt: "Maragon bone bow e flechas" },
    ],
  },
  {
    version: "V0.0.9",
    changes: [
      { en: "Alchemy book recipes", pt: "Receitas do livro alquímico" },
      { en: "Alchemy Altar", pt: "Alchemy Altar" },
      { en: "Currency system base", pt: "Base do sistema de moedas" },
    ],
  },
]

export function getChangelog(lang: Lang): Changelog[] {
  return CHANGELOG_RAW.map((c) => ({ version: c.version, changes: c.changes.map((ch) => ch[lang]) }))
}

/* ---------------- Navigation ---------------- */

export type NavPageKey = "home" | "creatures" | "territories" | "items" | "chronicles" | "changelog"
export type NavPage = { href: string; key: NavPageKey; label: string }

const PAGES_RAW: { href: string; key: NavPageKey; label: LS }[] = [
  { href: "/", key: "home", label: { en: "Home", pt: "Início" } },
  { href: "/criaturas", key: "creatures", label: { en: "Creatures", pt: "Criaturas" } },
  { href: "/territorios", key: "territories", label: { en: "Territories", pt: "Territórios" } },
  { href: "/itens", key: "items", label: { en: "Items", pt: "Itens" } },
  { href: "/lore", key: "chronicles", label: { en: "Chronicles", pt: "Crônicas" } },
  { href: "/changelog", key: "changelog", label: { en: "Changelog", pt: "Changelog" } },
]

export function getPages(lang: Lang): NavPage[] {
  return PAGES_RAW.map((p) => ({ href: p.href, key: p.key, label: p.label[lang] }))
}
