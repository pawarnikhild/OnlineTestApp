import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstant";

export default StyleSheet.create({
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    checkBoxText: {
        color: AppColor.black,
        fontSize: FontSize.small
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    submitTestButton: {
        padding: 8,
        marginTop: 4        
    }
});