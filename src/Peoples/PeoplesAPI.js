import {safeAjax} from "../helpers";

export const getPeoplesAPI = () => new Promise((resolve, reject) => {
    const url = 'http://www.filltext.com/?rows=50&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    safeAjax(url).then((data) => {
       return resolve(data)
    }).catch(err => {
        return(reject)
    })
});
