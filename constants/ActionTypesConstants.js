/**
 * the action names we have in the app
 *
 * Created October 8th, 2015
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdz LTD
 */

export const BEGIN_FETCH_CITIES = 'BEGIN_FETCH_CITIES';
export const SUCCESS_FETCH_CITIES = 'SUCCESS_FETCH_CITIES';
export const ERROR_FETCH_CITIES = 'ERROR_FETCH_CITIES';
export const RESET_CITY_LIST = 'RESET_CITY_LIST';
export const SERVER_URL = process.env.SERVER_URL == null? 'http://localhost:1337/' : process.env.SERVER_URL;
