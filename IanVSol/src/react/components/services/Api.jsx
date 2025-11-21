export async function scheduleMeeting(formData) {
    return await fetch("https://2q4cq8ihw3.execute-api.us-east-2.amazonaws.com/prod-services/send-email-service", {
        method:"POST",
        headers: {
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
    })
}