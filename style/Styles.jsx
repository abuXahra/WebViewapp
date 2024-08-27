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
      padding: 10,
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
      gap: 20.0
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
      borderRadius: 15,
    }
  });
  