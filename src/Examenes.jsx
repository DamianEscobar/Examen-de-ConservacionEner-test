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
  },
  {
    titulo: "Examen 3",
    preguntas: [
      {
        tipo: "opcion",
        enunciado: "1. ¿Qué define la primera ley de la termodinámica?",
        opciones: [
          "La degradación de energía",
          "La imposibilidad del movimiento perpetuo",
          "La conservación de la energía interna y el trabajo",
          "El aumento de la entropía"
        ],
        correcta: "La conservación de la energía interna y el trabajo",
        explicacion: "Establece que el calor suministrado se reparte entre el trabajo realizado y el cambio en energía interna."
      },
      {
        tipo: "opcion",
        enunciado: "2. ¿Qué relación expresa la fórmula Q = ΔU − W?",
        opciones: [
          "La eficiencia de motores",
          "La transferencia de energía térmica",
          "La ley de conservación del momento",
          "La conversión de energía cinética"
        ],
        correcta: "La transferencia de energía térmica",
        explicacion: "Describe cómo el calor se transforma en energía interna y trabajo en un sistema térmico."
      },
      {
        tipo: "opcion",
        enunciado: "3. ¿Qué fuerza rige el funcionamiento de un motor eléctrico?",
        opciones: ["Faraday", "Newton", "Laplace", "Ampère"],
        correcta: "Laplace",
        explicacion: "El motor convierte energía eléctrica en mecánica por la ley de Laplace: F ∝ iL × B."
      },
      {
        tipo: "opcion",
        enunciado: "4. ¿Cuál es el costo promedio nacional de electricidad en Paraguay (aprox.)?",
        opciones: ["US¢ 2,57", "US¢ 5,00", "US¢ 7,60", "US¢ 10,00"],
        correcta: "US¢ 7,60",
        explicacion: "Según datos del documento, la tarifa promedio es de US¢ 7,6/kWh."
      },
      {
        tipo: "opcion",
        enunciado: "5. ¿Qué energía es considerada secundaria?",
        opciones: ["Petróleo", "Electricidad", "Gas natural", "Carbón"],
        correcta: "Electricidad",
        explicacion: "Es un producto transformado a partir de fuentes primarias."
      },
      {
        tipo: "opcion",
        enunciado: "6. ¿Qué significa el desarrollo sostenible?",
        opciones: [
          "Crecimiento económico ilimitado",
          "Uso intensivo de recursos",
          "Satisfacer necesidades actuales sin comprometer las futuras",
          "Producción masiva con pocos recursos"
        ],
        correcta: "Satisfacer necesidades actuales sin comprometer las futuras",
        explicacion: "Es un principio base en políticas energéticas sostenibles."
      },
      {
        tipo: "opcion",
        enunciado: "7. ¿Qué ley regula la cogeneración y autogeneración en Paraguay?",
        opciones: ["Ley 3009/06", "Ley 9829/12", "Ley 6092/16", "Ley 1325/05"],
        correcta: "Ley 3009/06",
        explicacion: "Establece el régimen legal para estos métodos de producción eléctrica."
      },
      {
        tipo: "opcion",
        enunciado: "8. ¿Qué equipo convierte energía mecánica en eléctrica?",
        opciones: ["Motor", "Transformador", "Condensador", "Generador"],
        correcta: "Generador",
        explicacion: "Por inducción electromagnética, transforma energía mecánica en eléctrica."
      },
      {
        tipo: "opcion",
        enunciado: "9. ¿Qué porcentaje del potencial hidroeléctrico paraguayo es aprovechable económicamente?",
        opciones: ["50%", "70%", "78%", "101 TWh/año"],
        correcta: "101 TWh/año",
        explicacion: "De los 130 TWh/año disponibles, 101 TWh/año pueden ser explotados económicamente."
      },
      {
        tipo: "opcion",
        enunciado: "10. ¿Qué representa el término ∂μTμν=0 en relatividad?",
        opciones: [
          "Una ley de gravedad",
          "La continuidad de masa",
          "Conservación de energía-momento",
          "Transformación de energía térmica"
        ],
        correcta: "Conservación de energía-momento",
        explicacion: "Indica que la energía y el momento se conservan a nivel relativista."
      },
      {
        tipo: "vf",
        enunciado: "11. Los generadores trifásicos usan tres bobinas a 120°.",
        correcta: true,
        explicacion: "Esto permite la producción de corriente alterna desfasada y más estable."
      },
      {
        tipo: "vf",
        enunciado: "12. La energía final es aquella directamente suministrada al usuario.",
        correcta: true,
        explicacion: "Ejemplo: la electricidad que llega al enchufe de tu casa."
      },
      {
        tipo: "vf",
        enunciado: "13. El calor latente se recupera en calderas de condensación.",
        correcta: true,
        explicacion: "Estas calderas aumentan eficiencia energética al reutilizar calor de gases."
      },
      {
        tipo: "vf",
        enunciado: "14. En relatividad general siempre se conserva la energía total.",
        correcta: false,
        explicacion: "No existe una ley global de conservación en todos los espacios-tiempo."
      },
      {
        tipo: "vf",
        enunciado: "15. Las pérdidas eléctricas en Paraguay eran del 30,9 % en 2012.",
        correcta: true,
        explicacion: "El material menciona ese porcentaje como cifra oficial de pérdidas."
      },
      {
        tipo: "vf",
        enunciado: "16. El desarrollo energético no está relacionado con el bienestar social.",
        correcta: false,
        explicacion: "Sí lo está: mayor acceso a energía mejora la calidad de vida."
      },
      {
        tipo: "vf",
        enunciado: "17. La energía de campos eléctricos y magnéticos se conserva si están confinados.",
        correcta: true,
        explicacion: "La energía ∝ E² + B² se mantiene constante en campos cerrados."
      }
    ]
  },
  {
    titulo: "Examen 4",
    preguntas: [
      {
        tipo: "opcion",
        enunciado: "1. ¿Cuál es la fuente principal de electricidad en Paraguay?",
        opciones: ["Biomasa", "Gas natural", "Hidroelectricidad", "Energía solar"],
        correcta: "Hidroelectricidad",
        explicacion: "El país obtiene el 99,99% de su electricidad de fuentes hidroeléctricas."
      },
      {
        tipo: "opcion",
        enunciado: "2. ¿Qué central hidroeléctrica tiene mayor capacidad en Paraguay?",
        opciones: ["Acaray", "Yacyretá", "Itaipú", "Ñacunday"],
        correcta: "Itaipú",
        explicacion: "Itaipú aporta 7.000 MW de capacidad, compartida con Brasil."
      },
      {
        tipo: "opcion",
        enunciado: "3. ¿Cuál fue el déficit de ingresos por pérdidas eléctricas en 2012?",
        opciones: ["US$ 100 millones", "US$ 266 millones", "US$ 50 millones", "US$ 500 millones"],
        correcta: "US$ 266 millones",
        explicacion: "El documento señala pérdidas por ese valor en el sistema eléctrico."
      },
      {
        tipo: "opcion",
        enunciado: "4. ¿Qué sistema se usa para reducir consumo en motores eléctricos industriales?",
        opciones: ["Baterías recargables", "Motores asincrónicos", "Variadores de velocidad", "Acumuladores"],
        correcta: "Variadores de velocidad",
        explicacion: "Permiten adaptar el consumo energético según la necesidad del proceso."
      },
      {
        tipo: "opcion",
        enunciado: "5. ¿Cuál de estas fuentes no se comercializa a gran escala aún en Paraguay?",
        opciones: ["Hidroelectricidad", "Gas natural", "Biomasa", "Energía eólica"],
        correcta: "Gas natural",
        explicacion: "Aún no existe una red de distribución masiva."
      },
      {
        tipo: "opcion",
        enunciado: "6. ¿Qué velocidad media del viento tiene el Chaco paraguayo?",
        opciones: ["3 m/s", "4,2 m/s", "5,5 m/s", "6,8 m/s"],
        correcta: "5,5 m/s",
        explicacion: "Especialmente en Boquerón y Alto Paraguay, según el documento."
      },
      {
        tipo: "opcion",
        enunciado: "7. ¿Qué política fue establecida por el Decreto 6092/16?",
        opciones: [
          "Nacionalización eléctrica",
          "Política Energética a 25 años",
          "Reducción del IVA energético",
          "Leyes de eficiencia para transporte"
        ],
        correcta: "Política Energética a 25 años",
        explicacion: "Define estrategias a largo plazo con participación pública y privada."
      },
      {
        tipo: "opcion",
        enunciado: "8. ¿Qué tipo de energía tiene un rendimiento de hasta 90 % en calderas comerciales?",
        opciones: ["Solar", "Hidráulica", "Gas natural", "Eólica"],
        correcta: "Gas natural",
        explicacion: "En calderas de condensación, alcanza rendimientos altos gracias al calor latente."
      },
      {
        tipo: "opcion",
        enunciado: "9. ¿Qué sector consume más electricidad en Paraguay?",
        opciones: ["Comercial", "Industrial", "Residencial", "Agrícola"],
        correcta: "Residencial",
        explicacion: "Representa el 42,3% del consumo total, según el informe."
      },
      {
        tipo: "opcion",
        enunciado: "10. ¿Qué es la entropía?",
        opciones: [
          "Una forma de energía térmica",
          "La tendencia al orden",
          "Medida del desorden y dispersión de energía",
          "Cantidad de energía mecánica útil"
        ],
        correcta: "Medida del desorden y dispersión de energía",
        explicacion: "La segunda ley de la termodinámica describe su aumento en procesos irreversibles."
      },
      {
        tipo: "vf",
        enunciado: "11. El gas natural tiene alta pureza y poder calorífico.",
        correcta: true,
        explicacion: "Es útil en procesos industriales como la cerámica o metalurgia."
      },
      {
        tipo: "vf",
        enunciado: "12. La electricidad es una energía primaria.",
        correcta: false,
        explicacion: "Es secundaria, ya que se obtiene de otras fuentes."
      },
      {
        tipo: "vf",
        enunciado: "13. El cambio climático es un fenómeno de corto plazo.",
        correcta: false,
        explicacion: "Implica variaciones en patrones climáticos a largo plazo."
      },
      {
        tipo: "vf",
        enunciado: "14. El hidrógeno ya se usa de forma masiva en Paraguay.",
        correcta: false,
        explicacion: "Aún no es una fuente de energía comercializada en el país."
      },
      {
        tipo: "vf",
        enunciado: "15. Los transformadores trabajan con corriente alterna.",
        correcta: true,
        explicacion: "Funcionan por inducción electromagnética, que requiere CA."
      },
      {
        tipo: "vf",
        enunciado: "16. La energía nuclear es parte de la matriz energética paraguaya.",
        correcta: false,
        explicacion: "No se utiliza en el país según los datos del resumen."
      },
      {
        tipo: "vf",
        enunciado: "17. El teorema de Noether vincula simetrías con conservación de energía.",
        correcta: true,
        explicacion: "En física lagrangiana, si el sistema no depende del tiempo, se conserva la energía."
      }
    ]
  }
  
  
  
];

export default examenes;
