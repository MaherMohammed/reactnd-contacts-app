import React, {Component} from 'react';

class MainComponent extends Component{
    render(){
        const movies = this.props.movies;
        const profiles = this.props.profiles;
        const users = this.props.users
        return(
            <ol className = 'contact-list'>
                <li>
                    <p>{movies[1].name+' '}</p>
                    {profiles.map((profile)=>{
                        return(
                            <p key = {profile.id}>
                                {profile.favoriteMovieID === '1'?users[profile.userID].name+' ':''}
                            </p>
                        )
                    })}
                </li>
            </ol>
        )
    }
}

export default MainComponent