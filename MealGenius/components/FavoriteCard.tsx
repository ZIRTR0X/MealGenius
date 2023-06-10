import { Meal } from "../models/Meal"
import { View, StyleSheet, Image, Text } from "react-native"
import { Surface } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons"
import Time from "./Time"

type FavoriteCardProps = {
    meal: Meal
}

export default function FavoriteCard(props: FavoriteCardProps): JSX.Element {
    return (
        <Surface style={styles.card}>
            <Image style={styles.image} source={{uri: props.meal.image}}/>
            <View style={styles.content}>
                <Text numberOfLines={1} style={styles.name}>{props.meal.name}</Text>
                <Text numberOfLines={2}>{props.meal.description}</Text>
                <View style={styles.duration}>
                    <Ionicons name="time-outline" size={20}/>
                    <Time time={props.meal.duration} fontSize={15}/>
                </View>
            </View>
        </Surface>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "auto",
        borderRadius: 20,
        flexDirection: "row"
    },
    content: {
        justifyContent: "space-between",
        flexDirection: "column",
        marginLeft: 10,
        width: "70%"
    },
    image: {
        width: "25%",
        height: 100,
        resizeMode: "cover",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    name: {
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left"
    },
    duration: {
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 5
    },
    durationText: {
        fontSize: 20
    }
});


