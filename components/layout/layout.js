import Header from './header-item';
import { Fragment } from 'react';

function Layout(props) {
    return (
        <Fragment>
            <Header />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;