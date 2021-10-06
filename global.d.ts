import { EmotionMatchers } from '@emotion/jest'

export {}

declare global {
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Matchers extends EmotionMatchers {}
  }
}
