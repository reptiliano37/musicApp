import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonStyle: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  linearGradientStyle: {
    width: 100,
    height: 100,
    color: "#0e18e3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textLinearGradient: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
