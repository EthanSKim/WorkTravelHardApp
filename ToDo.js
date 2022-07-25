import { Fontisto, Octicons, AntDesign } from "@expo/vector-icons";
import { theme } from './colors';
import { Text, View, Pressable } from "react-native";

function ToDo({ styles, toDos, id, deleteToDo, checkToDo, openEdit }) {
    return (
        <View style={styles.toDo} key={id}>
            <View style={{flexDirection:"row"}}>
              <Pressable hitSlop={30} style={{marginRight: 12}} onPress={() => checkToDo(id)}>
                <AntDesign name={toDos[id].complete ? "checksquare" : "checksquareo"} size={18} />
              </Pressable>
              <Text style={ toDos[id].complete ? styles.toDoComplete : styles.toDoText }>{toDos[id].text}</Text>
            </View>
            <View style={styles.btnIcon}>
              <Pressable hitSlop={20} style={{marginRight: 20}} onPress={() => openEdit(id)}>
                <Octicons name="pencil" size={18} color={theme.grey}/>
              </Pressable>
              <Pressable hitSlop={20} onPress={() => deleteToDo(id)}>
                <Fontisto name="trash" size={18} color={theme.grey} />
              </Pressable>
            </View>
        </View>
    );
}

export default ToDo;