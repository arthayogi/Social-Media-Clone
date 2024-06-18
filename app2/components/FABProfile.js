import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, Portal, PaperProvider } from "react-native-paper";

const FABProfile = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          style={styles.fabStyle}
          color="#536e2c"
          backdropColor="transparent"
          fabStyle={{ backgroundColor: '#d4d768', borderRadius: 30 }}
          open={open}
          visible
          icon={open ? "menu" : "account"}
          actions={[
            {
              icon: "gift-outline",
              label: "Donate",
              labelTextColor: "#536e2c",
              color: "#536e2c",
              style: { backgroundColor: "#d4d768", borderRadius: 30},
              onPress: () => console.log("Pressed notifications"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

export default FABProfile;

const styles = StyleSheet.create({
  fabStyle: {
    position: "absolute",
    borderRadius: 50,
    labelTextColor: "#536e2c",
    bottom: 15
  },
});
