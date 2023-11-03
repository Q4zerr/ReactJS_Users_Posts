const DEFAULT_FETCH_OPTIONS = {
    method: "GET",
}

export const fetchPosts = async() => {
    const data = await fetch(
        'https://dummyjson.com/posts',
        DEFAULT_FETCH_OPTIONS,
    );
    const json = await data.json();
    return json;
}