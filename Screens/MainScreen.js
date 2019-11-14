//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';


// create a component
export class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Signin')
                    }}>Sign In</Text>
                <Text style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Signup')
                    }}>Sign Up</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#3498db',
        color: '#ecf0f1',
        padding: 10,
        margin: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#3498db'

    }
});

