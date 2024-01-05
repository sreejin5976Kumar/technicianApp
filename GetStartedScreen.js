import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../images/cctv.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover" 
    >
      <Text style={{fontSize:25, fontWeight:'bold',color: '#fff', alignSelf:'center',marginTop:70,
    }}>GUARD</Text>
    <Text style={{fontSize:25, fontWeight:'bold',color: '#fff', alignSelf:'center',
    }}>CCTV SURVEILLANCE CAMERA</Text>
      <View style={styles.container}>
      <Text style={styles.subtitle}>Your security, our priority</Text>
        <Text style={styles.description}>
          We provide cutting-edge security solutions with advanced CCTV technology. 
          Our mission is to safeguard your premises and ensure your peace of mind.
        </Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    marginBottom: 100,
  },
// container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', 
//   },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    fontWeight:'bold'
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,lineHeight:17.5
  },
  getStartedButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStartedScreen;


