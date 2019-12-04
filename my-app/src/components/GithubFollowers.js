import React from 'react';
import axios from 'axios';
import GithubCard from './GithubCard'

class GithubFollowers extends React.Component {

  state = {
    followers: [],
  }


  componentDidMount() {

    axios.get("https://api.github.com/users/skeeb32/followers")
      .then(response => {
          console.log(response.data)
          this.setState({
            followers:response.data
          });
      })
      .catch(error => {
          console.log('You got an error again', error)
      });
  }

  render(){
    return (
      <div>
        {this.state.followers.map(follower => (
            <GithubCard
            key={follower.id}
            user={follower.login}
            image={follower.avatar_url}
            location={follower.location}
            />
        ))}
      </div>
    );
  }

}

export default GithubFollowers;