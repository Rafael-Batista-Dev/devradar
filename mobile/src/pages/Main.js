import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -7.2333152, longitude: -39.3082297 }}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://avatars2.githubusercontent.com/u/3390598?s=460&u=37794a7ca07f7452ea45b32b0421f2722907ab96&v=4"
            }}
          />
          <Callout
            onPress={() => {
              navigation.navigate("Profile", {
                github_username: "KlausDevWalker"
              });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.devName}>Klaus Dev Walker</Text>
              <Text style={styles.devBio}>Sou um dev topo dos tops</Text>
              <Text style={styles.devTechs}>React, React Native</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={20} color={"#FFF"} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: "#FFF"
  },

  callout: {
    width: 260
  },

  devName: {
    fontWeight: "bold",
    fontSize: 16
  },

  devBio: {
    color: "#666",
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  },

  searchForm: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    display: "flex",
    flexDirection: "row"
  },

  searchInput: {
    marginBottom: 30,
    flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    color: "#333",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 3
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#8E4DFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  }
});

export default Main;
