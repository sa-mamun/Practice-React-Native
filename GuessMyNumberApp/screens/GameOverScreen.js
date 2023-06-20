import { View, Text, StyleSheet } from "react-native";


function GameOverScreen() {
    return (
        <View styles={styles.container}>
            <Text>Game Over !!</Text>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});