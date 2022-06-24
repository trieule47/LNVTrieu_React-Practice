export function IsLogin(){
    const isLogin = JSON.parse(localStorage.getItem('user'));
    
    if (isLogin != null) {
        return true;
    }
    return false;
}