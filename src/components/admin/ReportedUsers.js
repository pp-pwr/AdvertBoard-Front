import React, { Component } from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { setProfileStatus, setProfileCaseStatus, getUserById, getUnsolvedProfileReports, getBannedProfiles } from '../../utils/APIUtils'
import { PageSelectionPanel } from '../advert/filters'
import LoadingIndicator from '../../common/LoadingIndicator'
import Alert from 'react-s-alert'
import { Redirect } from 'react-router-dom'

const ProfileTile = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 2vh 6vw 2vh 6vw;
    overflow: hidden;
    items-align: center;

    --webkit-transition: transform 250ms;
    transition: transform 250ms;

    &:hover {
        transform: scale(1.1, 1.1);
        filter: drop-shadow(16px 16px 20px rgba(0, 0, 0, 0.19));
    }
`

const PanelFragment = styled.div`
    width: 100%;
    display: block;
    text-align: center;

    & > span > h1, p {
        margin-left: 2vh;
    }
`

const ReportDetails = styled.div`
    display: inherit;
    margin: 1vh auto 1vh 0.5vw;
    flex-grow: 1;

    & > .profile-photo {
        width: 8vw;
        height: 8vw;
        object-fit: cover;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    margin: 1vh 0.5vw 1vh 0.5vw;
    width: auto;
    align-items: center;
    flex-wrap: wrap;

    & > .button {
        width: 5em;
        height: 3.5em;
        border: transparent;

        --webkit-transition: transform 150ms;
        transition: transform 150ms;

        &:hover {
            transform: scale(1.1, 1.1)
        }
    }

    & > #accept-button {
        background-color: lightgreen;
        margin-right: 1vw;
    }

    & > #decline-button {
        background-color: salmon;
        margin-right: 1vw;
    }
