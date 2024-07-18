import { Button, FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

const CardRiwayat = ({title, date}) => {
    return (  
        <View style={style.container}>
            <View style={style.img}>
                <Image 
                    source={require('../assets/task.png')}
                    style={{width: 80, height: 80, alignSelf: 'center'}}/>
                <Text>Tugas anda</Text>
            </View>
            <View style={style.right}>
                <Text style={style.title}>{title}</Text>
                <Text>Selesai pada tanggal :</Text>
                <Text>{date}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container : {
        width: '100%',
        height: 'auto',
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10, 
        borderRadius: 5,
        flexDirection: 'row',
    },
    img: {
        width: 80,
        height: 80,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'semibold',
        marginTop: 5,
    },
    right : {
        marginLeft: 20,
        width: 180,
        backgroundColor: '#f5f5f5',
    }
})
 
export default CardRiwayat;