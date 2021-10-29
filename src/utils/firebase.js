import firebase from "./../config/firebase-config";

export const uploadImages = (images, setUrls) => {
  const promises = [];

  images.forEach((image) => {
    const uploadTask = firebase.storage.ref(`images/${image.name}`).put(image);

    promises.push(uploadTask);

    uploadTask.on(
      "state-changed",
      (snapshot) => {},
      (error) => {
        console.log("upload image", error);
      },

      async () => {
        await firebase.storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrls(url);
          });
      }
    );
  });

  return promises;
};


export const uploadImages2 = async (image, setUrls) => {
 
    const uploadTask = firebase.storage.ref(`images/${image.name}`).put(image);


    uploadTask.on(
        "state-changed",
        (snapshot) => {},
        (error) => {
            console.log("upload image", error);
        },

        () => {
          firebase.storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
                setUrls(url);
            });
        }
    );

    return uploadTask;
  };
