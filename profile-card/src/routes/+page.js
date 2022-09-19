
import createClient from '$lib/prismicio'

export async function load({ fetch }) {
  const UID = 'homepage';
  const client = createClient({ fetch })
  const document = await client.getByUID('page', UID)

  if (document){
    return { document };
}

error(404, 'not found');
}