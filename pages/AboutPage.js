import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';





function AboutPage  ()  {
    return (

       
        <View style={styles.container}>
            <View>
                
            </View>
             <Image source={require('../img_hanna.jpg')}
             style={styles.Image} />
            <Text style={styles.text}>
            Hello. My name is Hanna Yablonska.
I study at the police school in the 1st year of the 2nd semester.
Direction - Internet and mobile applications.
The application is written in JAVASCRIPT/HTML/CSS

            </Text>
        </View>
    );
   
};

const styles = StyleSheet.create ({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `#4b0082`,
    },

    text: {
        color: 'white'
    },
    Image: {
        width: '50%',
        height: '50%',
        borderRadius: 20,
    },
});


export default AboutPage;



