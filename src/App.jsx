import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import TaskHeader from './components/TaskHeader/TaskHeader';

import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

function App() {
  return (
    <>
      <TaskHeader>1</TaskHeader>

      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <TaskHeader>2</TaskHeader>

      <FriendList friends={friends} />

      <TaskHeader>3</TaskHeader>

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
