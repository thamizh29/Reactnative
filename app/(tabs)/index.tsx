import { Image, StyleSheet, Platform, Button, Text, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")

  const handleClick = () => {


  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Text >Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={setEmail}
          value={Email}
          keyboardType="email-address"/>
        <Text>Password</Text>
        <TextInput
         style={styles.input}
         placeholder='Enter the password'
         onChangeText={setPassword}
         value={Password} />
        <Button onPress={handleClick} title='Login' />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input:{
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  }
});
