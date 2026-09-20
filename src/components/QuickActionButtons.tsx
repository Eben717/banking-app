import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

export default function QuickActionButtons() {
  return (
    <View style={styles.container}>
      <ActionButton title="Send" />
      <ActionButton title="Request" />
      <ActionButton title="More" />
    </View>
  );
}

function ActionButton({ title }: { title: string }) {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.circle} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  button: { alignItems: 'center', flex: 1 },
  circle: { width: 60, height: 60, borderRadius: 30, backgroundColor: colors.border, marginBottom: 8 },
  title: { fontSize: 14, color: colors.textMain },
});
