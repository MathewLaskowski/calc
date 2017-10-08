export function minusCounter(what) {
    return function (dispatch) {
        if (what == 'kids') {
            dispatch({type: 'kidsDecrease'})
        } else if (what == 'adults') {
            dispatch({type: 'adultsDecrease'})
        }
    }
}

export function plusCounter(what) {
    return function (dispatch) {
        if (what == 'kids') {
            dispatch({type: 'kidsUp'})
        } else if (what == 'adults') {
            dispatch({type: 'adultsUp'})
        }
    }
}
