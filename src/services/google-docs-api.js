import {BACKEND_URL} from "../config/index.js";

const SCRIPT_URL = BACKEND_URL

export const sendSurvey = async (e) => {
    e.preventDefault();

    const form = e.target;


    const payload = {
        fio: form.fullName.value,
        willCome: form.attendance.value === 'yes',
        peopleCount: form.peopleCount.value,
        namesList: form.guestNames.value
    };

    await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
    });

    console.log("Отправлено в Google Sheet!");
}