// méthode 1
export const transformUser = ({
    id,
    firstName,
    lastName,
    image,
} : {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
}) => ({
    id,
    name: `${firstName} ${lastName}`,
    avatar: image,
})

// const nextUsers = users.map(transformUser);

// méthode 2
// export const transformUsers = (users) => users.map(() => {...})