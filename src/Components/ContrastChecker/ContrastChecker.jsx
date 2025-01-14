import { useEffect, useState } from "react";
import "./ContrastChecker.css";
const ContrastChecker = ({ color, onResult }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkContrast = async () => {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            mode: "cors",
            method: "POST",
            body: JSON.stringify({
              colors: [color.hex, color.contrastText],
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (data) {
          const overallScore = data.overall;

          let resultClass = "";

          if (overallScore === "Yup") {
            resultClass = "high-contrast";
          } else if (overallScore === "Kinda") {
            resultClass = "medium-contrast";
          } else {
            resultClass = "low-contrast";
          }

          onResult({
            score: `Overall Contrast Score: ${overallScore}`,
            className: resultClass,
          });
        } else {
          setError("Score not available");
          onResult("Score not available");
        }
      } catch (error) {
        console.error("Error fetching contrast score:", error);
        setError("Error fetching contrast score");
        onResult("Error fetching contrast score");
      }
    };

    checkContrast();
  }, [color, onResult]);

  if (error) {
    return <p>{error}</p>;
  }

  return null;
};

export default ContrastChecker;
