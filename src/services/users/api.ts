const DEFAULT_FETCH_OPTIONS = {
    method: "GET",
}

export const fetchUsers = async() => {
    const data = await fetch(
        'https://dummyjson.com/users',
        DEFAULT_FETCH_OPTIONS,
    );
    const json = await data.json();
    return json;
}

// methode 2
// export const fetchUsers2 = fetch('https://dummyjson.com/users').then((data) =>
//     data.json(),
// );