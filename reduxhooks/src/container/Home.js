import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {newsSelectors} from '../redux/newsData';
import {
    getLatestNews,
    getArticleNews
} from '../services/getNewsData';

import LatestNews from '../component/Home/LatestDisplay';
import ArticleNews from '../component/Home/ArticleDisplay';

const Home = () => {
    const dispatch = useDispatch();

    const latestNewsList = useSelector(
        newsSelectors.getLatestNews
    )
    const articleNewsList = useSelector(
        newsSelectors.getArticleNews
    )

    

    useEffect(()=> {
        dispatch(getLatestNews())
        dispatch(getArticleNews())
    },[])

    console.log(">>>>latestNewsList",latestNewsList)

    return(
        <>
            <LatestNews ldata={latestNewsList?.data}/>
            <ArticleNews adata={articleNewsList?.data}/>
        </>
    )

}

export default Home