export const geturlendpoint = () => {
    console.log(location.hash.split('/')[1]);
    return location.hash.split('/')[1]
}