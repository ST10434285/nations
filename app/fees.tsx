import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Text, View } from '@/components/Themed';

export default function feesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculate</Text>
      <WebView
        source={{
          uri: 'https://formfacade.com/include/110699377906015702220/form/1FAIpQLScTP12QLdoq0_xc__egfg-eFpKY8irZ-jX9UQ9gIcvrwUgd6Q/classic.js/?div=ff-compose',
        }}
        onLoad={() => console.log('Form Loaded')}
        onMessage={() => console.log('Form Submitted')}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  webview: {
    flex: 1,
    marginTop: 20,
  },
});
