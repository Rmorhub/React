import React from 'react';
import './comments.scss';
import UserInfo from './Userinfo';
import moment from 'moment';

const formatDate = (date) => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.user} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
