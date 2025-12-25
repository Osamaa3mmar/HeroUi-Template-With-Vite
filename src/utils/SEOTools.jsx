/**
 * setTitle
 * ------------------------------------
 * Dynamically sets the document page title.
 *
 * How it works:
 * - Builds the page title using three parts:
 *   1) prefix   (optional)
 *   2) title    (required)
 *   3) suffix   (optional, defaults to APP_NAME)
 * - The separator is only added when prefix or suffix exists.
 *
 * Examples:
 * - "Dashboard | Osama App"
 * - "Admin | Users | Osama App"
 * - "Login"
 *
 * @param {string} title - Main page title (required)
 * @param {Object} options - Optional configuration
 * @param {string} options.prefix - Text before the title
 * @param {string} options.separator - Separator between parts (default: " | ")
 * @param {string} options.suffix - Text after the title (default: APP_NAME)
 *
 * @author Osama Ammar
 */
const APP_NAME="Osama App"
export const setTitle=(title,options={})=>{
    if(!title||title===""){
        console.error("You Should Provide A Title .");
        return ;
    }
    const {
        prefix="",
        separator=" | ",
        suffix=APP_NAME,
    }=options;
    let finalTitle=prefix?prefix+separator:"";
    finalTitle+=title;
    finalTitle+=suffix?separator+suffix:"";
    document.title=finalTitle;
    return ;
}