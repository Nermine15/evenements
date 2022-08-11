import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuthenticate } from '../actions/auth';
import queryString from 'query-string';

const Google = ({ googleAuthenticate }) => {
    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            googleAuthenticate(state, code);
        }
    }, [location]);

    return (
        <div className='container'>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Continer Avec Google</h1>
                <hr class='my-4' />
                <p>Cliquer sur Connecter</p>
                <Link class='btn btn-primary btn-lg' to='/login' role='button'>Connecter</Link>
            </div>
        </div>
    );
};

export default connect(null, { googleAuthenticate })(Google);
