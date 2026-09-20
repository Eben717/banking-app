import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function AccountBalanceCard() {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryDark]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <Text style={styles.label}>Total Balance</Text>
      <Text style={styles.amount}>$12,450.00</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.accountNumber}>Checking **** 1234</Text>
        <View style={styles.chipPlaceholder} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: { 
    borderRadius: 20, 
    padding: 24, 
    marginBottom: 24,
    elevation: 8,
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  label: { color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 8 },
  amount: { color: colors.white, fontSize: 36, fontWeight: '800', marginBottom: 24, letterSpacing: 0.5 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  accountNumber: { color: 'rgba(255,255,255,0.9)', fontSize: 14, letterSpacing: 1 },
  chipPlaceholder: { width: 40, height: 25, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 6 },
});
