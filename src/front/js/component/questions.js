import React from "react";
import "../styles/questions.css";


const Questions = () => {
  const questions = [
    {
      question: "¿Cómo puedo solicitar un servicio?",
      answer: "Puedes solicitar un servicio seleccionando la categoría y el profesional deseado, luego sigue los pasos para completar la solicitud y realizar el pago.",
    },
    {
      question: "¿Cómo puedo pagar por los servicios?",
      answer: "Ofrecemos una pasarela de pago segura. Puedes realizar el pago con tarjeta de crédito o débito para confirmar tu solicitud de servicio.",
    },
    {
      question: "¿Cómo califico a un profesional?",
      answer: "Después de completar el servicio, puedes calificar al profesional y dejar comentarios sobre tu experiencia. Tu retroalimentación es valiosa para nosotros y otros usuarios.",
    },
    {
      question: "¿Cómo puedo cambiar la ciudad para ver profesionales en otra área?",
      answer: "Puedes cambiar la ciudad en la configuración de tu perfil o en la página de inicio. Esto te permitirá ver profesionales disponibles en diferentes áreas geográficas.",
    },
    // Si queremos agregamos mas preguntas y respuestas
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {questions.map((question, index) => (
          <div key={index} className="border border-solid border p-1 lg:rounded-lg border-gray-300 p-1">
            <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
            <p>{question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
