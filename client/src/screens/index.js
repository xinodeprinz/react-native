import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native'
import Blog from '../components/blog';
import { AntDesign } from '@expo/vector-icons';
import axios from '../components/axios';

const Index = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => <AntDesign
            name='plus'
            style={styles.add}
            onPress={() => navigation.navigate('Create')}
        />
    });

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, [blogs]);

    const getBlogs = async () => {
        const res = await axios.get('/blogs');
        setBlogs(res.data);

    }

    const deletePost = async (id) => {
        const res = await axios.delete(`/delete/${id}`);
        alert(res.data.message);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={blogs}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Blog
                    blog={item}
                    navigation={navigation}
                    deletePost={deletePost}
                />
                }
            />
        </View>
    );
}

export default Index

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },
    add: {
        backgroundColor: 'purple',
        fontSize: 25,
        marginRight: 7,
        color: 'white',
        padding: 5,
        borderRadius: 50,
    }
})