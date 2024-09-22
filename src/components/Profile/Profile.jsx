import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.userData}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.stats_item}>
          <span className="stats-header">Followers</span>
          <span className={styles.statsData}>{stats.followers}</span>
        </li>
        <li className={styles.stats_item}>
          <span className="stats-header">Views</span>
          <span className={styles.statsData}>{stats.views}</span>
        </li>
        <li className={styles.stats_item}>
          <span className="stats-header">Likes</span>
          <span className={styles.statsData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
