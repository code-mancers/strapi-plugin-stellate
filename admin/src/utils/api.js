import axios from "./axiosInstance";

export const refreshCache = async (type) => {
  if (type === "all") {
    await refreshAllCache();
    return true;
  } else {
    const query = type.replace(type[0], type[0].toUpperCase());
    await refreshCollectionCache(query);
    return true;
  }
};

export const refreshAllCache = async () => {
  try {
    const response = await axios({
      url: "stellate/cache/refresh",
      method: "POST",
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const refreshCollectionCache = async (collection) => {
  try {
    const response = await axios({
      url: "stellate/cache/refreshcollection",
      method: "POST",
      data: {
        collection: collection,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getCollectionTypes = async () => {
  try {
    const response = await axios({
      url: "stellate/collections",
      method: "GET",
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
