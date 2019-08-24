import { themeGet } from '@styled-system/theme-get'

export function themeColor(code, prefix = 'colors.') {
  return code[0] === '#' ? () => code : themeGet(prefix + code)
}
