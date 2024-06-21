export interface IRq_Login {
    username: string,
    password: string
}

interface IRs_Login {
    response: {}
}

export async function APIS_Login(prop: IRq_Login) {
    const data: any = await fetch('https://api-amora.mahesamegahmandiri.com/api/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: prop.username,
            password: prop.password
        })
    }).then((res) =>
        res.json()
    ).then(res => res).catch(err => err)
    return data
}