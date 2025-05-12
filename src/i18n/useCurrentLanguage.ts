import { useParams } from 'next/navigation'
import { fallbackLng, type Language } from './settings'

export const useCurrentLanguage = (lang: Language = fallbackLng): Language => {
  const parameters = useParams()

  return (parameters['lang'] as Language) || lang
}
