import axios from "axios";

const token = sessionStorage.getItem("token");

export const getUserProfileImg = async (token) => {
  try {
    const response = await axios.get("/BE/user/img", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const putUserProfileImg = async (newImage) => {
  try {
    const formData = new FormData();
    formData.append("file", newImage);
    return await axios.put("/BE/user/img", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
