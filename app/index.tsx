import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated, Text, TouchableOpacity } from "react-native";

export default function Launch() {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const colorAnim = useRef(new Animated.Value(0)).current;
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(colorAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]).start();
        }, 2000);
    }, [fadeAnim, colorAnim]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/Launch_2.jpeg')}
                style={styles.backgroundImage}
            />
            <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
                <Image
                    source={require('../assets/images/Launch_1.jpeg')}
                    style={styles.backgroundImage}
                />
            </Animated.View>
            <Animated.View style={[styles.content, { opacity: colorAnim }]}>
                <Image 
                    source={require('../assets/images/logo.png')} 
                    style={styles.logo} 
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {router.push('pages/login')}}>
                        <Text style={styles.buttonText}>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {router.push('pages/register')}}>
                        <Text style={styles.buttonText}>注册</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 50,
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 50,
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 15,
        borderRadius: 25,
        marginBottom: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});