import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../../Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const auth = FIREBASE_AUTH

  const handleLoginUser = async () => {
    setLoading(true)

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleRegisterUser = async () => {
    setLoading(true)

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.screenContainer}>
      <Text>Login Screen</Text>
      <KeyboardAvoidingView behavior="padding">
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {loading ? (
          <ActivityIndicator size={'large'} color={'steelblue'} />
        ) : (
          <>
            <Button title="Login" onPress={handleLoginUser} />
            <Button title="Register" onPress={handleRegisterUser} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
})
