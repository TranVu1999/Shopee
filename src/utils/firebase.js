import {storage} from './../config/firebase-config';

export const uploadImage = (image, setImage) =>{
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
        
    uploadTask.on(
        "state-changed",
        snapshot => {},
        error =>{
            console.log("upload image", error)
        },
        () =>{
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url =>{
                setImage(url)
            });
        }
    )
}