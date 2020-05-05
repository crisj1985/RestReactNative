import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { recuperarTodos, crearProducto, actualizarProducto, eliminarProducto} from "./Servicios/ServicioProductos"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
      title="GET"
       onPress = {()=>{
         recuperarTodos();
       }}
      />
      <Button
        title="POST"
        onPress={() => {
          crearProducto({nombre:"nuevo app", precio:233})
        }}
      />
      <Button
        title="PUT"
        onPress={() => {
          actualizarProducto({ id:6,nombre: "actualizado", precio: 1000 })
        }}
      />
      <Button
        title="DELETE"
        onPress={() => {
          eliminarProducto({ id: 6})
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
