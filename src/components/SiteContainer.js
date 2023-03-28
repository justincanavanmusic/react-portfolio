import React, {useState} from 'react';
import Nav from './Nav';
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Resume from './pages/Resume'


export default function SiteContainer(props) {
const [currentPage, setCurrentPage] = useState('Portfolio')
console.log(props);

const displayPage = (props) => {
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
    <div>
        <Nav currentPage={currentPage} changePage={changePage} />
        {displayPage()}
    </div>
)
}

