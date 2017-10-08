export default function(state={childs:0, adults:0}, action) {
    switch(action.type) {
        case 'kidsDecrease':
            return { ...state, childs: state.childs - 1  };
        case 'kidsUp':
            return { ...state, childs: state.childs + 1  };
        case 'adultsDecrease':
            return { ...state, adults: state.adults - 1  };
        case 'adultsUp':
            return { ...state, adults: state.adults + 1  };
    }
    return state;
}