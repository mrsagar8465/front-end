import { myAxios } from "./Helper";

// Signup function
export const signUp = async (user) => {
  try {
    const response = await myAxios.post("/user/add", user);
    console.log("Response from server:", response.data);
    return response.data; // Return response data for handling in the component
  } catch (error) {
    console.error("Error during signup:", error.response?.data || error.message);
    throw error; // Throw the error to let the component handle it
  }
};

// Login function
export const userLogin = async (username, password) => {
  try {
    const response = await myAxios.post("/user/login", {
      username,
      password,
    });
    console.log("Login successful:", response.data);
    return response.data; // Assuming response.data contains { success, message }
  } catch (error) {
    console.error("Error during login:", error.response?.data || error.message);
    throw error; // Propagate the error for further handling
  }
};
