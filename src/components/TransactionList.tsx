import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { colors } from '../theme/colors';

const TRANSACTIONS = [
  { id: '1', title: 'Starbucks', amount: '-$5.40', date: 'Today, 9:41 AM' },
  { id: '2', title: 'Salary', amount: '+$3,200.00', date: 'Yesterday' },
  { id: '3', title: 'Spotify Premium', amount: '-$9.99', date: 'Sep 18' },
];

export default function TransactionList() {
  return (
    <View style={styles.container}>
      {TRANSACTIONS.map(tx => (
        <TransactionItem key={tx.id} tx={tx} />
      ))}
    </View>
  );
}

function TransactionItem({ tx }: { tx: any }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.transaction, { transform: [{ scale: scaleAnim }] }]}>
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
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 8, paddingBottom: 40 },
  transaction: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 8
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  iconPlaceholder: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.background, marginRight: 16 },
  title: { fontSize: 16, fontWeight: '700', color: colors.textMain, marginBottom: 4 },
  date: { fontSize: 13, color: colors.textSecondary },
  amount: { fontSize: 16, fontWeight: '800' },
});
