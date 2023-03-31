import React, {useState} from 'react';
import Nav from './Nav';
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './pages/Footer'

export default function SiteContainer(props) {
const [currentPage, setCurrentPage] = useState('AboutMe')
// console.log(props.styles.paragraph);

const displayPage = () => {
    if (currentPage === 'Portfolio') {
        return < Portfolio />;
    }
    if (currentPage === 'AboutMe') {
        return < AboutMe paragraph={ props.styles.paragraph } header={ props.styles.header } font={ props.styles.font }/>;
    }   
    if (currentPage === 'Contact' ) {
        return < Contact font={props.styles.font} />;
    }
    return < Resume />;
};

const changePage = (page) => setCurrentPage(page)

return (
    <>
    <div>
        <Nav 
        font = { props.styles.font } 
        currentPage = { currentPage } 
        changePage = { changePage } />
        {displayPage()}
        <Footer font = {props.styles.font}/>
    </div>
   
    </>
)
}

