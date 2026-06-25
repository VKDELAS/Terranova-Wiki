"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { Lang } from "@/lib/terranova-data"

const STORAGE_KEY = "terranova-lang"
const DEFAULT_LANG: Lang = "en"

/* ---------------- UI dictionary ---------------- */

const DICT = {
  en: {
    header: { discord: "Discord", download: "Download", openMenu: "Open menu", closeMenu: "Close menu" },
    language: { label: "Language", english: "English", portuguese: "Portuguese", switchTo: "Switch language" },
    hero: {
      wip: "Active development — V0.1.3 | Some content is still being added",
      tagline: "A world of ancient dragons, lost empires and untamed nature.",
      downloadAddon: "Download Addon",
      joinDiscord: "Join the Discord",
      exploreWiki: "Explore Wiki",
    },
    highlights: {
      headingA: "Explore the World of",
      intro1: "An addon in",
      introStrong: "active development",
      intro2: ", forged by a community of adventurers. Dive into the creatures, territories and secrets that bring Terra to life.",
      calloutA: "New content arrives with every version. Keep up with everything in the",
      calloutStrong: "changelog",
      calloutEnd: ".",
      viewChangelog: "View Changelog",
      cards: {
        dragons: {
          title: "Ancient Dragons",
          description:
            "Dracon, Maragon and the fearsome Fire Dragon. Tame, ride and soar above Terra with acid- and fire-spitting mounts.",
          cta: "Meet the dragons",
        },
        biomes: {
          title: "Unexplored Biomes",
          description: "Arcane deserts, volcanic fields and ancient forests brimming with resources.",
          cta: "Explore territories",
        },
        creatures: {
          title: "Wild Creatures",
          description: "Direwolves, prehistoric ammonites and woodland beasts waiting to be discovered.",
          cta: "View bestiary",
        },
      },
    },
    footer: {
      wiki: "Wiki",
      tagline: "Community knowledge base. Not affiliated with KyuuDesperation.",
      navigation: "Navigation",
      downloadAddon: "Download Addon",
      joinDiscord: "Join the Discord",
      reportBug: "Report a Bug",
      copyright: "TerraNova © KyuuDesperation",
      maintained: "Community-maintained wiki",
    },
    sidebar: {
      navigation: "Navigation",
      quickLinks: "Quick Links",
      downloadAddon: "Download Addon",
      joinDiscord: "Join the Discord",
      curseforgePage: "CurseForge Page",
      reportBug: "Report a Bug",
      currentVersion: "Current Version",
      lastUpdate: "Last update: 2025",
    },
    creatures: { heading: "Creatures of Terra", showMore: "Show less", viewDetails: "View details" },
    biomes: { heading: "Known Territories", near: "Near:" },
    items: { heading: "Notable Items" },
    changelog: { heading: "Change Logs" },
    lore: {
      heading: "Chronicles of Terra",
      worldTitle: "The World",
      worldText:
        "Terra is a parallel world inhabited by humans, dracons, elves, svartalves, mages and mythical creatures. It is a world shaped by empire-building, catastrophic wars and the bonds forged between humans and dragons.",
      timelineTitle: "Timeline",
      charactersTitle: "Characters",
      warTitle: "The Great War & the Heart Bomb",
      adultContent: "Adult content",
      warText:
        "The Draconian Empire bombed the cities of Proelefsi from the north. Entire populations were conscripted to die. The war ended with a single weapon — a bomb forged from the heart of a defeated god. A flash brighter than the sun. A city reduced to rubble and fire. Boiling rivers. Silhouettes burned into the walls. Black rain.",
      skotoTitle: "The Skotoselene Dominion",
      skotoText:
        "A vast civilization of Svartalves — a dangerous elf/moose hybrid race — that grew through conquest and bloodshed. They impose Skotoselenism on all conquered peoples. Founded the day Empress Euphthiria was deposed from the United Elven Empire. Depicted on maps as an immense black landmass.",
      filmTitle: "Film: Der Verlorene im Steins",
      filmQuote:
        "“Deep within an ancient forest, a sealed underground laboratory guards secrets that should never have awoken. Professor Wolfgang remains — abandoned, yet trapped. Ennia Dyo descends in search of the truth, but the stones are not as lifeless as they seem.”",
    },
  },
  pt: {
    header: { discord: "Discord", download: "Baixar", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    language: { label: "Idioma", english: "Inglês", portuguese: "Português", switchTo: "Trocar idioma" },
    hero: {
      wip: "Desenvolvimento ativo — V0.1.3 | Alguns conteúdos ainda estão sendo adicionados",
      tagline: "Um mundo de dragões antigos, impérios perdidos e natureza indomada.",
      downloadAddon: "Baixar Addon",
      joinDiscord: "Entrar no Discord",
      exploreWiki: "Explorar Wiki",
    },
    highlights: {
      headingA: "Explore o Mundo de",
      intro1: "Um addon em",
      introStrong: "desenvolvimento ativo",
      intro2: ", forjado por uma comunidade de aventureiros. Mergulhe nas criaturas, territórios e segredos que dão vida a Terra.",
      calloutA: "Novos conteúdos chegam a cada versão. Fique por dentro de tudo no",
      calloutStrong: "changelog",
      calloutEnd: ".",
      viewChangelog: "Ver Changelog",
      cards: {
        dragons: {
          title: "Dragões Ancestrais",
          description:
            "Dracon, Maragon e o temível Fire Dragon. Doma, cavalga e voa por cima de Terra com montarias cuspidoras de ácido e fogo.",
          cta: "Conhecer os dragões",
        },
        biomes: {
          title: "Biomas Inexplorados",
          description: "Desertos arcanos, campos vulcânicos e florestas antigas repletas de recursos.",
          cta: "Explorar territórios",
        },
        creatures: {
          title: "Criaturas Selvagens",
          description: "Direwolves, amonitas pré-históricas e feras das matas esperando para serem descobertas.",
          cta: "Ver bestiário",
        },
      },
    },
    footer: {
      wiki: "Wiki",
      tagline: "Base de conhecimento da comunidade. Não afiliada à KyuuDesperation.",
      navigation: "Navegação",
      downloadAddon: "Baixar Addon",
      joinDiscord: "Entrar no Discord",
      reportBug: "Reportar um Bug",
      copyright: "TerraNova © KyuuDesperation",
      maintained: "Wiki mantida pela comunidade",
    },
    sidebar: {
      navigation: "Navegação",
      quickLinks: "Links Rápidos",
      downloadAddon: "Baixar Addon",
      joinDiscord: "Entrar no Discord",
      curseforgePage: "Página na CurseForge",
      reportBug: "Reportar um Bug",
      currentVersion: "Versão Atual",
      lastUpdate: "Última atualização: 2025",
    },
    creatures: { heading: "Criaturas de Terra", showMore: "Mostrar menos", viewDetails: "Ver detalhes" },
    biomes: { heading: "Territórios Conhecidos", near: "Perto de:" },
    items: { heading: "Itens Notáveis" },
    changelog: { heading: "Registros de Mudança" },
    lore: {
      heading: "Crônicas de Terra",
      worldTitle: "O Mundo",
      worldText:
        "Terra é um mundo paralelo habitado por humanos, dracons, elfos, svartalves, magos e criaturas míticas. É um mundo moldado pela construção de impérios, guerras catastróficas e os laços forjados entre humanos e dragões.",
      timelineTitle: "Linha do Tempo",
      charactersTitle: "Personagens",
      warTitle: "A Grande Guerra & a Bomba do Coração",
      adultContent: "Conteúdo adulto",
      warText:
        "O Império Draconiano bombardeou as cidades de Proelefsi pelo norte. Populações inteiras foram convocadas para morrer. A guerra terminou com uma única arma — uma bomba forjada do coração de um deus derrotado. Um clarão mais brilhante que o sol. Uma cidade reduzida a escombros e fogo. Rios fervendo. Silhuetas queimadas nas paredes. Chuva negra.",
      skotoTitle: "O Domínio Skotoselene",
      skotoText:
        "Uma vasta civilização de Svartalves — uma raça híbrida perigosa de elfo/alce — que cresceu por conquista e derramamento de sangue. Eles impõem o Skotoselenismo a todos os povos conquistados. Fundado no dia em que a Imperatriz Euphthiria foi deposta do Império Élfico Unido. Representado nos mapas como uma imensa massa territorial negra.",
      filmTitle: "Filme: Der Verlorene im Steins",
      filmQuote:
        "“No fundo de uma floresta antiga, um laboratório subterrâneo selado guarda segredos que jamais deveriam ter despertado. O Professor Wolfgang permanece — abandonado, mas preso. Ennia Dyo desce em busca da verdade, mas as pedras não são tão sem vida quanto parecem.”",
    },
  },
} as const

export type Dict = (typeof DICT)["en"]

/* ---------------- Context ---------------- */

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "en" || stored === "pt") {
        setLangState(stored)
      }
    } catch {
      /* ignore */
    }
  }, [])

  // Keep <html lang> and storage in sync.
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: DICT[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
