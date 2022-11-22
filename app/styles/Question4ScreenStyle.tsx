import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstant";

export default StyleSheet.create({
    checkBoxText: {
        // textAlign: 'justify',
        color: AppColor.black,
        fontSize: FontSize.small,
        marginBottom: 4,
    },
    
    container: {
      flex: 1,
      backgroundColor: AppColor.white // Default color is not white
      // backgroundColor: 'red'
    },
    
    contentContainerStyle: {
      padding: 10,
    //   paddingTop: 40,
    },
    itemsContainerStyle: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    zonesContainerStyle: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    dragZoneStyle: {
        borderColor: "#F39200",
        borderWidth: 1,
        width: "47%",
        padding: 10,
        minHeight: 90,
        marginVertical: 15,
      },
      dragZoneTextStyle: {
        // position: "absolute",
        // zIndex: 0,
        // alignSelf: "flex-start",
        // top: "5%",
        // opacity: 0.2,
        color: AppColor.black,
        fontSize: FontSize.small,
      },
    dragItemStyle: {
      borderColor: "#F39200",
      borderWidth: 1,
      width: "47%",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 4,
      backgroundColor: "#F5F5F5",
      padding: 8,
    },
    dragItemTextStyle: {
      color: "#011F3B",
      fontWeight: "700",
      textAlign: "center",
    },
    itemsInZoneStyle: {
        width: "100%",
    },    
    customButton: {
      padding: 6,
      marginTop: 4
    }
    
  });