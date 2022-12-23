/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from '../../../utils/loadable'

export const HomePage = lazyLoad(
  () => import('./index'),
  (module) => module.HomePage
)
