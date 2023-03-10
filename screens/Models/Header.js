import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { icons, images } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const mapState = ({ user }) => ({
  userD: user.userD,
});

const Header = (props) => {
  const { bg, isHome, fromBT } = props;
  const { userD } = useSelector(mapState);
  const navigation = useNavigation();
  return (
    <View
      style={[styles.header, { backgroundColor: bg.length > 0 ? bg : "white" }]}
    >
      {isHome ? (
        <View style={{ width: 20 }}></View>
      ) : (
        <TouchableOpacity
          style={styles.headerSub}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="ios-arrow-back-sharp"
            size={24}
            color="black"
            style={styles.icon_style}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.headerSub}
        onPress={() => navigation.navigate("NewHomePage")}
      >
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989",
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.headerSub}
        onPress={() => navigation.toggleDrawer()}
        // onPress={() => console.log("Navigation: ", navigation)}
        // onPress={() => navigation.getParent().openDrawer()
      >
        <IconFeather
          name="menu"
          size={25}
          color="black"
          style={styles.icon_style}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 35,
    height: 35,
    marginTop: 5,
    borderRadius: 200,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 0,
  },
  imgStyle: {
    width: 100,
    height: 40,
  },
});
