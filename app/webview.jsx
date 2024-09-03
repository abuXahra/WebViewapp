// app/WebViewScreen.jsx
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Linking, Alert, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import Loader from '../components/Loader';
import NetInfo from '@react-native-community/netinfo';
import { styles } from '../style/Styles';
import notConnected from '../assets/images/not_connected.png'


const WebViewScreen = () => {
  // const [isConnected, setIsConnected] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
// Initiate phone call
  const makeCall = () => {
    const phoneNumber = 'tel:+2349030953289'; // Replace with your phone number
    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneNumber);
        } else {
          Alert.alert('Error', 'Phone number is not supported');
        }
      })
      .catch((err) => {
        console.error('An error occurred', err);
      });
  };

// Initiate whatsapp chat
  const initiateWhatsAppChat = () => {
    const phoneNumber = '09030953289'; // Replace with the recipient's phone number
    const text = encodeURIComponent('Hello Mishal customer care!');
    // Construct the WhatsApp URL
    const url = `whatsapp://send?phone=${phoneNumber}&text=${text}`;
    Linking.openURL(url);
  };



  const webviewRef = useRef(null); // Create a ref for the WebView

  // Function to reload the WebView
  const refreshPage = () => {
    if (webviewRef.current) {
      webviewRef.current.reload(); // Call the reload method
    }
  };


  const handleGoBack = () => {
    if (webviewRef.current) {
      webviewRef.current.goBack();
    }
  };

  const handleGoForward = () => {
    if (webviewRef.current) {
      webviewRef.current.goForward();
    }
  };

  const handleIconPress = (iconName) => {
    // Handle icon actions here
    if(iconName === 'home'){
      router.push('/webview')
    }else if(iconName === 'arrow-left'){
      handleGoBack();
    }else if(iconName === 'arrow-right'){
      handleGoForward();
    }else if(iconName === 'refresh'){
      refreshPage();
    }else if(iconName === 'phone'){
      makeCall();
    }else if(iconName === 'whatsapp'){
      console.log(`${iconName} icon pressed`);
      initiateWhatsAppChat();
    }
    
  };

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     setIsConnected(state.isConnected);
  //     setLoading(false); // Stop loading when network state is detected
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const handleRefresh = () => {
  //   if (webviewRef.current) {
  //     webviewRef.current.reload();
  //   }
  // };

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  // if (!isConnected) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.errorText}>No Internet Connection</Text>
  //       <TouchableOpacity onPress={handleRefresh}>
  //         <Text style={styles.errorText}>Refresh Page</Text>
  //      </TouchableOpacity>
  //     </View>
  //   );
  // }


  const [isConnected, setIsConnected] = useState(null); // null indicates loading state
  const [isChecking, setIsChecking] = useState(true);  // true indicates that we are checking the network status

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setIsConnected(true);
        setIsChecking(false);
      } else {
        setIsConnected(false);
        setIsChecking(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleRefresh = () => {
    setIsChecking(true);
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        setIsConnected(true);
        setIsChecking(false);
      } else {
        setIsConnected(false);
        setIsChecking(false);
      }
    });
  };

  if (isChecking) {
    return (
      <View style={styles.containerb}>
        <ActivityIndicator size="large" color="#006600" />
        {/* <Text>Checking internet connection...</Text> */}
      </View>
    );
  }

  if (!isConnected) {
    return (
      <View style={styles.containerb}>
        <Image
          source={notConnected}
          resizeMode='contain'
          style={styles.notConnected}
          />
        <Text>No internet connection</Text>
        <Text>Please check your connection and refresh the page.</Text>
        <TouchableOpacity onPress={handleRefresh}>
          <View style={styles.refreshPage}><Text style={{color: 'white'}}>Refresh</Text></View>  
        </TouchableOpacity>
      </View>
    );
  }


  return (<>
    {loading && <Loader />}
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
      {/* status Bar Icons */}
          <Text className='text-white font-bold text-lg'>Mishal App</Text>

      {/* status Bar Icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleIconPress('arrow-left')}>
            <Icon name="arrow-left" size={20} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('arrow-right')}>
            <Icon name="arrow-right" size={20}  style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('refresh')}>
            <Icon name="refresh" size={20}  style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('phone')}>
            <Icon name="phone" size={20} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('whatsapp')}>
            <Icon name="whatsapp" size={20} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Loader */}
  {/* {  loading? <Loader/> : null }  */}

  {/* Webview */}
 <WebView 
        ref={webviewRef}
        source={{ uri: 'https://mishalmedimart.com.ng'}} 
        onLoadStart={() => setLoading(true)} // Show loader when load starts
        onLoadEnd={() => setLoading(false)} // Hide loader when load ends
        style={styles.webView} />
    </View>
    </>
  );
};

export default WebViewScreen;
