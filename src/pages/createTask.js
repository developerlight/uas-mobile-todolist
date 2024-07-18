import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FormatDate from "../utils/formatDate";
import {
  addDoc,
  collection,
  FIREBASE_DB,
} from "../config/firebase";

const CreateTask = ({user}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState([{}]);
  const name = user.email.split("@")[0];

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  const checkValue = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, "task"), {
        title: title,
        description: description,
        date: date.toISOString(),
      });
      setTask([...task, docRef]);
      Alert.alert("Success", "Todos created successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.user}>Hello, {name}</Text>
          <Text>Silahkan isi form di bawah ini</Text>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.body}>
        <View >
          <Image source={require('../assets/bg-create.jpg')} style={styles.img}/>
        </View>
        <Text style={styles.txt}>Judul Tugas</Text>
        <TextInput
          type="text"
          placeholder="Masukkan judul tugas"
          value={title}
          style={styles.input}
          onChangeText={(value) => handleTitleChange(value)}
        />
        <Text style={styles.txt}>Deskripsi Tugas</Text>
        <TextInput
          type="text"
          placeholder="Masukkan deskripsi tugas"
          value={description}
          style={styles.input}
          onChangeText={(value) => handleDescriptionChange(value)}
        />
        <View style={styles.date}>
          <Text style={styles.txt}>Pengumpulan : {FormatDate(date)}</Text>
          <Pressable onPress={showMode}>
            <Image
              source={require("../assets/calendar.png")}
              style={{ width: 30, height: 30 }}
            />
          </Pressable>
          {show && (
            <RNDateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
        <View style={styles.button}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Button title="Submit" onPress={checkValue} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingTop: 10
  },
  header: {
    flexDirection: "row",
    height: "auto",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  img : {
    width: '100%', 
    height: 200, 
    alignSelf: 'center',
    marginBottom: 20
},
  icon: {
    flexDirection: "row",
    gap: 20,
  },
  body: {
    width: "100%",
  },
  user: {
    fontSize: 18,
    fontWeight: "bold",
  },
  line: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    marginVertical: 10,
  },
  txt: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    marginTop: 10,
  },
  button: {
    marginVertical: 40,
  },
});
export default CreateTask;
