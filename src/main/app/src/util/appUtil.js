/**
 * Utility class for app.
 */
export default class AppUtilites {
    static setUsername(name = "") {
        localStorage.setItem("username", name);
    }

    static getUsername() {
        return localStorage.getItem("username");
    }
}