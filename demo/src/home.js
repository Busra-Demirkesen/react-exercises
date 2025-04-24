import {useState} from 'react';
import blogList from './blogList';

const Home = () =>{
    const [blogs,setBlogs] = useState([
       {title: 'My new website', body:'lorem impus...',author:'mario', id:1} 
       {title: 'Welcome party!', body:'lorem impus...',author:'yoshi', id:1}
       {title: 'Web dev top tips', body:'lorem impus...',author:'mario', id:1}
    ]);

    return(
       <div className='home'>
        <blogList blogs={blogs} title='All Blogs'/>
       </div> 
    );
}