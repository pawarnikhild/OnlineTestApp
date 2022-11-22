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
        // height: 50,
        marginVertical: 8,
        fontSize: FontSize.small,

    },
    radioButtonView: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '40%',
        marginBottom: 40,
        // height: 200
    },
    radioButtonText: {
        fontSize: FontSize.small,
        color: AppColor.black
    },
    customButton: {
        padding: 8,
    }

    
});