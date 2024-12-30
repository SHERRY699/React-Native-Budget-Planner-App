import { Colors } from "@/constants/Color";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Login = (): JSX.Element | null => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/Hero.jpeg")}
      />
      <View style={styles.content}>
        <Text style={styles.heading}>Personal Budget Planner</Text>
        <Text style={styles.subheading}>
          stay on track , event by event .your personnel budget planner app
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: Colors.primary, fontSize: 15 }}>
            Login/SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 400,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 20,
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.primary,
    marginTop: -30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTopEndRadius: 30,
    gap: 20,
    borderTopLeftRadius: 30,
  },
  heading: {
    fontFamily: "robotoBold",
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },
  subheading: {
    fontFamily: "robotos",
    fontSize: 15,
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
  },
  btn: {
    borderRadius: 50,
    padding: 20,
    paddingHorizontal: 100,
    backgroundColor: "white",
  },
});
