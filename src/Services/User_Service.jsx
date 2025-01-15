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
      username: username, 
      password: password,
    });
    console.log("Login successful:", response.data);
    return response.data; // Backend should return { success, message }
  } catch (error) {
    if (error.response) {
      console.error("Backend error:", error.response.data);
      throw new Error(error.response.data.message || "Login failed");
    } else {
      console.error("Network error:", error.message);
      throw new Error("Unable to reach the server. Please try again.");
    }
  }
};


export const saveContact = async (contactus) => {
  try {
    const response = await myAxios.post("/contact/submit", contactus);
    console.log("Contact saved successfully:", response.formData);
    return response.data; // Assuming response includes a success message or saved data
  } catch (error) {
    console.error("Error saving contact:", error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};