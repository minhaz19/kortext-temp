const getAuthKey = () => {
    return ("Bearer " + (localStorage.getItem('auth-token') || ''))
}

export default getAuthKey