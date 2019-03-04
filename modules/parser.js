import cheerio from 'cheerio'

export const getPicUrl = async (html) => {
  try {
    const $ = await cheerio.load(html)
    const val = $('.thumb > .thumbinner > .image > .thumbimage').attr('src')
    return `https:${val}`
  } catch (e) {
    console.error(e)
    return e
  }
}

export const getExhibitionHistory = async (html) => {
  try {
    const $ = await cheerio.load(html)
    const list = []

    $('.wikitable > tbody > tr').each((it, tr) => {
      $(tr).children('th').each((it1, th) => {
        list.push($(th).text())
      })

      $(tr).children('td').each((it2, td) => {
        if ($(td).children('a').text() !== '') {
          // NOTE ugly, couldnt get .last() to only match last
          //  try $(td).children('a').last(), it returns 2 matches..
          if (it2 === 2) {
            list.push($(td).children('a').text().concat('\n'))
          } else {
            list.push($(td).children('a').text())
          }
        } else {
          list.push($(td).text())
        }
      })
    })
    return list
  } catch (e) {
    console.error(e)
    return e
  }
}

export const getCategories = async (html) => {
  try {
    const $ = await cheerio.load(html)
    const list = []
    $('#mw-normal-catlinks > ul > li').each((it, cat) => {
      list.push($(cat).text())
    })
    return list
  } catch (e) {
    console.error(e)
    return e
  }
}
