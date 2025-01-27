import { Description } from "@headlessui/react";
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
    },
    {
      headers: {
        "Content-Type": "application/json", // Ensure proper content type
      },
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

export const getCategories = async () => {
  try {
    const response = await myAxios.get("/category/view");
    console.log("Categories fetched successfully:", response.data);
    return response.data; // Assuming response contains category list
  } catch (error) {
    console.error("Error fetching categories:", error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};

export const addCategory = async (data) => {
  try {
    const response = await myAxios.post("/category/add", data);
    console.log("Category added successfully:", response.data);
    return response.data; // Assuming response contains the added category details
  } catch (error) {
    console.error("Error adding category:", error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};
export const editCategory = async (id, data) => {
  try {
    const response = await myAxios.put(`/category/${id}`, data);
    console.log(`Category with ID ${id} updated successfully:`, response.data);
    return response.data; // Assuming response contains updated category details
  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await myAxios.delete(`/category/${id}`);
    console.log(`Category with ID ${id} deleted successfully.`);
    return response.data; // Assuming response contains a success message
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};





//this is subcategory


export const getSubCategories = async () => {
  try {
    const response = await myAxios.get("/subcategory/view");
    console.log("Categories fetched successfully:", response.data);
    return response.data; // Assuming response contains category list
  } catch (error) {
    console.error("Error fetching categories:", error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};


export const addSubCategory = async (data) => {
  try {
    const response = await myAxios.post("/subcategory/add", data);
    console.log("SubCategory added successfully:", response.data);
    return response.data; // Assuming response contains the added category details
  } catch (error) {
    console.error("Error adding category:", error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};
export const editSubCategory = async (id, data) => {
  try {
    const response = await myAxios.put(`/subcategory/update/${id}`, data);
    console.log(`SubCategory with ID ${id} updated successfully:`, response.data);
    return response.data; // Assuming response contains updated category details
  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};

export const deleteSubCategory = async (id) => {
  try {
    const response = await myAxios.delete(`/subcategory/delete/${id}`);
    console.log(`SubCategory with ID ${id} deleted successfully.`);
    return response.data; // Assuming response contains a success message
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error.response?.data || error.message);
    throw error; // Propagate error for further handling
  }
};





// Function to add a category
// export const addCategory = async (name, description) => {
//   try {
//     const response = await myAxios.post("/category/add", {
//       name,
//       description,
//     });
//     return response.data; // Return the response data if needed
//   } catch (error) {
//     console.error("Error adding category:", error);
//     throw error;
//   }
// };

// // Function to view all categories
// export const getCategories = async () => {
//   try {
//     const response = await myAxios.get("/category/view");
//     return response.data; // Return the list of categories
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };

// // Function to edit a category
// export const editCategory = async (id, name, description) => {
//   try {
//     const response = await myAxios.put(`/category/${id}`, {
//       name,
//       description,
//     });
//     return response.data; // Return the updated category data
//   } catch (error) {
//     console.error("Error editing category:", error);
//     throw error;
//   }
// };

// Function to delete a category
// export const deleteCategory = async (id) => {
//   try {
//     const response = await myAxios.delete(`/category/${id}`);
//     return response.data; // Return success message or data
//   } catch (error) {
//     console.error("Error deleting category:", error);
//     throw error;
//   }
// };





