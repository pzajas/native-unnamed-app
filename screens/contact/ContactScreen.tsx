import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

export const ContactScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // Implement your login logic here
    console.log('Login Data:', data)
    // You may want to add authentication logic here
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screenContainer}>
        <Text>Login Form</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
            />
          )}
          name="username"
          rules={{ required: 'Username is required' }}
          defaultValue=""
        />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
            />
          )}
          name="password"
          rules={{ required: 'Password is required' }}
          defaultValue=""
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
})
