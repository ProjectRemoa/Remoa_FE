import axios from "axios";

export const getUserProfileImg = async () => {
  const response = await axios.get("/BE/user/img");
  const {
    data: { data },
  } = response;
  return data;
};

export const postUserProfileImg = async (newImage) => {
  const formData = new FormData();
  formData.append("file", newImage);
  return await axios.put("/BE/user/img", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
