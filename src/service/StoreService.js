import firebase from "@/firebase";
import { v4 as uuid_v4 } from "uuid";

// save files in /images/
const storageBucket = firebase.storage().ref("images");
class StorageService{
  upload(file){
    const random_file_name = uuid_v4();
    const filename_extension = file.name.split(".").pop();
    const filename = random_file_name + "." + filename_extension;
    let upload_task = storageBucket.child(filename).put(file);

    // return file url
    return upload_task.then(snapshot => snapshot.ref.getDownloadURL());
  }

  getDownloadURL(file_name){
    return storageBucket.child(file_name).getDownloadURL();
  }

  delete(file_name){
    return storageBucket.child(file_name).delete();
  }

  getAll(){
    return storageBucket.listAll();
  }


  update(file_name, newFile){
    return storageBucket.child(file_name).put(newFile);
  }
}

export default new StorageService();