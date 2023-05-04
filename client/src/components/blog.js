import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import config from '../config';

const Blog = ({ navigation, blog, deletePost }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: config.baseURL + '/' + blog.photo }}
                style={styles.image}
            />
            <View style={styles.sub}>
                <Text style={styles.heading}>{blog.title}</Text>
                <Text style={styles.text}>{blog.description}</Text>
                <View style={styles.icons}>
                    <MaterialIcons
                        name='update'
                        style={styles.update}
                        onPress={() => navigation.navigate('Update', { id: blog.id })}
                    />
                    <AntDesign
                        name='delete'
                        style={styles.delete}
                        onPress={() => deletePost(blog.id)}
                    />
                </View>
            </View>
        </View>
    );
}

export default Blog

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    container: {
        backgroundColor: 'white',
        marginVertical: 10,
    },
    sub: {
        marginHorizontal: 7,
        paddingBottom: 10,
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 600,
        marginTop: 5,
        color: 'purple',
    },
    text: {
        textAlign: 'center',
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    update: {
        fontSize: 25,
        color: 'purple',
    },
    delete: {
        fontSize: 25,
        color: 'red',
    },
})