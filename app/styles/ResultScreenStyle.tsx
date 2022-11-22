import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstant";

export default StyleSheet.create({
    heading: {
        // marginVertical: 20,
        textAlign: 'center',
        fontSize: FontSize.heading,
        color: AppColor.black
    },
    pieChart: {
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'center',
    },
    pie: {
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'center',
    },
    text: {
        margin: 4,
        textAlign: 'center',
        fontSize: FontSize.medium,
        color: AppColor.black
    },
    customButton: {
        marginTop: 40,
        padding: 8
    }
    
});