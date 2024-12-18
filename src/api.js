// Set the base URL for your backend API
const API_URL = "http://127.0.0.1:8000";  // This should match the server URL

// Fetch all tasks
export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const data = await response.json();
  return data;
};

// Create a new task
export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }
  const data = await response.json();
  return data;
};

// Update a task
export const updateTask = async (id, task) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  const data = await response.json();
  return data;
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
  const data = await response.json();
  return data;
};
