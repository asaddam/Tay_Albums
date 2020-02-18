import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const styles = { 
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch', 
        backgroundColor: '#fff', 
        borderRadius: 5, 
        borderWidth: 1,
        borderColor: 'blue', 
        marginHorizotal: 5
    },
    textStyle: {
        alignSelf: 'center', 
        color: 'pink', 
        fontSize: 16, 
        fontWeight: '600', 
        paddingVertical: 10
    } 
};

export default (props) => {
    return (
    <TouchableOpacity style={styles.buttonStyle}
        onPress={props.onPress}
    >
            <Text style={styles.textStyle}> 
                {props.children} 
            </Text>
    </TouchableOpacity>
    )
}