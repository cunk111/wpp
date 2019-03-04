import rp from 'request-promise'

const getWebpage = async (user = 'Pierre_Soulages') => {
  try {
    const response = await rp(`https://en.wikipedia.org/wiki/${user}`)
    return response
  } catch (e) {
    console.error(e)
    return e
  }
}

export default getWebpage
