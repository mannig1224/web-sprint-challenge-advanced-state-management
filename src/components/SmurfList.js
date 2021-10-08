import React, { useEffect }from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

import { getSmurfs, fetchFail } from '../actions';

 const SmurfList = (props) => {

    const { getSmurfs, fetchFail, smurfData, isFetching} = props;
    
    useEffect(() => {
        getSmurfs();
    }, []);

    if (isFetching) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        
        {smurfData.map((smurf) => <Smurf smurf={smurf}/>)}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs, fetchFail })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.