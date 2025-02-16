import axios from "axios";

export const getIdList = async() => {
  const apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&hasImages=true&departmentId=11&q=Vincent+van+Gogh";

  const result = await axios.get(apiUrl);
  const ids = result.data.objectIDs;

  return ids;

};
