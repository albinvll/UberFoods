import React from 'react';
import * as auth from "../Auth";

export default function (ComposedComponent) {
    class Authenticate extends React.Component {
        componentDidMount() {

            if (!auth.isLoggedIn()) {
                this.props.history.push('/logout');
            }
        }

        componentDidUpdate(nextProps, prevState, snapshot) {
            if (!auth.isLoggedIn()) {
                this.props.history.push('/logout');
            }
        }

        render() {
            return (
                <div>
                    <ComposedComponent {...this.props} />
                </div>
            );
        }
    }

    return Authenticate;
}