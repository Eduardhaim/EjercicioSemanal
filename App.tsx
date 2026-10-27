

import { View, Text } from 'react-native';
import BotonCalcular from './components/BotonCalcular';

export default function App() {

  function calculateExercises(horas: number[], objetivo: number) {

    let diasSemana = horas.length;
    let diasEntrenamiento = 0;
    let totalHoras = 0;

    for (let i = 0; i < horas.length; i++) {
      totalHoras = totalHoras + horas[i];

      if (horas[i] > 0) {
        diasEntrenamiento++;
      }
    }

    let promedio = totalHoras / diasSemana;
    let cumplio = promedio >= objetivo;

    let calificacion = 1;
    let descripcion = "Ocupa mas esfuerzo";

    if (promedio >= objetivo) {
      calificacion = 3;
      descripcion = "Objetivo alcanzado";
    } else if (promedio >= objetivo / 2) {
      calificacion = 2;
      descripcion = "Podria mejorar";
    }

    return {
      periodLength: diasSemana,
      trainingDays: diasEntrenamiento,
      success: cumplio,
      rating: calificacion,
      ratingDescription: descripcion,
      target: objetivo,
      average: promedio
    };
  }

  let resultado = calculateExercises(
    [3, 0, 2, 4.5, 0, 3, 1],
    2
  );

  console.log(resultado);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

      <Text>Ejercicio Semanal</Text>

      <Text>Dias de la semana: {resultado.periodLength}</Text>
      <Text>Dias entrenados: {resultado.trainingDays}</Text>
      <Text>Objetivo: {resultado.target}</Text>
      <Text>Promedio: {resultado.average.toFixed(2)}</Text>
      <Text>Calificacion: {resultado.rating}</Text>
      <Text>{resultado.ratingDescription}</Text>
      <Text>Cumplio: {resultado.success ? "Si" : "No"}</Text>

      <BotonCalcular resultado={resultado} />

    </View>
  );
}
