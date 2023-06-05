import { View, Text, StyleSheet, Image  } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import CustomText from "./CustomText";
import IngredientsCapsuleList from "./IngredientsCapsuleList";
import { Meal } from "../models/Meal";
import Time from "./Time";

type MealInformationSheetProps = {
    meal: Meal
}

export default function MealInformationSheet(props: MealInformationSheetProps): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <CustomText text={props.meal.name} textType="subtitle"/>
                </View>
                <View style={styles.clock}>
                    <Ionicons name="time-outline" size={30}/>
                    <Time time={props.meal.duration} fontSize={20}/>
                </View>
            </View>

            <Image style={styles.image} source={require(`../assets/meals/paella.jpeg`)}/>
            {/* <CustomImage imageType={props.meal.image.type} imageName={props.meal.image.name} imageExtension={props.meal.image.extension}/> */}

            <View style={styles.mainText}>
                <CustomText text={props.meal.description} textType="paragraph"/>
                <View style={styles.ingredients}>
                    <IngredientsCapsuleList ingredients={props.meal.ingredients}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 10
    },
    text: {
        fontSize: 16,
    },
    mainText: {
        margin: 10
    },
    container: {
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 20,
      },
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        maxHeight: 50,
        textAlignVertical: "center"
    },
    flexColumn: {
        flexDirection: "column"
    },
    clock: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    ingredientText: {
       padding: 5,
       borderWidth: 1,
        borderRadius: 20,
        width: null,
        height: 25
    },
    ingredients: {
        marginTop: 10
    }
}); 