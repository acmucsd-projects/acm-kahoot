const apiEndpoint = 'http://localhost:3000';

export const postDeck = async (deck) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': apiEndpoint,
    },
    body: JSON.stringify(deck),
  }
  
  await fetch(`${apiEndpoint}/packs`, options);
}

export const getPackByID = async (id) => {
  const res = await fetch(`${apiEndpoint}/packs/${id}`);
  return await res.json();
}