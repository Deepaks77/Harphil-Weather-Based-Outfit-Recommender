export const getOutfitSuggestion = (condition, temp) => {
  if (condition.includes("rain")) return "Take an umbrella";
  if (condition.includes("sun")) return "Wear sunglasses";
  if (condition.includes("cloud")) return "wear lightweight jacket";
  if (temp < 10) return "Wear a jacket";
  if (temp > 30) return "Light clothes recommended";
  return "Dress comfortably";
};
