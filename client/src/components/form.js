import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import config from '../config';

const Form = ({
    isCreate = true,
    data,
    handleSubmit,
    setData,
}) => {

    const handleImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const photo = result.assets[0];
            const ext = photo.uri.split('.').pop();
            setData({
                ...data, photo: {
                    uri: photo.uri,
                    type: `${photo.type}/${ext}`,
                    name: photo.uri.split('/').pop(),
                    fileName: photo.type,
                }
            });
        }
    };

    const handleInput = (name, text) => {
        setData({ ...data, [name]: text })
    }

    return (
        <View style={styles.container}>
            {data.photo && <Image
                source={{ uri: data.photo.uri || `${config.baseURL}/${data.photo}` }}
                style={styles.image}
            />}
            <TouchableOpacity style={styles.upload} onPress={handleImage}>
                <Text style={styles.btnText}>Upload Image</Text>
            </TouchableOpacity>

            <TextInput
                placeholder='Blog Title'
                style={styles.input}
                value={data.title}
                onChangeText={(text) => handleInput('title', text)}
                nativeID="title"
            />
            <TextInput
                placeholder='Blog Body'
                multiline={true}
                style={styles.input}
                value={data.description}
                onChangeText={(text) => handleInput('description', text)}
                nativeID="description"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}>
                <Text style={styles.btnText}>
                    {isCreate ? 'Create' : 'Update'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Form

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: 'purple',
        paddingVertical: 15,
        paddingHorizontal: 8,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    upload: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    }
});