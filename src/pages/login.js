import { ActivityIndicator, Alert, Button, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const Auth = FIREBASE_AUTH

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(Auth, user, password)
            console.log(response)
        } catch (error) {
            Alert.alert('sign in failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(Auth, user, password)
            console.log(response)
            Alert.alert('check your email')
        } catch (error) {
            Alert.alert('sign up failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return ( 
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.image}>
                    <Image source={require('../assets/login.jpg')} style={{width: 220, height: 220, alignSelf: 'center'}}/>
                </View>
                <View style={styles.body}>
                    <Text>Username</Text>
                    <TextInput 
                        placeholder="Enter your username" 
                        style={styles.textInput}
                        value={user}
                        onChangeText={(text) => setUser(text)}
                        />
                    <Text>Password</Text>
                    <TextInput 
                        placeholder="Enter your password" 
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        />
                    {
                        loading ?  <ActivityIndicator size="large" color="#0000ff" /> 
                        : (
                            <View>
                                <Button title="Login" onPress={signIn} />
                                <Text>Dont have a account?</Text>
                                <Pressable onPress={signUp}>
                                    <Text style={{color: 'blue'}}>Create new account</Text>
                                </Pressable>
                            </View>
                        )
                    }
                </View>
            </KeyboardAvoidingView>

        </View>
     );
}
 
const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        marginTop: 50,
    },
    body: {
        padding: 20,
    },
    textInput: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
})

export default Login;