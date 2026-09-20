import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const TRANSACTIONS = [
  { id: '1', title: 'Starbucks', amount: '-$5.40', date: 'Today' },
  { id: '2', title: 'Salary', amount: '+$3,200.00', date: 'Yesterday' },
  { id: '3', title: 'Spotify', amount: '-$9.99', date: 'Sep 18' },
];

export default function TransactionList() {
  return (
    <View style={styles.container}>
      {TRANSACTIONS.map(tx => (
        <View key={tx.id} style={styles.transaction}>
          <View style={styles.left}>
            <View style={styles.iconPlaceholder} />
            <View>
              <Text style={styles.title}>{tx.title}</Text>
              <Text style={styles.date}>{tx.date}</Text>
            </View>
          </View>
          <Text style={[styles.amount, { color: tx.amount.startsWith('+') ? colors.success : colors.textMain }]}>
            {tx.amount}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  transaction: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  left: { flexDirection: 'row', alignItems: 'center' },
  iconPlaceholder: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.border, marginRight: 12 },
  title: { fontSize: 16, fontWeight: '500', color: colors.textMain },
  date: { fontSize: 12, color: colors.textSecondary, marginTop: 4 },
  amount: { fontSize: 16, fontWeight: 'bold' },
});
