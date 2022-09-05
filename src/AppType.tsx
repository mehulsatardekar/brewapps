type userslistType = {
    username: string,
    tagname: string
}

type AppType = {
    imageurl: string,
    productname: string,
    category: string,
    userslist: userslistType[]
}

export type { AppType }