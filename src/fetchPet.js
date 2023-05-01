const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  console.log("id f>>", id);

  console.log("fetchPet text", `http://pets-v2.dev-apis.com/pets?id=${id}`);

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  console.log("fetchPet apiRes", apiRes);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  return await apiRes.json();
};

export default fetchPet;
