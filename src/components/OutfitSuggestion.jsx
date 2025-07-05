import React from "react";
import { getOutfitSuggestion } from "../utils.js/getOutfitSuggestion";

export default React.memo(function OutfitSuggestion({ condition, temp }) {
  const suggestion = getOutfitSuggestion(condition, temp);
  return (
    <div className="bg-yellow-100 rounded-md p-3 text-center">
      <p className="font-medium">👕 {suggestion}</p>
    </div>
  );
});
