import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { Feather } from '@expo/vector-icons';

const PAYMENT_OPTIONS = [
  { id: '1', title: 'Send Money', description: 'To friends or bank accounts', icon: 'send', color: '#3B82F6' },
  { id: '2', title: 'Request Money', description: 'Ask friends for funds', icon: 'download-cloud', color: '#10B981' },
  { id: '3', title: 'Pay Bills', description: 'Utilities, internet, TV', icon: 'file-text', color: '#F59E0B' },
  { id: '4', title: 'Mobile Top-up', description: 'Airtime and Data bundles', icon: 'smartphone', color: '#8B5CF6' },
  { id: '5', title: 'Global Transfer', description: 'Send money abroad', icon: 'globe', color: '#EC4899' },
  { id: '6', title: 'Scan to Pay', description: 'Pay via QR Code', icon: 'maximize', color: '#14B8A6' },
];

export default function PaymentsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.pageTitle}>Payments</Text>
          <Text style={styles.pageSubtitle}>What would you like to do?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.grid}>
          {PAYMENT_OPTIONS.map((option, index) => (
            <PaymentCard key={option.id} option={option} delay={index * 100} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function PaymentCard({ option, delay }: { option: any, delay: number }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        delay: delay,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay: delay,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.93, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.card, { 
          opacity: opacityAnim, 
          transform: [
            { scale: scaleAnim }, 
            { translateY: slideAnim }
          ] 
        }]}
      >
        <View style={[styles.iconContainer, { backgroundColor: option.color + '15' }]}>
          <Feather name={option.icon as any} size={24} color={option.color} />
        </View>
        <Text style={styles.cardTitle}>{option.title}</Text>
        <Text style={styles.cardDescription}>{option.description}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  pageTitle: { fontSize: 28, fontWeight: '800', color: colors.textMain },
  pageSubtitle: { fontSize: 15, color: colors.textSecondary, marginTop: 4 },
  logo: { width: 50, height: 50 },
  scroll: { padding: 20, paddingBottom: 60 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: { fontSize: 16, fontWeight: '700', color: colors.textMain, marginBottom: 4 },
  cardDescription: { fontSize: 13, color: colors.textSecondary, lineHeight: 18 },
});
