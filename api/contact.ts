export const sendContactForm = async (data: {project: string, tel: string}) => fetch('api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})