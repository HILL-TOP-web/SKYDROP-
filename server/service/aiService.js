export const generateAIResponse = async (prompt) => {
  try {
    return {
      success: true,
      message: `AI response for: ${prompt}`,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      error: err.message,
    };
  }
};
