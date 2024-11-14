import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Picker,
  Colors,
  Icon,
  Typography,
  PickerProps,
  RenderCustomModalProps,
  Incubator,
  PanningProvider,
  ChipsInput,
} from "react-native-ui-lib";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
const dropdown = require("../../assets/images/chevronDown.png");
const dropdownIcon = <Icon source={dropdown} tintColor={Colors.$iconDefault} />;

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];
const options1 = [
  { label: "JavaScript", value: "js", labelStyle: Typography.text65 },
  { label: "Java", value: "java", labelStyle: Typography.text65 },
  { label: "Python", value: "python", labelStyle: Typography.text65 },
  { label: "C++", value: "c++", disabled: true, labelStyle: Typography.text65 },
  { label: "Perl", value: "perl", labelStyle: Typography.text65 },
];
const options2 = [
  { label: "JavaScript", value: "js", labelStyle: Typography.text65 },
  { label: "Java", value: "java", labelStyle: Typography.text65 },
  { label: "Python", value: "python", labelStyle: Typography.text65 },
  { label: "C++", value: "c++", disabled: true, labelStyle: Typography.text65 },
  { label: "Perl", value: "perl", labelStyle: Typography.text65 },
  { label: "JavaScript", value: "js1", labelStyle: Typography.text65 },
  { label: "Java", value: "java1", labelStyle: Typography.text65 },
  { label: "Python", value: "python1", labelStyle: Typography.text65 },
  {
    label: "C++",
    value: "c++1",
    disabled: true,
    labelStyle: Typography.text65,
  },
  { label: "Perl", value: "perl1", labelStyle: Typography.text65 },
];
export default function _layout() {
  const [selectedValue1, setSelectedValue1] = useState<any>("");
  const [selectedValue2, setSelectedValue2] = useState<any>("");
  const [selectedValue3, setSelectedValue3] = useState<any>("");
  const handleSelect =
    (setter: React.Dispatch<React.SetStateAction<any>>) => (value: any) =>
      setter(value);
  const renderDialog: PickerProps["renderOverlay"] = (
    modalProps: RenderCustomModalProps
  ) => {
    const { visible, children, toggleModal, onDone } = modalProps;
    return (
      <Incubator.Dialog
        visible={visible}
        onDismiss={() => {
          onDone();
          toggleModal();
        }}
        width="100%"
        height="45%"
        bottom
        useSafeArea
        containerStyle={{
          backgroundColor: Colors.$backgroundDefault,
          bottom: -20,
        }}
        direction={PanningProvider.Directions.DOWN}
        headerProps={{ title: "Custom modal" }}
      >
        <ScrollView>{children}</ScrollView>
      </Incubator.Dialog>
    );
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.flex}>
            <ChipsInput
              placeholder={"Placeholder"}
              chips={[
                { label: "Falcon 9" },
                { label: "Enterprise" },
                { label: "Challenger", borderRadius: 0 },
              ]}
            />
            <Picker
              value={selectedValue1}
              placeholder="Favorite Language"
              floatingPlaceholder
              enableModalBlur={false}
              onChange={handleSelect(setSelectedValue1)}
              topBarProps={{ title: "Languages" }}
              showSearch
              searchPlaceholder={"Search a language"}
              searchStyle={{
                color: Colors.blue30,
                placeholderTextColor: Colors.grey50,
              }}
              items={options}
              style={styles.formInput}
            ></Picker>
            <Picker
              placeholder="Favorite Languages (up to 3)"
              topBarProps={{ title: "Languages", doneLabel: "完成" }}
              floatingPlaceholder
              value={selectedValue2}
              onChange={handleSelect(setSelectedValue2)}
              mode={Picker.modes.MULTI}
              selectionLimit={3}
              trailingAccessory={dropdownIcon}
              items={options1}
              style={styles.formInput}
            />
            <Picker
              label="Custom modal"
              placeholder="Pick multiple Languages"
              value={selectedValue3}
              onChange={handleSelect(setSelectedValue3)}
              mode={Picker.modes.MULTI}
              trailingAccessory={dropdownIcon}
              renderOverlay={renderDialog}
              items={options2}
              style={styles.formInput}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  flex: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  formInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderBottomColor: Colors.grey50,
    borderBottomWidth: 1,
  },
});
