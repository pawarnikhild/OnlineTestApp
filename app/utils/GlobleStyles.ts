import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "./StyleConstant";

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: AppColor.white,
        padding: 10,
    },
    questionText: {
        marginTop: 10,
        fontSize: FontSize.medium,
        color: AppColor.black,
    },
});