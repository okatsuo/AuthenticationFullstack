import 'reflect-metadata'
import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/user-resolver'

void (async function Bootstrap () {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver]
    })
  })

  const PORT = process.env.PORT || 4100
  server.listen(PORT).then(({ url }) => {
    console.log(`server running at ${url}`)
  }).catch((error) => {
    console.error(error)
  })
})()
