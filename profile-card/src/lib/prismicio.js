import * as prismic from '@prismicio/client'

// Update your repository name here
const repositoryName = 'nandita'

const createClient = (params) => {
  const client = prismic.createClient(repositoryName, params)
  console.log(client)

  return client
}

export default createClient