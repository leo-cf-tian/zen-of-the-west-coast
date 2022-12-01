import React from 'react'; 

import Error from '../Error/Error';

const NotFoundError = () => {
    return <Error title="404" description="The page you requested could not be found!"/>;
};

export default NotFoundError; 
