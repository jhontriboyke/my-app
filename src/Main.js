import React, { useReducer } from "react";

// Reducer function to handle state changes
const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Here, you can implement logic to update available times based on the selected date
            // For now, returning the same available times regardless of the date
            return state; // Replace this with logic to update times based on the date
        default:
            return state;
    }
};

// Function to create initial state for availableTimes
const initializeTimes = () => {
    // Return initial state (for example, an array of available times)
    return []; // Replace this with your initial available times data
};

function Main({ children }) {
    const [availableTimes, dispatch] = useReducer(
        availableTimesReducer,
        [],
        initializeTimes
    );

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                availableTimes: availableTimes,
                dispatch: dispatch
            });
        }
        return child;
    });

    return <main>{childrenWithProps}</main>;
}

export default Main;