import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import AccountBalanceCard from '../components/AccountBalanceCard';
import QuickActionButtons from '../components/QuickActionButtons';
import TransactionList from '../components/TransactionList';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning, Eben</Text>
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
  header: { marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: colors.textMain },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: colors.textMain, marginBottom: 8 },
});
