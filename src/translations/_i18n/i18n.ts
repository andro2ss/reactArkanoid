import i18next from 'i18next'
import langHelper from '../../helpers/langHelper'
import { i18nResources } from './i18nResources'

i18next
  .init({
    interpolation: { escapeValue: false },
    lng: langHelper.currentLanguage(),
    resources: i18nResources
  })
  // eslint-disable-next-line no-console
  .catch(console.error)

export default i18next
