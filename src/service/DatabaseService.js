import firebase from "@/firebase";
import { v4 as uuid_v4 } from "uuid";
import NoticesService from "./NoticesService";

// 'feeds' the same as collection in mongodb
const db = firebase.database().ref("/feeds");

/*
  feed = {
    id: uuid(),
    title: "",
    desc: "",
    image: "",
    user: user,
    created_at: Date.now(),
    updated_at: Date.now(),
    comments: [
      {
        comment_id: uuid(),
        user: user,
        content: "",
        created_at: Date.now(),
        updated_at: Date.now()
      },
      ...
    ],
    likes: [user1, user2,...],
  }
*/

// function return promise
class DatabaseService {
  /**
   *
   * @param {*} feed
   * @returns {Promise}
   */
  create(feed) {
    // generate id
    feed.id = uuid_v4();
    return db.push(feed);
  }

  /**
   * get all feed
   * @returns {Promise}
   */
  getAll() {
    return db.get();
  }

  /**
   *
   * @param {*} id
   * @returns {Promise}
   */
  get(id) {
    return db.child(id).get();
  }

  update(id, feed) {
    return db.child(id).update(feed);
  }

  delete(id) {
    return db.child(id).remove();
  }

  getByUser(user_id) {
    return db.orderByChild("user_id").equalTo(user_id).get();
  }

  getNewest(page) {
    let startAt = (page - 1) * 10;
    return db.orderByChild("created_at").limitToLast(10).startAt(startAt).get();
  }

  /**
   *
   * @param {*} notice_id
   * @param {*} comment
   * @returns {Promise}
   */
  insertComment(id, comment) {
    db.orderByChild("id")
      .equalTo(id)
      .get()
      .then((snapshot) => {
        let feed = snapshot.val();
        // snapshot.child('comments').push(comment);
        console.log(snapshot.child("comments"));
        // feed.comments.push(comment);
        // NoticesService.addNotices(feed);
        let key = Object.keys(snapshot.toJSON())[0];
        console.log(key);
        return db.child(key).child("comments").push(comment);
      })
      .catch((error) => {
        console.log(error);
      });

    //

    // comment.updated_at = Date.now();
    // return db.child("id").child("comments").push(comment);
  }

  /**
   * remove comment in feed
   * @param {*} feed_id
   * @param {*} comment_id
   * @returns {Promise}
   */
  removeComment(id, comment_id) {
    return db.child(id).child("comments").child(comment_id).remove();
  }

  changeComment(id, comment_id, comment) {
    return db.child(id).child("comments").child(comment_id).update(comment);
  }

  /**
   * change like status
   * @param {*} feed_id
   * @param {*} user_id
   * @returns {Promise}
   */
  changeLike(id, user_id) {
    db.orderByChild("id")
      .equalTo(id)
      .child("likes")
      .child(user_id)
      .once("value")
      .then((snapshot) => {
        liked = snapshot.val();
        return liked
          ? db.child(id).child("likes").child(user_id).remove()
          : db.child(id).child("likes").push(user_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default new DatabaseService();
