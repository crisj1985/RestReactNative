import { Alert } from "react-native";

export const recuperarTodos = async() => {
    console.log("ingreso");

    try {
        const response = await fetch('http://192.168.1.3:1337/productos');
        const json = await response.json();
        if (response.ok) {
            let productos = json;
            console.log("cantidad", productos.length);
            console.log("producto1", productos[0]);
        } else {
            console.log("error:", json.message);
        }

        // console.log(json);
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }


}

export const crearProducto = async(producto) => {
    try {
        let hs = new Headers();
        hs.append("Content-Type", 'application/json');
        let options = {
            method: 'POST',
            headers: hs,
            body: JSON.stringify(producto)
        }
        const response = await fetch('http://192.168.1.3:1337/productos', options);
        const json = await response.json();
        if (response.ok) {
            let producto = json;
            console.log("producto:", producto);
        } else {
            console.log("error:", json.message);
        }
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }
}

export const actualizarProducto = async(producto) => {
    try {
        let hs = new Headers();
        hs.append("Content-Type", 'application/json');
        let options = {
            method: 'PUT',
            headers: hs,
            body: JSON.stringify(producto)
        }
        const response = await fetch('http://192.168.1.3:1337/productos/' + producto.id, options);
        const json = await response.json();
        if (response.ok) {
            let producto = json;
            Alert.alert("producto:", producto);
        } else {
            console.log("error:", json.message);
        }
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }
}

export const eliminarProducto = async(producto) => {
    try {
        let hs = new Headers();
        hs.append("Content-Type", 'application/json');
        let options = {
            method: 'DELETE',
            headers: hs,
            body: JSON.stringify(producto)
        }
        const response = await fetch('http://192.168.1.3:1337/productos/' + producto.id, options);
        const json = await response.json();
        if (response.ok) {
            let producto = json;
            console.log("producto:", producto);
        } else {
            console.log("error:", json.message);
        }
    } catch (error) {
        Alert.alert("error al consumir WS", error.message)
    }
}