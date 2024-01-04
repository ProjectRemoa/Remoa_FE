import axios from "axios";

export const getWork = async (endpoint) => {
  try {      
    const response = await axios.get(endpoint);
    const {
      data: {
        data: {
          references,
          totalOfAllReferences,
          totalOfPageElements,
          totalPages,
        },
      },
    } = response;
    return { references, totalOfAllReferences, totalOfPageElements, totalPages };
  }
  catch (err) {
    console.log(err);
    return err;
  }
};