export default function getCartInfo(size) {
  // select size and extract count and details from size object
  if (size) {
    if (size.small)   return { ...size.small,  size: 'Small' }
    if (size.medium)  return { ...size.medium, size: 'Medium' }
    if (size.large)   return { ...size.large,  size: 'Large' }
    if (size.xLarge)  return { ...size.xLarge, size: 'X Large' }
    if (size.xxLarge) return { ...size.xLarge, size: 'XX Large' }
  }
}