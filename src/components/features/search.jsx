import { useState } from 'react';
import React from 'react';
import { Button, Container } from 'react-bootstrap'
import SearchedCard from '../cards/searched-card'
import { getAllInstructors } from '../../services/authService'
const Search = (props) => {
    console.log(props.searchWord)

    const [state, setState] = useState({
        instructors: [],
        searchedInstructors:[]
    })
    const preventProp = (e) => {
        e.stopPropagation();
    }
    const handleSearchCourses = () => {
    }
    const handleSearchInstructors = () => {
        getAllInstructors().then(({ data }) => {
            console.log(data)
            setState({ ...state, instructors: data })
        })
            .catch((err) => console.log(err))

    }
    if(state.instructors.length>0){

        state.searchedInstructors=state.instructors.filter(i=>i.fullName.toLowerCase().includes(props.searchWord.toLowerCase()))
    }
    
    return (
        <React.Fragment>

            <div className="search" onClick={props.onClosingSearch}>
                <div className="search-panel" onClick={preventProp}>
                    <Container className="searchContainer">

                        <div className="search-by">
                            <Button variant="warning" onClick={handleSearchCourses}>Course</Button>{' '}
                            <Button variant="info" onClick={handleSearchInstructors}>Instructor</Button>{' '}
                        </div>
                        <div className="search-list">
                        {state.searchedInstructors.map( instructor => (
                                       <SearchedCard 
                                       key={instructor.id}
                                       instructor={instructor}
                                       />
                                    ))}
                           
                        </div>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Search;