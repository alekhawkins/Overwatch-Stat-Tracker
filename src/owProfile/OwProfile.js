import React from 'react';
import './OwProfile.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import ana from '../assets/ana.jpg';
import reinhardt from '../assets/reinhardt.jpeg';
import ashe from '../assets/ashe.jpg';
import overwatch from '../assets/overwatch.png';

export default class OwProfile extends React.Component{
    state = {
        loading: true,
        profile: null,
    };

    async componentDidMount() {
        const url = "http://owapi.io/profile/pc/us/JesusMurphy-11665";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({profile: data, loading: false})
        console.log(data);
    }

    render() {
        return(
            <div>
                {this.state.loading || !this.state.profile ? (
                    <div>loading...</div> 
                    ) : (
                        <div className="all">
                        <img src={overwatch}/>
                        <h1 className="battleTag">JesusMurphy#11665</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <Card>
                                        <CardImg top width="100%" src={ashe} alt="" />
                                        <CardBody>
                                        <CardTitle>Damage</CardTitle>
                                        <CardSubtitle>{this.state.profile.competitive.damage.rank}</CardSubtitle>
                                        <CardText><img className="rankImg" src={this.state.profile.competitive.damage.rank_img} alt=''/></CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card>
                                        <CardImg top width="100%" src={reinhardt} alt="" />
                                        <CardBody>
                                        <CardTitle>Tank</CardTitle>
                                        <CardSubtitle>{this.state.profile.competitive.tank.rank}</CardSubtitle>
                                        <CardText><img className="rankImg" src={this.state.profile.competitive.tank.rank_img} alt=''/></CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-4">
                                    <Card style={{width: '93%'}}>
                                        <CardImg top width="100%" src={ana} style={{height: '53%'}} alt="" />
                                        <CardBody>
                                        <CardTitle>Support</CardTitle>
                                        <CardSubtitle>{this.state.profile.competitive.support.rank}</CardSubtitle>
                                        <CardText><img className="rankImg" src={this.state.profile.competitive.support.rank_img} alt=''/></CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-12">
                                    <Card style={{width: '98%', marginTop: '2em'}}>
                                        <CardBody>
                                        <CardTitle style={{fontSize: '1em'}}>Other Stats:</CardTitle>
                                        <CardText>Level: {this.state.profile.level}</CardText>
                                        <CardText>Games: Quickplay: : Won: {this.state.profile.games.quickplay.won}, Competitive: : Won: {this.state.profile.games.competitive.won}, Lost: {this.state.profile.games.competitive.lost}, Draw: {this.state.profile.games.competitive.draw}, Winrate: {this.state.profile.games.competitive.win_rate}%</CardText>
                                        <CardText>Playtime: Quickplay: {this.state.profile.playtime.quickplay}, Competitive: {this.state.profile.playtime.competitive}</CardText>
                                        <CardText>Endorsement: Shotcaller: {this.state.profile.endorsement.shotcaller.rate}, Sportsmanship: {this.state.profile.endorsement.sportsmanship.rate}, Teammate: {this.state.profile.endorsement.teammate.rate}</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
        );
    }

}
    

