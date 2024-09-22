import { header } from './TaskHeader.module.css';

const TaskHeader = ({ children }) => {
  return <h2 className={header}>Task #{children}</h2>;
};

export default TaskHeader;