`

class ProfileField extends Component {

    constructor() {
        super()

        this.state = {
            profile: null,
            mounted: false,
            toProfile: false
        }

        this.showProfile = this.showProfile.bind(this)
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })

        const profileRequest = {
            profileId: this.props.profileId
        }

        getUserById(profileRequest)
        .then(response => {
            this.setState({
                profile: response
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })

    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    showProfile(e, profileId) {
        e.preventDefault()

        this.setState({toProfile: true})
    }

    buttonAction(e, type, profileId, caseId) {
        e.stopPropagation()
        
        console.log(profileId + ' ' + caseId)

        switch(type) {
            case 'approve':
                this.props.approveButtonHandler(profileId, caseId)
                break;
            case 'decline':
                this.props.declineButtonHandler(caseId)
                break;
            default:
        }
    }

    render() {

        if(!this.state.mounted) {
            return <LoadingIndicator />
        }

        if (this.state.toProfile === true) {
            return <Redirect to={'/profile/user/' + this.props.profileId } push={true} />
        }

        return (
            <ProfileTile className="profile-tile" onClick={e => this.showProfile(e)}>
                <ReportDetails>
                    {/* <img src={getAdvertImageURL(this.props.profileId)} alt="Ad" className="profile-photo"></img> */}
                    {
                        this.state.profile !== null ? (
                            <div>
                                <p>Login: {this.state.profile.visibleName}</p>
                                <p>Imię i Nazwisko: {this.state.profile.firstName + " " + this.state.profile.lastName}</p>
                                <p>Email: {this.state.profile.contactMail}</p>
                                { this.props.declineVisible ? (
                                    <div>
                                         <p>Raport przez: {this.props.profile.reportingUserName}</p>
                                        <p>Komentarz: {this.props.profile.comment}</p>
                                    </div>
                                ) : (null)}
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </ReportDetails>
                <ButtonDiv>
                    <Button className="button" id="accept-button" onClick={(e) => this.buttonAction(e, 'approve', this.props.profileId, this.props.caseId)}>OK</Button>
                    { this.props.declineVisible ? (
                        <Button className="button" id="decline-button" onClick={(e) => this.buttonAction(e, 'decline', null, this.props.caseId)}>NO</Button>
                    ) : (
                        <div></div>
                    )
                    }
                </ButtonDiv>
            </ProfileTile>
        )
    }
}


class ReportedUsers extends Component {

    constructor() {
        super()

        this.state = {
            reported: {
                pageCount: 0,
                currentPage: 0,
                profileList: [],
            },
            banned: {
                pageCount: 0,
                currentPage: 0,
                profileList: []
            },
            mounted: false
        }
    }

    loadReported() {
        getUnsolvedProfileReports(this.state.reported.currentPage, 3)
        .then(response => {
            console.log(response)
            this.setState({
                reported: {
                    ...this.state.reported,
                    pageCount: response['totalPages'],
                    profileList: response['content']
                }
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    loadBanned() {
        getBannedProfiles(this.state.banned.currentPage, 3)
        .then(response => {
            console.log(response)
            this.setState({
                banned: {
                    ...this.state.reported,
                    pageCount: response['totalPages'],
                    profileList: response['content']
                }
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })

        this.loadReported()
        this.loadBanned()
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    reportedPageChange(newPage) {
        this.setState({
            reported: {
                ...this.state.reported,
                currentPage: newPage
            }
        }, () => {
            this.loadReported()
        })
    }

    bannedPageChange(newPage) {
        this.setState({
            banned: {
                ...this.state.banned,
                currentPage: newPage
            }
        }, () => {
            this.loadBanned()
        })
    }

    acceptReport(id, caseId) {
        setProfileCaseStatus(caseId, "solved")
        .then(() => {
            //Alert.ok("Pomyślnie przyjęto zgłoszenie")

            setProfileStatus(id, "banned")
            .then(() => {
                //Alert.ok("Ogłoszenie zostało zbanowane!")
                this.reportedPageChange(this.state.reported.currentPage)
                this.bannedPageChange(this.state.banned.currentPage)
            })
            .catch(error => {
                Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    declineReport(caseId) {
        setProfileCaseStatus(caseId, "solved")
        .then(response => {
            //Alert.ok("Pomyślnie odrzucono zgłoszenie")
            this.reportedPageChange(this.state.reported.currentPage)
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    unbanProfile(id, caseId) {
        setProfileStatus(id, "user")
        .then(() => {
            //Alert.ok("Ogłoszenie zostało odbanowane!")
            this.bannedPageChange(this.state.banned.currentPage)
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    render() {
        if(!this.state.mounted) {
            return <LoadingIndicator />
        }

        return (
            <PanelFragment>
                <span className="reported-profiles">
                    <h1 className="title-text">Zgłoszeni użytkownicy</h1>
                    {
                        this.state.reported.profileList.map((item) => (
                            <ProfileField 
                                key={item.id}
                                profile={item}
                                caseId={item.id}
                                profileId={item.reportedProfileId}
                                approveButtonHandler={this.acceptReport.bind(this)}
                                declineButtonHandler={this.declineReport.bind(this)}
                                declineVisible={true}  />
                        ))
                    }
                    <PageSelectionPanel 
                        pages={this.state.reported.pageCount} 
                        changeHandler={this.reportedPageChange.bind(this)}/>
                </span>.

                <span className="banned-profiles">
                    <h1 className="title-text">Zbanowani użytkownicy</h1>
                    {
                        this.state.banned.profileList.map((item) => (
                            <ProfileField 
                                key={item.id} 
                                profile={item}
                                caseId={0}
                                profileId={item.id}
                                approveButtonHandler={this.unbanProfile.bind(this)}
                                declineVisible={false}  />
                        ))
                    }
                    <PageSelectionPanel 
                        pages={this.state.banned.pageCount} 
                        changeHandler={this.bannedPageChange.bind(this)}/>
                </span>
            </PanelFragment>
        )
    }
}

export default ReportedUsers