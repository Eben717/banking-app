import React, { useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Animated, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignInScreen() {
  const navigation = useNavigation<any>();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleSignIn = () => {
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Control Union</Text>
        <Text style={styles.subtitle}>Secure banking in your pocket</Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableWithoutFeedback 
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut} 
          onPress={handleSignIn}
        >
          <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
            <LinearGradient
              colors={[colors.primary, colors.primaryDark]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </LinearGradient>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 160, height: 160, marginBottom: 24 },
  title: { fontSize: 32, fontWeight: '800', color: colors.brandText, marginBottom: 8, letterSpacing: 1 },
  subtitle: { fontSize: 16, color: colors.textSecondary },
  footer: { padding: 24, paddingBottom: 48 },
  buttonContainer: { borderRadius: 16, overflow: 'hidden', elevation: 4, shadowColor: colors.primaryDark, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
  button: { paddingVertical: 18, alignItems: 'center' },
  buttonText: { color: colors.white, fontSize: 18, fontWeight: '700', letterSpacing: 0.5 },
});
