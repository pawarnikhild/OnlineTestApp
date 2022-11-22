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
    customTextInput: {
        height: 50,
        marginVertical: 8,
        fontSize: FontSize.small,
    },
    checkBoxView: {
        flexDirection: 'row',
        margin: 8
    },
    checkBoxText: {
        // textAlign: 'justify',
        color: AppColor.black,
        fontSize: FontSize.small
    }
});