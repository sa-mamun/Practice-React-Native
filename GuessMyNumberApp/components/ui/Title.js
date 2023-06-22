import { StyleSheet, Text } from "react-native";

function Title({children, style}) {
    return (
        <Text style={[styles.title, style]}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        // fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
});