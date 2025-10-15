import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  no: () => import('@/dictionaries/no.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'no') => {
  try {
    const dict = await dictionaries[locale]()
    if (!dict) {
      console.error(`Dictionary for locale ${locale} is undefined`)
      // Fallback to English if the requested locale fails
      return locale === 'no' ? await dictionaries.en() : await dictionaries.en()
    }
    return dict
  } catch (error) {
    console.error(`Failed to load dictionary for locale ${locale}:`, error)
    // Always fallback to English
    return await dictionaries.en()
  }
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

