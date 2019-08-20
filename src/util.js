import { themeGet } from '@styled-system/theme-get'

export function themeColor(code) {
  return code[0] === '#' ? () => code : themeGet(code)
}
