// pages/Login.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenLayout from '../../components/ScreenLayout';
import { theme } from '@/styles/theme';

export default function Login() {
  return (
    <ScreenLayout title="登录">
      <View style={styles.inputContainer}>
        <Text style={styles.title}>
          登录
        </Text>
        <TextInput placeholder="用户名" style={styles.input} />
        <TextInput placeholder="密码" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    color: 'rgba(0,0,0,0.7)',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    backgroundColor: theme.primaryColor,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});