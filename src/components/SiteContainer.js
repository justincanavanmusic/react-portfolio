import React, { useState } from 'react';
import Nav from './Nav';
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './pages/Footer'
import '../index.css'

export default function SiteContainer(props) {
const [currentPage, setCurrentPage] = useState('AboutMe')

const displayPage = () => {
    if (currentPage === 'Portfolio') {
        return < Portfolio />;
    }
    if (currentPage === 'AboutMe') {
        return < AboutMe />;
    }   
    if (currentPage === 'Contact' ) {
        return < Contact />;
    }
    return < Resume />;
};

const changePage = (page) => setCurrentPage(page)

return (
    <>
    <div className='color-scheme'>
        <Nav 
        currentPage = { currentPage } 
        changePage = { changePage } />
        {displayPage()}
        <Footer className='color-scheme' />
    </div>
   
    </>
)
}

