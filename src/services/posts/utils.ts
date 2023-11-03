export const transformPost = ({
    id,
    title,
    body,
} : {
    id: number;
    title: string;
    body: string;
}) => ({
    id,
    title: title,
    body: body,
})