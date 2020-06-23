import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import InstructorCard from './cards/instructorCard';
import PageNoResult from './core/pageNoResult';
import * as userService from '../services/userService';

const Follows = props => {
    const { Instructor } = props;
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    console.log(Instructor);

    useEffect(()=>{
        if (props.match.path === '/following') {
            async function fetchFollowing() {
                const { data } = await userService.getFollowing();
                setFollowing(data);   
            }
            fetchFollowing();
        } else if (props.match.path === '/followers') {
            async function fetchFollowers(){
              const { data } = await  userService.getFollowers();
              setFollowers(data)
            }
            fetchFollowers();
        }
    },[props.match.path]);

    return ( 
        <React.Fragment>
            <Container>
                {
                    props.match.path === '/following' ?
                        following.length > 0 ?
                            <div className="InstCard">
                                {
                                    following.map(follow => (
                                        <InstructorCard
                                            key={follow}
                                            Instructor={follow}
                                        />
                                    ))
                                }
                            </div>
                        :
                        <PageNoResult />
                    :
                        followers.length > 0 ?
                            <div className="InstCard">
                                {
                                    followers.map(follower => (
                                        <InstructorCard
                                            key={follower}
                                            Instructor={follower}
                                        />
                                    ))
                                }
                            </div>
                        :
                        <PageNoResult />
                }
            </Container>
        </React.Fragment>
    );
}
 
export default Follows;