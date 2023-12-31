import { Divider, FAB, IconButton, Modal } from "react-native-paper";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { getFoods } from "../stub/stub";
import { Food } from "../models/Food";
import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { DarkThemeContext } from "../App";

type IngredientsModalProps = {
    visible:boolean,
    onRequestClose: () => void,
    onRequestValidate: () => void,
}

const foods: Food[] = getFoods();

export default function IngredientsModal(props: IngredientsModalProps): JSX.Element {
    const { theme } = useContext(DarkThemeContext);

    return (
        <Modal visible={props.visible} onDismiss={props.onRequestClose} contentContainerStyle={styles(theme).modal}>
            <View>
                <View style={styles(theme).header}>
                    <View style={styles(theme).searchBar}>
                        <SearchBar placeholder={"Rechercher un ingrédient"} 
                            onChangeText={function (text: string): void {
                                console.log(text);
                            }}/>
                    </View>
                    <View style={styles(theme).fabButton}>
                        <IconButton icon="close"
                            size={25}
                            mode="contained-tonal"
                            style={styles(theme).closeButton}
                            onPress={props.onRequestClose}/>
                    </View>
                    
                </View>
                <View>
                    <FlatList data={foods} 
                        renderItem={({item}) => 
                        <View>
                            <View style={styles(theme).food}>
                                <Text style={styles(theme).itemName}>{item.name}</Text>
                                <IconButton icon="minus"
                                            size={20}
                                            mode="contained-tonal"
                                            style={styles(theme).deleteButton}
                                            onPress={() => console.log(`delete `)}/>
                            </View>
                            <Divider />
                        </View>}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles(theme).FlatList}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = (theme) => StyleSheet.create({
    modal: {
        backgroundColor: theme.surfaceColor,
        margin: 20,
        height: "90%",
        borderRadius: 20,
        padding: 20
    },
    closeButton: {
        alignSelf: "flex-end",
        marginLeft: 12
    },
    deleteButton: {
        alignSelf: "flex-end"
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    searchBar: {
        width: "80%"
    },
    fabButton: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 10
    },
    FlatList: {
        height: "90%",
        marginTop: 10
    },
    food: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10
    },
    itemName: {
        color: theme.textColor
    }
});
