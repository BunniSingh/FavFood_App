import style from './Hero.module.css';

const Hero = () => {
    return (
        <>
        <div className={style['hero-container']}>
            <div className={style.hero}>
                <h1 className={style.heading}>Let us find your <br />
                <strong>Forever Food.</strong></h1>
                <p className={style.description}>"Craving something delicious? 🍕🍔 Dive into our menu and get a taste of happiness, one bite at a time! 😋✨ Your favorite flavors are just a click away!"</p>
                <div className={style.btns}>
                    <a href="#" className={style.btn}>Search Now</a>
                    <a href="#" className={style.btn}>Know more</a>
                </div>
            </div>
            <div className={style.social}></div>
        </div>
        </>
    )
}

export default Hero;