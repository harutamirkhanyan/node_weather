import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

const filepath = join(homedir(), 'weather-data.json')

const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
}

const saveKeyValue = async (key, value) => {
  const data = {}
  if (await isExist(filepath)) {
    const file = await promises.readFile(filepath)
    let data = JSON.parse(file)
  }
  data[key] = value
  promises.writeFile(filepath, JSON.stringify(data))
}


const getKeyValue = async (key) => {
  if (await isExist(filepath)) {
    const file = await promises.readFile(filepath)
    let data = JSON.parse(file)
    return data[key]
  }
  return undefined
}

const isExist = async (path) => {
  try {
    await promises.stat(path)
    return true
  } catch (e) {
    return false
  }
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }