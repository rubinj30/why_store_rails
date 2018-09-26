import React, { Component } from 'react';
import { Header } from './components/molecules/header/header.js';
import { SideNav } from './components/molecules/sideNav/sideNav.js';
import styles from './App.scss';

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Header />
                <div className={styles.mainPage}>
                    <SideNav />
                    <div>Rest of Page</div>
                </div>
            </div>
        );
    }
}

export default App;
