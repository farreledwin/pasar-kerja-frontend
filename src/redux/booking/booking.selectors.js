import {
    createSelector
} from 'reselect';

const selectAllBookingData = (state) => state.customerBooking;

export const selectAllCustomerBooking = createSelector([selectAllBookingData], (data) => data.allworkorder);