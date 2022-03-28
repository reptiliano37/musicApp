import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    margin: 10,
    fontStyle: "italic",
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    marginLeft: 10,
  },
  buttonStyle: {
    borderRadius: 10,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  buttonModal: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 50,
  },
  textStyleButtonModal: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  item: {
    backgroundColor: "black",
    borderWidth: 4,
    borderColor: "#18df18",
    borderRadius: 30,
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
  picker: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
  },
  dropdownBtnStyle: {
    flex: 1,
    height: 50,
    color: "#05375a",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#05375a",
  },
  dropdownDropdownStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
  },
  dropdownRowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: {
    color: "#05375a",
    textAlign: "center",
  },
  buttonTextPicker: {
    color: "#05375a",
    textAlign: "center",
  },
});

export default styles;
