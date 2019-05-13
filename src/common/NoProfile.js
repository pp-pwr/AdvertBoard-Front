import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./NotFound.css"

class NoProfile extends Component {
    render() {
        return (
            <div className="page-not-found">
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