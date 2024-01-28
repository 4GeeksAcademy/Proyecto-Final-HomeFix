import React, { useState } from "react";
import "../styles/questions.css";

const Questions = () => {
  const [answersVisible, setAnswersVisible] = useState([]);

  const toggleAnswerVisibility = (index) => {
    setAnswersVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const questions = [
    {
      pregunta: "¿Cómo puedo solicitar un servicio?",
      respuesta: "Puedes solicitar un servicio seleccionando la categoría y el profesional deseado, luego sigue los pasos para completar la solicitud y realizar el pago.",
    },
    {
      pregunta: "¿Cómo puedo pagar por los servicios?",
      respuesta: "Puedes realizar el pago con tarjeta de crédito o débito para confirmar tu solicitud de servicio.",
    },
    {
      pregunta: "¿Cómo califico a un profesional?",
      respuesta: "Después de completar el servicio, puedes calificar al profesional y dejar comentarios sobre tu experiencia. Tu retroalimentación es valiosa para nosotros y otros usuarios.",
    },
    {
      pregunta: "¿Cómo puedo cambiar la ciudad para ver profesionales en otra área?",
      respuesta: "Puedes cambiar la ciudad en la configuración de tu perfil o en la página de inicio. Esto te permitirá ver profesionales disponibles en diferentes áreas geográficas.",
    },
  ];

  return (
    <div className="container mx-auto p-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Preguntas Frecuentes</h2>
      <div className="space-y-8">
        {questions.map((question, index) => (
          <div key={index} className="question-container rounded-lg justify-center">
            <h3 className="text-lg font-semibold mb-2">{question.pregunta}</h3>
            {answersVisible[index] ? <p>{question.respuesta}</p> : null}
            <button className="text-black-500" onClick={() => toggleAnswerVisibility(index)}>
              {answersVisible[index] ? "-" : "+"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
