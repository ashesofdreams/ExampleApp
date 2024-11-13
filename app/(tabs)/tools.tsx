import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  Alert,
  Dimensions,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const toolscreen = () => {
  const navigation = useNavigation();
  const onPressFunction = (item: any) => {
    (navigation as any).navigate({ name: item.router });
  };
  const itemData = [
    { id: "1", name: "相机", router: "camera" },
    { id: "2", name: "工具1", router: "+not-found" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          horizontal
          contentContainerStyle={styles.viewContainer}
          data={itemData}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => onPressFunction(item)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#CFD3DC" : "#636466",
                },
                styles.viewItem,
              ]}
            >
              <Text style={styles.text}>{item.name}</Text>
            </Pressable>
          )}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
    marginVertical: 10,
  },
  viewContainer: {
    paddingHorizontal: 10,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  viewItem: {
    width: windowWidth / 3 - 15,
    height: 60,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    lineHeight: 60,
    fontSize: 18,
    color: "#fff",
  },
});
export default toolscreen;
