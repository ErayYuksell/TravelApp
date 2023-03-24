import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import { Feather, Entypo } from "@expo/vector-icons";

const height = Dimensions.get("window").height;

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgraundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.duration}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => alert("You booked a trip!")}
        >
          <Text style={styles.buttonText}>Book Nor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, flex: 1 },
  backgraundImage: { height: height * 0.6, justifyContent: "space-between" }, //
  descriptionWrapper: {
    //
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20, //bu olmadan radius atmayı dene hiçbir şey gözükmez
    borderRadius: 25,
  },
  backIcon: { marginTop: 60, marginLeft: 20 },
  titlesWrapper: { marginHorizontal: 20, marginBottom: 40 },
  itemTitle: { fontSize: 32, fontWeight: "bold", color: colors.white },
  locationWrapper: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  locationText: { marginLeft: 5, fontSize: 16, color: colors.white },
  heartWrapper: {
    //
    position: "absolute",
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionTextWrapper: { marginTop: 30, marginHorizontal: 20 },
  descriptionTitle: { fontSize: 24, color: colors.black, fontWeight: "bold" },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 20,
  },
  infoItem: {},
  infoTitle: { fontSize: 12, color: colors.gray, fontWeight: "bold" },
  infoTextWrapper: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "flex-end",//
  },
  infoText: { fontSize: 24, color: colors.orange },
  infoSubText: { fontSize: 14, color: colors.gray },
  buttonWrapper: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: colors.orange,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: { fontSize: 18, color: colors.white },
});

export default Details;
