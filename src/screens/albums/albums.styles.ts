import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonStyle: {
    // backgroundColor: "white",
    // borderWidth: 1,
    borderColor: "cyan",
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});

export default styles;
