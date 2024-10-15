import style from './Quotes.module.css';
import QuoteCard from './QuoteCard/QuoteCard';
import { useState, useEffect } from 'react';


const Quotes = () => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setisLoading(true);
            try{
                const response = await fetch('https://dummyjson.com/quotes');
                const data = await response.json();
                setData(data.quotes);
                
            }catch(err){
                console.error('Error fetching data', err);
            }finally{
                setisLoading(false);
            }
        }
        getData();
       
    }, [])
    return (
        <div className={style.quotes}>
            <h1 className={style.heading}>Quotes</h1>
            <div className={style['quote-container']}>
                {
                    isLoading ? (<h1 style={{textAlign: 'center', color: "#333"}}>Loading...</h1>) : (data.map((quote) => {
                        return <QuoteCard key={quote.id} {...quote} />
                    }))
                }

            </div>
        </div>
    );
}

export default Quotes;