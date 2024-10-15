import style from './RestaurantBranch.module.css';
import restaurantImage from '../../../public/assets/images/hero-bg.avif';

let RestaurantBranch = () => {
    return (
        <div className={style['branch-container']}>
            <div className={style["restaurant-img"]}>
            <div className={style.blank}></div>
                <img src={restaurantImage} alt="Rastruant Branch"/>
            </div>
            <div className={style["restaurant-info"]}>
                <h2>Restaurant Name: <strong>The Flavor Haven</strong></h2>
                <p>Welcome to The Flavor Haven, where every bite takes you on a culinary journey around the world. Our menu is a fusion of international flavors, crafted with the freshest ingredients and served with a passion for perfection. Whether you're indulging in our signature dishes or exploring new tastes, we promise an unforgettable dining experience that tantalizes your senses. Join us for a delicious escape from the ordinary! 🍽️✨</p>
                <div className="btn">
                    <a href="#">Get in Touch</a>
                </div>
            </div>
        </div>
    )
}

export default RestaurantBranch;