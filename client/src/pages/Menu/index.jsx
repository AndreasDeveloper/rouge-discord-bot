import React from 'react';
import { getUserDetails, getGuilds } from '../../utils/api';
import { MenuComponent } from '../../components';

export function MenuPage({ history }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [guilds, setGuilds] = React.useState({});

    React.useEffect(() => {
        getUserDetails().then(( { data } ) => {
            console.log(data);
            setUser(data);
            return getGuilds();
        }).then(( { data } ) => {
            console.log(data);
            setGuilds(data);
            setLoading(false);
        }).catch(err => {
            history.push('/');
            setLoading(false);
        })
    }, []);

    return !loading && (
        <div>
            <MenuComponent guilds={ guilds } />
        </div>
    );
}