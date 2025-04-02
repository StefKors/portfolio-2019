import styles from "./List.module.css";
import data from "../../data/db.json";
import ListItem from "../ListItem/ListItem";
import { motion } from "framer-motion";

const SlideCounter = ({ children, ...props }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 0, opacity: 0 }}
    transition={{ 
      duration: 0.7, 
      delay: 0.9,
      ease: [0.785, 0.135, 0.15, 0.86]
    }}
    {...props}
  >
    {children}
  </motion.div>
);

const ListWrapper = ({ children, ...props }) => (
  <motion.div
    initial={{ x: '0%', opacity: 0 }}
    animate={{ x: '0%', opacity: 1 }}
    {...props}
  >
    {children}
  </motion.div>
);

const ListItemWrapper = ({ children, index, ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: index * 0.05 }}
    {...props}
  >
    {children}
  </motion.div>
);

const List = () => {
  return (
    <div className={styles.wrapper}>
      <ListWrapper className={styles.projectList}>
        {data.map((post, index) => (
          <ListItemWrapper key={index} index={index}>
            <ListItem
              data={post}
              index={index}
              key={index}
              isOpen={"open"}
              className={styles.item}
            />
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </div>
  );
}

export default List;
