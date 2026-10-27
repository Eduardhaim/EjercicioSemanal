
import { View, Button, Alert } from 'react-native';

export default function BotonCalcular({ resultado }: any) {

  return (
    <View>
      <Button
        title="Ver resultado"
        onPress={() => Alert.alert(
          "Calificacion",
          resultado.ratingDescription
        )}
      />
    </View>
  );
}
