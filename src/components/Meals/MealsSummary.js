import classes from './MealsSummary.module.css'


const MealsSummary = () => {

    return (
        <section className={classes.summary}>
           <h2>Delicious Food, Right into Your Place</h2> 
           <p>
           Today's Meals strives to source local, sustainable and organic when possible. 
           We work hard to source premium ingredients and we cook everything from scratch with love. 
           We also do our best to pay our employees living wages (tips are shared with all employees, including kitchen staff) 
           and to reduce our environmental footprint wherever we can
           </p>
           <p>
           Overall, these factors translate to higher menu prices, but we hope that you find value and feel
           a sense of comfort in knowing that we aim to get better everyday at doing what is important to us.
           </p>
        </section>
    )
}

export default MealsSummary;