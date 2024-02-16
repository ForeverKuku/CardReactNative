import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Back button pressed')}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Text to Image</Text>
        <TouchableOpacity onPress={() => alert('More options pressed')}>
          <MaterialIcons name="more-vert" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Content below header */}
      <View style={{ flex: 1, width: '100%' }}>
        {/* Your existing content */}
        {/* Title Text - You may remove this as the title is now in the header */}
        {/* <Text style={styles.title}>Text to image</Text> */}

    {/* First Row */}
    <View style={styles.row}>
      <View style={styles.card}>
        <Image source={require('./assets/housenew1.jpg')} style={styles.imageStyle} />
      </View>
      <View style={styles.card}>
        <Image source={require('./assets/house.jpeg')} style={styles.imageStyle} />
      </View>
    </View>

    {/* Second Row */}
    <View style={styles.row}>
      <View style={styles.card}>
        <Image source={require('./assets/housenew1.jpg')} style={styles.imageStyle} />
      </View>
      <View style={styles.card}>
        <Image source={require('./assets/design.jpg')} style={styles.imageStyle} />
      </View>
    </View>
  </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
     paddingBottom:20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: StatusBar.currentHeight || 0, 
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
    marginTop:10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15, 
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%', 
    marginBottom: 40, 
  },
  card: {
    marginHorizontal: 10, 
    width: 160, 
    height: 200, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20, 
  },
  imageStyle: {
    width: '100%', 
    height: '100%', 
    borderRadius: 20, 
    resizeMode: 'cover',
  },

});