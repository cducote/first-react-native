import { StyleSheet, Image, View } from 'react-native';

class Page extends Component {
    render() {      
        return (
            <View>
                <Image style={styles.text} source={require('../assets/IMG_0869.png')}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    img: {
        height: 100,
    },
  });

export default Page;