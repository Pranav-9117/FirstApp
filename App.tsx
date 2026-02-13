import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";

import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Spotify from "./assets/spotify.svg";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.BfhWquOWuA8ZFjTHqoXdHQHaEj?w=275&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Alan Walker</Text>
        <Text style={styles.subtitle}>Mindfulness and wellbeing</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Last Album</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Blog</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Website</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Spotify</Text>
        </Pressable>

        <View style={styles.socialRow}>
          <Facebook width={35} height={35} fill="#fff" />
          <Instagram width={35} height={35} fill="#fff" />
          <Spotify width={35} height={35} fill="#1DB954" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "85%",
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#111",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 25,
  },

  button: {
    width: "100%",
    backgroundColor: "#222",
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#444",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },

  socialRow: {
    flexDirection: "row",
    marginTop: 25,
    width: "60%",
    justifyContent: "space-between",
  },
});
