import IOredis from 'ioredis'

const client = new IOredis()

export const getValue = (key) => {
  return client.get(key)
}

export const setValue = (key, value, ttl = 300) => {
  return client.set(key, value, 'EX', ttl)
}
