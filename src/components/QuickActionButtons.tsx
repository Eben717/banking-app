import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { colors } from '../theme/colors';
import { Feather } from '@expo/vector-icons';

export default function QuickActionButtons() {
  return (
    <View style={styles.container}>
      <ActionButton title="Send" icon="arrow-up-right" />
      <ActionButton title="Request" icon="arrow-down-left" />
      <ActionButton title="Top Up" icon="plus" />
      <ActionButton title="More" icon="grid" />
    </View>
  );
}

function ActionButton({ title, icon }: { title: string, icon: any }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.9, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={styles.buttonWrapper}>
        <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}>
          <Feather name={icon} size={24} color={colors.primaryDark} />
        </Animated.View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  buttonWrapper: { alignItems: 'center', width: 70 },
  circle: { 
    width: 60, height: 60, borderRadius: 20, 
    backgroundColor: colors.white, marginBottom: 10,
    justifyContent: 'center', alignItems: 'center',
    elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 8
  },
  title: { fontSize: 13, color: colors.textMain, fontWeight: '600' },
});
