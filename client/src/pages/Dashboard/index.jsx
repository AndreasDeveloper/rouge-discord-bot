import React from 'react';
import { getUserDetails, getGuildConfig } from '../../utils/api';
import { DashboardComponent } from '../../components';

export function DashboardPage({ history, match }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [config, setConfig] = React.useState({});

    React.useEffect(() => {
        getUserDetails().then(( { data } ) => {
            console.log(data);
            setUser(data);
            return getGuildConfig(match.params.id);
        }).then(( { data } ) => { // (( { data } )) - This syntax is for destructuring
            console.log(data);
            setConfig(data);
            setLoading(false);
        }).catch(err => {
            history.push('/');
            setLoading(false);
        })
    }, []);

    return !loading && (
        <div>
            <h1>Dashboard Page</h1>
            <DashboardComponent user={user} config={config} />
        </div>
    );
}