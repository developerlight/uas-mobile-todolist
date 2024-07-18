import { Button, FlatList, Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import CardTask from "../components/cardTask";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../config/firebase";
import parseDate from "../utils/parseDate";

const GetTask = () => {
    const [task, setTask] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const getData = await getDocs(collection(FIREBASE_DB, 'task'));
            const tasks = getData.docs.map(doc => doc.data());
            tasks.forEach(task => task.date = new Date(task.date).toLocaleDateString());
            
            const filteredData = tasks.filter(item => parseDate(item.date) >= today);
            setTask(filteredData);
        };
    
        fetchData();
    }, [])
    
    return (  
        <View style={styles.container}>
            <Text style={styles.text}>Jumlah tugas anda : {task.length}</Text>
            <View style={styles.task}> 
                <FlatList 
                    data={task}
                    renderItem={({item}) => (
                        <CardTask 
                            title={item.title}
                            description={item.description}
                            date={item.date}
                        />
                    )}
                />
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header : {
        padding: 20,
        flexDirection: 'row',
        height: 'auto',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        flexDirection: 'row',
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    task : {
        flex: 1,
        margin: 20
    }
});

export default GetTask;