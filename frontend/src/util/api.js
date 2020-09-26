const apiEndpoint = 'http://localhost:3000';

export async function getQuestions() {
  const res = await fetch(`${apiEndpoint}/questions`);
  return await res.json();
}

export async function getQuestionByID(id) {
  const res = await fetch(`${apiEndpoint}/questions/${id}`);
  return await res.json();
}

export async function getPacks() {
  const res = await fetch(`${apiEndpoint}/packs/names`);
  return await res.json();
}

export async function getPackByID(id) {
  const res = await fetch(`${apiEndpoint}/packs/${id}`);
  return await res.json();
}

export async function postPack(pack) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': apiEndpoint,
    },
    body: JSON.stringify(pack),
  }
  
  await fetch(`${apiEndpoint}/packs`, options);
}

export async function deletePackByID(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': apiEndpoint,
    },
  }
  
  await fetch(`${apiEndpoint}/packs/${id}`, options);
}