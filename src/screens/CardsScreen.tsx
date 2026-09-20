import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';

export default function CardsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>My Cards</Text>
        <Text style={styles.subtitle}>Manage your physical and virtual cards</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: 20, alignItems: 'flex-end' },
  logo: { width: 50, height: 50 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.textMain, marginBottom: 8 },
  subtitle: { fontSize: 16, color: colors.textSecondary },
});
