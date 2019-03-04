import fs from 'fs'

const toCsv = async (payload, filename) => {
  let csv = ''
  if (Array.isArray(payload)) {
    await Promise.all(payload.map(async (text) => {
      if (csv === '') {
        csv = `"${text}",`
      } else if (text.includes('\n')) {
        const sanitized = text.replace('\n', '')
        csv = `${csv}"${sanitized}"\n`
      } else {
        csv = `${csv}"${text}",`
      }

      fs.writeFile(`${filename}.csv`, csv, 'utf8', (err) => {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.')
        } else {
          csv = ''
        }
      })

      return true
    }))
  } else {
    fs.writeFile(`${filename}.csv`, `"${payload}"`, 'utf8', (err) => {
      if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.')
      }
    })
    csv = payload
  }

  return csv
}

export default toCsv
