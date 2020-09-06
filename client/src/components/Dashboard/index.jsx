import React from 'react';
import { Formik } from 'formik';
import { Input, Button } from '@chakra-ui/core';

export function DashboardComponent({ history, guildId, user, config }) {
    const [prefix, setPrefix] = React.useState('!');

    return (
        <Formik initialValues={{ prefix: config.prefix }} onSubmit={({ prefix }) => {
            // On submit function is invoked every time on submit button click
            console.log(prefix);
        }}>
            {
                (props) => (
                    <form onSubmit={props.handleSubmit}>
                        <Input type="text" name="prefix" onChange={props.handleChange} defaultValue={ config.prefix } />
                        <Button type="submit" variantColor="orange" children="Update prefix" />
                    </form>
                )
            }
        </Formik>
    );
};