import firebase from "@/firebase";
import { v4 as uuid_v4 } from "uuid";

// save files in /images/
const storageBucket = firebase.storage().ref("images");
class StorageService{
  upload(file){
    const random_file_name = uuid_v4();
    return storageBucket.child(random_file_name).put(file);
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

  get(file_name){
    return storageBucket.child(file_name).getDownloadURL();
  }

  update(file_name, newFile){
    return storageBucket.child(file_name).put(newFile);
  }
}

export default new StorageService();