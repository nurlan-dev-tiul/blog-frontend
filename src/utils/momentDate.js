import moment from 'moment';
import 'moment/locale/ru';

export const dateFormat = (date) => {
    moment.locale('ru');
    return moment(date).format('LL');
}