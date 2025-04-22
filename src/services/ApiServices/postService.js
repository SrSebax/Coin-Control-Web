const API_BASE_URL = "http://localhost:5190/api";

export async function postAuth(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/Auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al autenticar el usuario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en postAuth:", error);
    throw error;
  }
}
