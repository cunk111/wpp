import {
  getPicUrl,
  getExhibitionHistory,
  getCategories,
} from '../modules/parser'

import getWebpage from '../modules/networker'

import toCsv from '../modules/writer'

const parsingPipe = async (handler, param) => {
  const response = await getWebpage(param)

  const pic = await getPicUrl(response)
  await toCsv(pic, 'picture')

  const hist = await getExhibitionHistory(response)
  const b = await toCsv(hist, 'history')
  console.log({ b })

  const cat = await getCategories(response)
  await toCsv(cat, 'categories')

  if (b === '') {
    return handler.response('Ceci n\'est pas une pipe, it\'s a teapot.').code(418)
  }
  return handler.response(b).code(200)
}

export default parsingPipe
