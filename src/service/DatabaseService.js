import firebase from "@/firebase";
import { v4 as uuid_v4 } from "uuid";

// 'feeds' the same as collection in mongodb
const db = firebase.database().ref("feeds");

/*
  feed = {
    feed_id: uuid(),
    title: "",
    desc: "",
    image: "",
    user_id: "",
    user_name: "",
    user_image: "",
    created_at: Date.now(),
    updated_at: Date.now(),
    comments: [
      {
        comment_id: uuid(),
        user_id: "",
        user_name: "",
        user_image: "", 
        content: "",
        created_at: Date.now(),
        updated_at: Date.now()
      },
      ...
    ],
    likes: [uuid_1, uuid_2, ...],
  }
*/

class DatabaseService {
  create(feed) {
    // generate id
    feed.id = uuid_v4();
    return db.push(feed);
  }

  getAll() {
    return db.once("value");
  }

  get(id) {
    return db.child(id).once("value");
  }

  update(id, feed) {
    return db.child(id).update(feed);
  }


  delete(id) {
    return db.child(id).remove();
  }

  getByUser(user_id) {
    return db.orderByChild("user_id").equalTo(user_id).once("value");
  }

  getNewest() {
    return db.orderByChild("created_at").limitToLast(1).once("value");
  }

  getNewestByPageAndSize(page, size=10) {
    const startAt = page * size;
    return db.orderByChild("created_at").limitToLast(size).startAt(startAt).once("value");
  }

  insertComment(id, comment) {
    return db.child(id).child("comments").push(comment);
  }

  removeComment(id, comment_id) {
    return db.child(id).child("comments").child(comment_id).remove();
  }

  changeComment(id, comment_id, comment) {
    return db.child(id).child("comments").child(comment_id).update(comment);
  }

  changeLike(id, user_id) {
    const liked = db.child(id).child("likes").child(user_id).once("value");
    return liked? db.child(id).child("likes").child(user_id).remove() : db.child(id).child("likes").push(user_id);
  }
}

export default new DatabaseService();