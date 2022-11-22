import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstant";

export default StyleSheet.create({
    radioButtonView: {
        // marginBottom: 8,
        // marginVertical: 8,
        // flexDirection: 'row',
        // alignItems: 'center'
    },
    radioButtonText: {
        width: '90%',
        fontSize: FontSize.small,
        color: AppColor.black
    },
    customButton: {
        padding: 12,
    }
});
