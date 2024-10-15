import style from './CustmerReviewCard.module.css';

const CustmerReviewCard = () => {
    return (
        <div className={style['review-card-container']}>
            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel amet officiis incidunt dicta totam praesentium minima dolores! Ipsam recusandae eius quos aut facere optio obcaecati quo commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>

            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Loreserunt suscipit ducimus tempora magnam numquam! Porro sunt hic, accusamus, adipisci non nulla, c commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>

            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, conselores! Ipsam recusandae eius quos aut facere optio obcaecati quo commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>


            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel amet s aut facere optio obcaecati quo commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>

            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel amet officiis incidunt dicta totam praesentium minima dolores! Ipsam recusandae eius quos aut facere optio obcaecati quo commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>

            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel amet officiis incidunt dicta totam praesentium minima dolores! Ipsam recusandae eius quos aut facere optio obcaecati quo commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>

            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel amet officiis incidunt dicta totam praesentium minima dolores! Ipsam recusandae eius quos aut facere optio obcaecati quo commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>

            <div className={style['review-card-content']}>
                <div className={style['custmer-img-name']}>
                    <img src="https://via.placeholder.com/100x100" alt="Customer Pic" />
                    <h5>Customer Name</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel amet officiis incidunt dicta totam praesentium minima dolores! Ipsam recusandae eius quos aut facere optio obcaecati quo commodi natus beatae!</p>
                <div className={style['review-card-rating']}>
                    {
                        [...new Array(5)].map((rat, idx) => <i class={`fa-${ idx + 1 <= 3? 'solid' : 'regular'} fa-star`}></i>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CustmerReviewCard;