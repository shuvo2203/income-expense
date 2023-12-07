import moment from 'moment';

export const DateFormate=(date)=>{
    return moment(date).format('DD/MM/YYYY');
}