import React from 'react';
import { Button, Container } from 'react-bootstrap'
import SearchedCard from '../cards/searched-card'
const Search = (props) => {
    const preventProp=(e)=>{
        e.stopPropagation();
    }
    return (
        <React.Fragment>

            <div className="search" onClick={props.onClosingSearch}>
                <div  className="search-panel" onClick={preventProp}>
                    <Container className="searchContainer">

                        <div className="search-by ">
                            <Button variant="warning">Course</Button>{' '}
                            <Button variant="info">Instructor</Button>{' '}                          
                        </div>
                        <div className="search-list">
                        {/* <SearchedCard/>
                        <SearchedCard/>
                        <SearchedCard/>
                        <SearchedCard/> */}
                        </div>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Search;