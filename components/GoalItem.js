import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goadText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: { 
        borderWidth: 1,
        borderColor: '#A8D3DA',
        backgroundColor: '#A8D3DA',
        margin: 5,
        borderRadius: 5
    },
    goadText: {
        color: 'black',
        padding: 8,
    }
});