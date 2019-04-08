import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Profile.css'

class NoProfile extends Component {
    render() {
        console.log('gitara siema')
        return (
            <div className="profile-not-found">
                <h1 className="title">
                    Błąd 404
                </h1>
                <div className="desc">
                    Profil o podanym identyfikatorze nie istnieje!
                    Być może użytkownik nie skonfigurował jeszcze swojego profilu!
                </div>
                <Link to="/">
                    <button className="go-back-btn btn btn-primary" type="button">
                        Wróć
                    </button>
                </Link>
            </div>
        );
    }
}

export default NoProfile