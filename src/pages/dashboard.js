import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import Card from "../components/card";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../config/firebase";

const Dashboard = ({setUser, user}) => {
    const Navigation = useNavigation();
    const name = user.email.split('@')[0]

    const goToCreateTask = () => {
        Navigation.navigate('Create Todos')
    }

    const goToGetTask = () => {
        Navigation.navigate('Get Todos')
    }

    const goToRiwayat = () => {
        Navigation.navigate('Riwayat Todos')
    }

    const logout = () => {
        setUser(null)
        FIREBASE_AUTH.signOut();
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Dashboard</Text>
                </View>
                <View style={styles.icon}>
                    <Pressable onPress={goToRiwayat}>
                        <Image source={require('../assets/riwayat.png')} style={{width: 30, height: 30}}/>
                    </Pressable>
                    <Pressable onPress={logout}>
                        <Image source={require('../assets/logout.png')} style={{width: 30, height: 30}}/>
                    </Pressable>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.user}>Hello, {name}</Text>
                <Text>Welcome to the Dashboard</Text>
                <View style={styles.line}/>
                <View >
                    <Image source={require('../assets/dashboard.jpg')} style={styles.img}/>
                </View>
                <View style={styles.line}/>
                <Text style={styles.txt}>Silahkan pilih menu di bawah</Text>
                <View style={styles.cards}>
                    <Pressable onPress={goToCreateTask}>
                        <Card img={require('../assets/create-tugas.png')} text={'Buat Tugas'}/>
                    </Pressable>
                    <Pressable onPress={goToGetTask}>
                        <Card img={require('../assets/lihat-tugas.png')} text={'Lihat Tugas'}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 20,   
    },
    header : {
        padding: 20,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        flexDirection: 'row',
        gap: 20,
    },
    img : {
        width: '100%', 
        height: 200, 
        alignSelf: 'center'
    },
    body: {
        padding: 20,
        width: '100%',
        
    },
    user: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    line : {
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 20,
    },
    txt : {
        fontSize: 16,
    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 20,
        marginTop: 20,
    }
})

export default Dashboard;