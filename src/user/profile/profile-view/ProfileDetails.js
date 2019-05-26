import React, { Component } from 'react'
import { getUserById, rateProfile } from '../../../utils/APIUtils'
import Alert from 'react-s-alert'
import { Link } from 'react-router-dom'
import profile_pic from '../../../assets/images/account.png'
import edit_icon from '../../../assets/images/edit-icon.png'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings'

const ProfileView = styled.div`

    min-width: 20vw;
    max-width: 20vw;
    border: solid 1px lightgrey;
    padding: 0;
    position: relative;
    text-align: center;
    padding: 0.5em 1em 0.5em 1em;

    :hover {
        -moz-box-shadow:    inset 0 0 2px #000000;
        -webkit-box-shadow: inset 0 0 2px #000000;
        box-shadow:         inset 0 0 2px #000000;
    }

    & * img {
        max-width: 100%;
        max-height: auto;
        border-radius: 50%;
        padding-bottom: 2em;
    }
    & * .user-credentials {
        width: 100%;
        position: relative;
        text-align: left;
        font-size: 1.5em;
    }

    & * .user-credentials::before {
        content: attr(name);
        clear: right;
        display: block;
        position: absolute;
        padding-top: 3em;
        font-size: 0.8em;
        bottom: 1.8rem;
        color: lightblue;
    }

    & * .user-credentials:hover::before {
        color: steelblue;
    }

    & * .info-label {
        font-weight: bold;
        margin-bottom: 0px;
    }

    & * .user-phone, .user-email {
        text-size: 3em;
    }

    & * .edit-image:hover {
        transform: scale(1.3, 1.3);
        top: 5px;
        right: 5px;
    }

    & * .edit-image {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 3em;
        height: auto;
        rgba(211, 211, 211, 0.5);
        transition:
            transform 150ms,
            top 50ms,
            bottom 50ms;
    }
`

const StyledLink = styled(Link)`
    color: black;

    &:hover {
        color: black;
        text-decoration: none;
    }
`

const TotalRatings = styled.p`

`

class ProfileDetails extends Component {
    constructor() {
        super();

        this.state = {
            mounted: false,
            adverts: []
        }

        this.changeRating = this.changeRating.bind(this);
    }

    changeRating(newRating, name) {
        const rating = Math.ceil(newRating);
        console.log(this.current_user_id)
        if(this.current_user_id) {
            rateProfile(this.user_id, rating)
            .then(response => {
                this.loadUserById();
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    componentDidMount() {
        this.user_id = this.props.user_id;
        this.current_user_id = this.props.current_user_id;
        this.loadUserById();
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    loadUserById() {
        const user = {
            "profileId": this.user_id
        }

        const userRequest = Object.assign({}, user)
        getUserById(userRequest).then(userData => {
            console.log(userData)
            this.setState({
                user: {
                    ...this.state.user,
                    firstName: userData['firstName'],
                    lastName: userData['lastName'],
                    visibleName: userData['visibleName'],
                    telephoneNumber: userData['telephoneNumber'],
                    contactMail: userData['contactMail'],
                    rating: userData['rating'] == null ? 0 : userData['rating'],
                    totalRatings: userData['ratingCount'] == null ? 0 : userData['ratingCount'],
                    id: userData['id']
                },
                mounted: true
            })
        }).catch(error => {
            Alert.error((error && error.message) || "Ups!")
        })
    }

    render() {
        if(!this.state.mounted)
            return null

        const show_adverts = this.props.show_adverts;
        const rating_enabled = this.props.rating_enabled;

        const unknownUser = !this.state.user.firstName || !this.state.user.lastName;

        return (
            <ProfileView>
                <StyledLink to={"/profile/user/" + this.user_id}>
                    <img src={profile_pic} alt="Avatar"/>
                    <div>
                        <p id={this.user_id} name={'@' + this.state.user.visibleName} className="user-credentials">
                            { unknownUser ? "Nieznany" : this.state.user.firstName + " " + this.state.user.lastName}
                        </p>
                    </div>
                </StyledLink>
                { this.state.user.contactMail !== null ? (
                    <div>
                        <p className="info-label">Adres email</p>
                        <p className="user-email">{this.state.user.contactMail}</p>
                    </div>
                ) : (null)}

                { this.state.user.telephoneNumber !== null ? (
                    <div>
                        <p className="info-label">Numer telefonu</p>
                        <p className="user-phone">{this.state.user.telephoneNumber}</p>
                    </div>
                ) : (null)}

                { this.state.user.is_verified ? (
                    <VerifiedBadge>Zweryfikowany</VerifiedBadge>
                ) : (null)}

                { rating_enabled ? (
                    <div>
                        <StarRatings
                        rating={this.state.user.rating}
                        starRatedColor="dodgerblue"
                        starHoverColor="royalblue"
                        starDimension="2em"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                        />
                        <TotalRatings>
                            (na podstawie {this.state.user.totalRatings} {this.state.user.totalRatings === 1 ? 'ogłoszenia' : 'ogłoszeń'})
                        </TotalRatings>
                    </div>
                ) : (null)}

                { this.state.loaded && show_adverts && this.state.adverts.length > 0 ? (
                    <div>
                        <p className="info-label">Ostatnie ogłoszenia</p>
                        {this.getAdvertList(this.state.adverts)}
                    </div>
                ) : (null)}


                { this.props.current_user_id == this.props.user_id ? (
                    <a href="/profile/edit">
                        <div className="edit-link">
                            <img className="edit-image" border="0" alt="edit-profile" src={edit_icon} text="Edytuj"/>
                        </div>
                    </a>
                ) : (null)}
            </ProfileView>
        )
    }
}

export default ProfileDetails;