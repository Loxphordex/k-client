import config from '../config'

export function generateUpdateEndpoint(data) {
  return `${config.API_ENDPOINT}/api/images?id=${data.id}&name=${data.name}&link=${data.link}&description=${data.description}&type=${data.type}&price=${data.price}&small=${data.small}&medium=${data.medium}&large=${data.large}&xLarge=${data.xLarge}&xxLarge=${data.xxLarge}`
}