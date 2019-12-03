import React from "react";
import styled from "styled-components";
// import { Card, CardText, CardTitle, CardBody } from "reactstrap";

const Card = styled.div`
  background-color: white;
  width: 380px;
  height: 300px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
`;

const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
  font-weight: 500;
`;

const CardImage = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
`;

const GithubCard = ({user, image, url, location, followers_url, login, public_repos}) => {
  return (
    <Card>
      <CardImage src={image} alt="image of the user"/>
      <Title>Name: {user}</Title>
      <p className="url">URL: {url}</p>
      <p className="location">Location: {location}</p>
      <p className="followers">Followers: {followers_url}</p>
      <p className="login">Login: {login}</p>
      <p className="reposl">Repos: {public_repos}</p>
    </Card>
  )
}

export default GithubCard;