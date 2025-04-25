import { useState } from "react";

const examenes = [
  {
    titulo: "Examen 1",
    preguntas: [
      {
        tipo: "opcion",
        enunciado: "1. ¿Cuál es la principal fuente de energía de Paraguay según su matriz energética?",
        opciones: ["Carbón", "Petróleo", "Hidroelectricidad", "Energía solar"],
        correcta: "Hidroelectricidad",
        explicacion: "Paraguay se destaca por su uso casi exclusivo de energía hidroeléctrica, como la generada por Itaipú."
      },
      {
        tipo: "opcion",
        enunciado: "2. ¿Qué porcentaje de la oferta energética de Paraguay corresponde a hidroenergía según el balance 2012?",
        opciones: ["27%", "46%", "57%", "76%"],
        correcta: "57%",
        explicacion: "Según datos del material, en 2012 la hidroenergía representaba el 57% de la oferta total."
      },
      {
        tipo: "opcion",
        enunciado: "3. ¿Qué energía tiene un uso mayoritario en el consumo final paraguayo?",
        opciones: ["Electricidad", "Hidrocarburos", "Biomasa", "Gas natural"],
        correcta: "Biomasa",
        explicacion: "La biomasa representa el 46% del consumo final, principalmente en zonas rurales."
      },
      {
        tipo: "opcion",
        enunciado: "4. ¿Qué es un prosumidor?",
        opciones: ["Un proveedor eléctrico", "Un auditor energético", "Quien produce y consume energía", "Un transformador"],
        correcta: "Quien produce y consume energía",
        explicacion: "Prosumidor = productor + consumidor, generalmente con paneles solares u otras fuentes propias."
      },
      {
        tipo: "opcion",
        enunciado: "5. ¿Cuál es el objetivo principal de la cogeneración?",
        opciones: ["Almacenar energía", "Aprovechar calor residual", "Convertir energía nuclear", "Reducir el voltaje"],
        correcta: "Aprovechar calor residual",
        explicacion: "La cogeneración permite reutilizar el calor producido durante la generación eléctrica."
      },
      {
        tipo: "opcion",
        enunciado: "6. ¿Qué ley permite producción y transporte independiente de energía?",
        opciones: ["Ley 6092/16", "Ley de Energía Verde", "Ley 3009/06", "Ley Nacional de Electricidad"],
        correcta: "Ley 3009/06",
        explicacion: "La Ley 3009/06 establece las bases legales del régimen de producción y comercialización de energía."
      },
      {
        tipo: "opcion",
        enunciado: "7. ¿Qué gas de efecto invernadero es más común en actividades humanas?",
        opciones: ["Ozono", "Metano", "Vapor de agua", "Dióxido de carbono (CO2)"],
        correcta: "Dióxido de carbono (CO2)",
        explicacion: "El CO2 es el principal gas emitido por la quema de combustibles fósiles."
      },
      {
        tipo: "opcion",
        enunciado: "8. ¿Qué unidad mide la energía eléctrica?",
        opciones: ["Voltios", "Watts", "Kilovatios hora", "Amperios"],
        correcta: "Kilovatios hora",
        explicacion: "El kWh mide cuánta energía se ha utilizado en una hora."
      },
      {
        tipo: "opcion",
        enunciado: "9. ¿Qué porcentaje de cobertura eléctrica tenía Paraguay en 2009?",
        opciones: ["75%", "88%", "98%", "100%"],
        correcta: "98%",
        explicacion: "Según el documento, en 2009 Paraguay alcanzó el 98% de cobertura eléctrica."
      },
      {
        tipo: "opcion",
        enunciado: "10. ¿Cuál es la fórmula de la energía en reposo según la teoría de Einstein?",
        opciones: ["F = ma", "E = mc²", "P = V·I", "Q = m·c·?T"],
        correcta: "E = mc²",
        explicacion: "Einstein propuso que la energía en reposo de un cuerpo es igual a su masa por la velocidad de la luz al cuadrado."
      },
      {
        tipo: "vf",
        enunciado: "11. La eficiencia energética permite reducir emisiones.",
        correcta: true,
        explicacion: "Menor consumo energético = menor generación = menos emisiones."
      },
      {
        tipo: "vf",
        enunciado: "12. Los transformadores funcionan con corriente continua.",
        correcta: false,
        explicacion: "Los transformadores solo funcionan con corriente alterna."
      },
      {
        tipo: "vf",
        enunciado: "13. La Ley 3009/06 regula la cogeneración y autogeneración eléctrica.",
        correcta: true,
        explicacion: "Esta ley habilita esos modelos de producción bajo licencia."
      },
      {
        tipo: "vf",
        enunciado: "14. El gas natural es la principal fuente energética del Paraguay.",
        correcta: false,
        explicacion: "El Paraguay no tiene una red importante de gas natural. Su matriz es mayormente hidráulica."
      },
      {
        tipo: "vf",
        enunciado: "15. Un prosumidor puede conectarse a la red eléctrica.",
        correcta: true,
        explicacion: "Puede consumir y entregar excedente a la red, según la normativa vigente."
      }
    ]
  }
];

export default examenes;
