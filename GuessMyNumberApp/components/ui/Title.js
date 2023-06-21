import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/Colors";

function Title({children, style}) {
    return (
        <Text style={[styles.title, style]}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
});