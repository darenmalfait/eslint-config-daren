import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  transform: {
    '.(ts|tsx)': '@sucrase/jest-plugin',
  },
}

export default config
