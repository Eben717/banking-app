import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import AccountBalanceCard from '../components/AccountBalanceCard';
import QuickActionButtons from '../components/QuickActionButtons';
import TransactionList from '../components/TransactionList';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>Eben</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <AccountBalanceCard />
        <QuickActionButtons />
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <TransactionList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { padding: 20 },
  header: { marginBottom: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 16, color: colors.textSecondary },
  name: { fontSize: 28, fontWeight: 'bold', color: colors.brandText },
  logo: { width: 50, height: 50 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: colors.textMain, marginBottom: 8 },
});
