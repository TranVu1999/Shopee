import {storage} from './../config/firebase-config';

export const uploadImages = (images, setUrls) =>{
    const promises = [];

    images.map(image =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        
        promises.push(uploadTask);

        uploadTask.on(
            "state-changed",
            snapshot => {},
            error =>{
                console.log("upload image", error)
            },

            async () =>{
                await storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    setUrls(url)
                })
            }
        )
    })

    return promises;
    
}