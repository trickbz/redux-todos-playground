import React from 'react';
import '../../styles/styles.scss';
import Header from './header';
import Footer from './footer';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}