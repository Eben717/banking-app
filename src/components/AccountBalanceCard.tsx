import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function AccountBalanceCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Total Balance</Text>
      <Text style={styles.amount}>$12,450.00</Text>
      <Text style={styles.accountNumber}>Checking **** 1234</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.primary, borderRadius: 16, padding: 24, marginBottom: 24 },
  label: { color: colors.white, opacity: 0.8, fontSize: 16, marginBottom: 8 },
  amount: { color: colors.white, fontSize: 32, fontWeight: 'bold', marginBottom: 8 },
  accountNumber: { color: colors.white, opacity: 0.8, fontSize: 14 },
});
