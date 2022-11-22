import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DragAndDrop from "volkeno-react-native-drag-drop";

export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: "Test item 1" },
    { id: 2, text: "Test item 2" },
    { id: 3, text: "Test item 3" },
    { id: 4, text: "Test item 4" },
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: "Test zone 1",
      items: [{ id: 5, text: "Test existing item 5" }],
    },
    {
      id: 2,
      text: "Test zone 2",
    },
  ]);
  // console.log(zones)
  // console.log('Items',zones[0].items)

  // console.log(`
  // Match the follwing -
  //   ceil(): Returns next integer greater than or equal to given number.
  //   floor(): Returns the next integer less than or equal to given number.
  //   write(): Writes HTML expression or JavaScript code to a document.
  //   focus(): Sets focus to current window.
  //   trim(): Removes white spaces from both sides of string.`)

  return (
    <DragAndDrop
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      itemKeyExtractor={(item) => item.id}
      zoneKeyExtractor={(zone) => zone.id}
      zones={zones}
      items={items}
      itemsContainerStyle={styles.itemsContainerStyle}
      zonesContainerStyle={styles.zonesContainerStyle}
      onMaj={(zones, items) => {
        setItems(items);
        setZones(zones);
      }}
      itemsInZoneStyle={styles.itemsInZoneStyle}
      renderItem={(item) => {
        return (
          <View style={styles.dragItemStyle}>
            <Text style={styles.dragItemTextStyle}>{item.text}</Text>
          </View>
        );
      }}
      renderZone={(zone, children, hover) => {
        return (
          <View
            style={{
              ...styles.dragZoneStyle,
              backgroundColor: hover ? "#E2E2E2" : "#FFF",
            }}
          >
            <Text stylae={styles.dragZoneTextStyle}>{zone.text}</Text>
            {children}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
  itemsInZoneStyle: {
    width: "100%",
  },
  contentContainerStyle: {
    padding: 20,
    paddingTop: 40,
  },
  itemsContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  zonesContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dragItemStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  dragItemTextStyle: {
    color: "#011F3B",
    fontWeight: "700",
    textAlign: "center",
  },
  dragZoneStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    padding: 15,
    minHeight: 130,
    marginVertical: 15,
  },
  dragZoneTextStyle: {
    position: "absolute",
    opacity: 0.2,
    zIndex: 0,
    alignSelf: "center",
    top: "50%",
  },
});



// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import DragAndDrop from "volkeno-react-native-drag-drop";

// export default function DragDropModule() {
//   const [items, setItems] = React.useState([
//     { id: 1, text: "A" },
//     { id: 2, text: "B" },
//     { id: 3, text: "C" },
//     { id: 4, text: "D" },
//     { id: 5, text: "F" },
//     { id: 6, text: "G" },
//     { id: 7, text: "H" },
//     { id: 8, text: "I" },
//     { id: 9, text: "K" },
//   ]);
//   const [zones, setZones] = React.useState([
//     {
//       id: 1,
//       text: "Test zone 0",
//       items: [{ id: 10, text: "L" }],
//     },
//   ]);

//   return (
//     <DragAndDrop
//       style={styles.container}
//       contentContainerStyle={styles.contentContainerStyle}
//       itemKeyExtractor={(item) => item.id}
//       zoneKeyExtractor={(zone) => zone.id}
//       zones={zones}
//       items={items}
//       onMaj={(zones, items) => {
//         setItems(items);
//         setZones(zones);
//       }}
//       itemsInZoneDisplay="row"
//       itemsDisplay="row"
//       itemsNumCollumns={3}
//       itemsInZoneNumCollumns={2}
//       renderItem={(item) => {
//         return (
//           <View style={styles.dragItemStyle}>
//             <Text style={styles.dragItemTextStyle}>{item.text}</Text>
//           </View>
//         );
//       }}
//       renderZone={(zone, children, hover) => {
//         return (
//           <View style={{ marginVertical: 10 }}>
//             <Text style={{ marginBottom: 5 }}>{zone.text}</Text>
//             <View
//               style={{
//                 ...styles.dragZoneStyle,
//                 minHeight: 150,
//                 backgroundColor: hover ? "#E2E2E2" : "#FFF",
//               }}
//             >
//               {children}
//             </View>
//           </View>
//         );
//       }}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   contentContainerStyle: {
//     padding: 20,
//     paddingTop: 40,
//   },
//   dragItemStyle: {
//     borderColor: "#F39200",
//     borderWidth: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 5,
//     backgroundColor: "#F5F5F5",
//     padding: 10,
//   },
//   dragItemTextStyle: {
//     color: "#011F3B",
//     fontWeight: "700",
//     textAlign: "center",
//   },
//   dragZoneStyle: {
//     borderColor: "#F39200",
//     borderWidth: 1,
//     padding: 15,
//   },
// });