import { useState, useEffect } from 'react';
import React from 'react';
import { Button, Container } from 'react-bootstrap'
import SearchedCard from '../cards/searched-card'
import { search } from '../../services/featuresService'
const Search = (props) => {
    console.log(props.searchWord)

    const [state, setState] = useState({
        instructors: [],
        courses: [],
        searchedData: [],
        activeData: [],
        allData:true
   
    })
    useEffect(() => {
        search().then(({ data }) => {
            console.log(data)
        
            setState({ ...state,instructors: data.users, courses: data.courses })
        })
            .catch((err) => console.log(err))

    },[])
    
    const handleSearchInstructors = () => {
 
        setState({...state,activeData:state.instructors,allData:false})
    }
    const handleSearchCourses = () => {

        setState({...state,activeData:state.courses,allData:false})

    }
    const preventProp = (e) => {
        e.stopPropagation();
    }
    if(state.allData){
         state.activeData=[...state.instructors,...state.courses]
         state.searchedData = state.activeData.filter(i => (i[i.title? 'title': 'fullName'].toLowerCase().includes(props.searchWord.toLowerCase())))
         
     }
    else if (!state.allData) {
        
        state.searchedData = state.activeData.filter(i => (i[i.title? 'title': 'fullName'].toLowerCase().includes(props.searchWord.toLowerCase())))
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
                            {state.searchedData.map(data => (
                                <SearchedCard
                                    key={data.id}
                                    data={data}
                                    searchBy={data.title? 'title': 'fullName'}
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