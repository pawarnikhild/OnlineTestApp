import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstant";

export default StyleSheet.create({
    heading: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: FontSize.heading,
        color: AppColor.black
    },
    customTextInput: {
        marginVertical: 8,
    },
    radioButtonView: {
        marginBottom: 20,
    },
    normalText: {
        fontSize: FontSize.small,
        color: AppColor.black
    },
    customButton: {
        padding: 8,
    }
});