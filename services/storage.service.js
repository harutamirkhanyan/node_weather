import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

const filepath = join(homedir(), '../weather-data.json')

const saveKeyValue =async (key, value) => {
  const data={}
  if(await isExist(filepath)){
  const file=await promises.readFile(filepath)
  data=JSON.parse(file)
  }
  data[key]=value
  promises.writeFile(filepath, JSON.stringify(data))
}

export { saveKeyValue }