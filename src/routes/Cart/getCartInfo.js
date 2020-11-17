export default function getCartInfo(size) {
  /**
   * This function rearranges the default data and returns a
   * slightly different object structure. The sizes are added
   * together and returned along with the details
   */
  let info = {}
  if (size) {
    classList.map(s => {
      if (size[s]) {
        info = {
          ...info,
          details: size[s].details,
          sizes: {
            ...info.sizes,
            [s]: size[s].count
          }
        }
      }
    })
  }

  return info
}

export const classList = [
  'small',
  'medium',
  'large',
  'xLarge',
  'xxLarge'
]