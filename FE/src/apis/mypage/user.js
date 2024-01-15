import axios from "axios";

export const getUserProfileImg = async () => {
  try {
    const response = await axios.get("/BE/user/img");
    const {
      data: { data },
    } = response;
    return data;
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
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
