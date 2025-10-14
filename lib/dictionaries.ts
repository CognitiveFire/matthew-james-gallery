import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  no: () => import('@/dictionaries/no.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'no') => {
  return dictionaries[locale]()
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

