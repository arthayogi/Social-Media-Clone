import * as React from 'react';
import { Text} from 'react-native'
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ButtonDonate = () => (

<TouchableOpacity>
<Button 
icon="upload" 
mode="contained" 
textColor="#FFEDD3"
style={[styles.photoButton, (photo || loading) && styles.disabledButton]}
onPress={pickImage}
disabled={photo !== null || loading}
>
<Text style={styles.buttonText}>Upload Photo</Text>
</Button>
</TouchableOpacity>

);

const styles = StyleSheet.create({
    button: {
        marginTop: 9,
        marginLeft: 25,
    },
})
export default ButtonDonate;