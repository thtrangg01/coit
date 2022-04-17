import firebase from "@/firebase";
import { v4 as uuid_v4 } from "uuid";

// 'notices' the same as collection in mongodb
const db = firebase.database().ref("notices");

/*
  notices = {
    id : uuid_v4,
    feed: feed,
    user_id: user_id,
    create_date: now(),
    isReaded: boolean
  }
*/

class NoticesService{
  /**
   * @param {*} user_id 
   * @returns {Promise}
   */
  getByUserId(user_id){
    return db.orderByChild("user_id").equalTo(user_id).get();
  }

  /**
    @param {Object} notice
    @return {Promise}
    create new notices by list Liked user
  */
  addNotices(feed){
    let notices = [];
    
    for (id in feed.likes){
      let notice = {
        id : uuid_v4(),
        feed: feed,
        user_id: user_id,
        create_date: Date.now(),
        isReaded: false
      };

      notices.push(notice);
    };
  
    
    return db.push(notices);
  }

  /**
   * change isReaded to true
   * @param {*} notice_id 
   * @returns {Promise}
   */
  changeIsReaded(notice_id){
    return db.child(notice_id).update({isReaded: true});
  }
}

export default new NoticesService();