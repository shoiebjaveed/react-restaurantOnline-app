import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Today's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt='delicious food right into your home!' />
      </div>
    </Fragment>
  );
};

export default Header;
