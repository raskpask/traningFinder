import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

import { connect } from 'react-redux';
// import { Text, View } from '../../components/Themed'
import { addPosition } from '../../js/actions/index';

function mapDispatchToProps(dispatch) {
    return {
        setLocation: location => dispatch(addPosition(location))
    };
}

class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }
    onChangeText(text) {
        console.log(text)
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>Title</Text>
                    <TextInput
                        // style={styles.input}
                        onChangeText={this.onChangeText}
                        value={this.state.title}
                    />
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            </View>
        );
    }
}

export default connect()(AddEvent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
