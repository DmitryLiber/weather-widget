export default (mods: string, block: string) => {
  if (!mods) return ''

  return (
    ' ' +
    mods
      .split(',')
      .map((mod) => `${block}--${mod.trim()}`)
      .join(' ')
  )
}
