import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo(props) {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style = {styles.input}
                placeholder = 'new todo...'
                onChangeText = {changeHandler}
            />
						<Button onPress={() => props.onPress(text)} title='add todo' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})