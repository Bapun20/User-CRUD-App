import React from 'react';
import './assets/css/style.css';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import MainComponent from './components/mainComponent';
import { addUser } from './actions/userActions';

function App(props) {
    return (
        <div>
            <MainComponent {...props} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    users: state.users.users,
});

const mapDispatchToProps = {
    addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
