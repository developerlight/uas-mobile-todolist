import { Button, FlatList, Image, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";


const ModalUpdate = ({modalVisible, setModalVisible}) => {
    return (  
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.close}>
                        <Text style={styles.textStyle}>X</Text>
                    </View>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Image source={require('../assets/dots.png')} style={{width: 20, height: 20}}/>
            </Pressable>
            </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      wit
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    close: {
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    button: {
      borderRadius: 20,
    },
    buttonOpen: {
      backgroundColor: '#f5f5f5',
    },
    buttonClose: {
      backgroundColor: 'white',
      padding: 10,
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  
 
export default ModalUpdate;