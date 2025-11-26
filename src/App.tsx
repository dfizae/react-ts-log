import styles from './App.module.css';
import classNames from 'classnames/bind';
import Ex71 from './components/ch7/Ex71';

export default function App(){
  const isActive = true;
  const cx = classNames.bind(styles);

	return(
      <>  
        <button className = {cx({'btn': true, 'is-active': isActive})}>button</button>
        <Ex71 />
      </>
    );
}