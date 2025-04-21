import {StyleSheet, View} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import Entry from "./Entry";

export default function App() {

  return (
      <QueryClientProvider client={new QueryClient()}>
        <View style={styles.container}>
          <Entry/>
        </View>
      </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
