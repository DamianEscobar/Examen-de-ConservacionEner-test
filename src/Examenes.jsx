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
  },
  {
    titulo: "Examen 2",
    preguntas: [
      {
        tipo: "opcion",
        enunciado: "1. ¿Cuál fue el aumento del uso de electricidad en Paraguay entre 2011 y 2012?",
        opciones: ["2,5%", "5%", "8,6%", "10%"],
        correcta: "8,6%",
        explicacion: "Según los datos, entre 2011 y 2012 el uso de electricidad aumentó un 8,6%."
      },
      {
        tipo: "opcion",
        enunciado: "2. ¿Qué significa eficiencia energética?",
        opciones: [
          "Gastar más energía para lograr mejores resultados",
          "Reducir el consumo aunque baje la calidad",
          "Obtener lo mismo con menos energía",
          "Utilizar energía nuclear en vez de fósil"
        ],
        correcta: "Obtener lo mismo con menos energía",
        explicacion: "La eficiencia energética busca reducir consumo sin perder rendimiento."
      },
      {
        tipo: "opcion",
        enunciado: "3. ¿Qué representa el prosumidor en el contexto energético?",
        opciones: [
          "Solo produce energía",
          "Solo consume energía",
          "Produce y consume energía",
          "Es un auditor energético"
        ],
        correcta: "Produce y consume energía",
        explicacion: "El prosumidor participa activamente generando y consumiendo su propia energía."
      },
      {
        tipo: "opcion",
        enunciado: "4. ¿Qué porcentaje del consumo final representaba la biomasa en Paraguay según el material?",
        opciones: ["16%", "27%", "38%", "46%"],
        correcta: "46%",
        explicacion: "La biomasa representaba el 46% del consumo final, especialmente en zonas rurales."
      },
      {
        tipo: "opcion",
        enunciado: "5. ¿Cuál es una aplicación de la eficiencia energética en la industria?",
        opciones: [
          "Aumentar horas de funcionamiento",
          "Uso de transformadores",
          "Uso de variadores de velocidad",
          "Ampliar el consumo de biomasa"
        ],
        correcta: "Uso de variadores de velocidad",
        explicacion: "Permiten adaptar el consumo a la necesidad real, reduciendo energía desperdiciada."
      },
      {
        tipo: "opcion",
        enunciado: "6. ¿Qué es la cogeneración?",
        opciones: [
          "El uso exclusivo de energía hidráulica",
          "El uso de gas para calefacción",
          "Aprovechar calor residual para otros fines",
          "Uso de energía nuclear y solar"
        ],
        correcta: "Aprovechar calor residual para otros fines",
        explicacion: "La cogeneración reutiliza calor generado en procesos eléctricos."
      },
      {
        tipo: "opcion",
        enunciado: "7. ¿Qué tipo de energía es la electricidad según su clasificación?",
        opciones: ["Primaria", "Secundaria", "Final", "Renovable"],
        correcta: "Final",
        explicacion: "La electricidad es una forma de energía final, lista para el consumo."
      },
      {
        tipo: "opcion",
        enunciado: "8. ¿Qué permite un diagnóstico energético?",
        opciones: [
          "Aumentar la producción de energía",
          "Eliminar las fuentes renovables",
          "Detección de desperdicios y modernización",
          "Ampliar el consumo residencial"
        ],
        correcta: "Detección de desperdicios y modernización",
        explicacion: "Permite identificar ineficiencias y mejorar el uso energético."
      },
      {
        tipo: "opcion",
        enunciado: "9. ¿Cuál fue la cobertura eléctrica en Paraguay en 2009?",
        opciones: ["88%", "92%", "98%", "100%"],
        correcta: "98%",
        explicacion: "En 2009, Paraguay alcanzó el 98% de cobertura eléctrica en hogares."
      },
      {
        tipo: "opcion",
        enunciado: "10. ¿Qué ley establece las bases de la política energética paraguaya a 25 años?",
        opciones: ["Ley 3009/06", "Ley 6092/16", "Ley de Energía Verde", "Ley de Electricidad Nacional"],
        correcta: "Ley 6092/16",
        explicacion: "La Ley 6092/16 define una estrategia energética a largo plazo."
      },
      {
        tipo: "vf",
        enunciado: "11. La energía primaria se refiere a recursos como petróleo, gas y renovables.",
        correcta: true,
        explicacion: "Son fuentes naturales sin transformar, base de la energía secundaria."
      },
      {
        tipo: "vf",
        enunciado: "12. El transformador puede funcionar con corriente continua.",
        correcta: false,
        explicacion: "Solo funciona con corriente alterna por el principio de inducción electromagnética."
      },
      {
        tipo: "vf",
        enunciado: "13. En la industria, la cogeneración permite reducir costos y emisiones.",
        correcta: true,
        explicacion: "Aprovechar el calor residual mejora eficiencia y reduce contaminación."
      },
      {
        tipo: "vf",
        enunciado: "14. El dióxido de carbono (CO₂) es un gas de efecto invernadero producido por la actividad humana.",
        correcta: true,
        explicacion: "Principal GEI antropogénico, emitido al quemar combustibles fósiles."
      },
      {
        tipo: "vf",
        enunciado: "15. La eficiencia energética solo se aplica a electrodomésticos.",
        correcta: false,
        explicacion: "Se aplica a viviendas, industrias, transporte, etc., no solo a equipos domésticos."
      },
      {
        tipo: "vf",
        enunciado: "16. Las turbinas eólicas modernas pueden generar más de 7 MW.",
        correcta: true,
        explicacion: "Dependiendo del tamaño y condiciones del viento, alcanzan hasta 7,5 MW."
      },
      {
        tipo: "vf",
        enunciado: "17. El uso de gas natural en Paraguay está ampliamente desarrollado.",
        correcta: false,
        explicacion: "Todavía no se comercializa a gran escala en el país."
      }
    ]
  }
  
];

export default examenes;
