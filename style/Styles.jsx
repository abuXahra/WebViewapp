import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50.0,
      paddingBottom: 0,
      backgroundColor: '#006600',
    },
    appBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      paddingHorizontal: 10.0,
      paddingVertical: 15.0,
      gap: 10.0,
      backgroundColor: '#006600',
      borderBottomColor: '#006600',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 15.0
    },
    icon: {
      marginHorizontal: 5,
      color:"#fff"
    },
    webView: {
      flex: 1,
    },
    containerb: {
      flex: 1,
      gap:5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    refreshPage: {
      backgroundColor: 'green', 
      paddingHorizontal:40, 
      paddingVertical: 10, 
      borderRadius: 10,
      marginTop: 5
    },
    notConnected: {
      width: 100,
      height: 100
    }
  });
  