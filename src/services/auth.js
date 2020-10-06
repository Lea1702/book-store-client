export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // for Node.js Express back-end
        return { 'Authorization': "JWT " + user };
    } else {
        return {};
    }
}