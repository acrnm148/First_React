import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요 안녕하세요~",
  },
  {
    id: 2,
    message: "반갑습니다 반가워요~",
  },
  {
    id: 3,
    message: "무조건 잘 될 겁니다~",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        // js의 list는 push로 값을 넣어준다.
        notifications.push(reservedNotifications[index]);
        this.setState({
          // 클래스 컴포넌트에서 state를 업데이트하려면 반드시 setState를 사용한다.
          notifications: notifications,
        });
      } else {
        // notifications 비우기
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((noti) => {
          return <Notification key={noti.id} id={noti.id} message={noti.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;
