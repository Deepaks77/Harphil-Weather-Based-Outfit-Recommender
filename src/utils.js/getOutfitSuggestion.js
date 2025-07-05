export const getOutfitSuggestion = (condition, temp) => {
  if (condition?.toLowerCase().includes("rain")) return "Take an umbrella";
  if (condition.toLowerCase().includes("sun")) return "Wear sunglasses";
  if (condition.toLowerCase().includes("cloud"))
    return "wear lightweight jacket";
  if (temp < 10) return "Wear a jacket";
  if (temp > 30) return "Light clothes recommended";
  return "Dress comfortably";
};
