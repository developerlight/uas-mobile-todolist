import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const Card = ({img, text}) => {
    return (  
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <Image 
                    source={img} 
                    style={{width: 80, height: 80, alignSelf: 'center'}}/>
                <Text style={styles.txt}>{text}</Text>
                
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    card: {
        padding: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    cardBody: {
        padding: 5,
        width: 100,
    },
    txt: {
        textAlign: 'center',
        marginTop: 5,
    }
})

export default Card;