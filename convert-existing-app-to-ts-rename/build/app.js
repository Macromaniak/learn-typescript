/**
 * @param {Date} formattedDate
 */
import { formatDate } from "./utils";
const formattedDate = formatDate(new Date());
console.log(`Today's date is ${formattedDate}`);
