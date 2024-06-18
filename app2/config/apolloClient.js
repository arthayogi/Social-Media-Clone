import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    // uri: 'https://29a1-139-228-111-126.ngrok-free.app',
    uri: 'http://13.215.228.171',
    cache: new InMemoryCache(),
  });

export default client