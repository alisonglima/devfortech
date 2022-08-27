import { useState } from "react";
import { Text, View, TouchableOpacity, Modal, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";

import styles from "./styles";

function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Sem permissões</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Modal animationType="slide">
          <Text>É necessário da permissões para acessar recursos do seu dispositivo</Text>
          <Button title="Permitir" onPress={requestPermission} />
        </Modal>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;
