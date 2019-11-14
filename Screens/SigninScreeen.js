//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export class SigninScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}>Go To HomeScreen</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
});
