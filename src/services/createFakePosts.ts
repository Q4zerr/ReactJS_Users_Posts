import { faker } from '@faker-js/faker';
import { Post } from '../models/Post'

export const createFakePosts = (count: number): Post[] => 
Array
.from(Array(count)
.keys())
.map((id) =>({
    id: new Date().getTime() + id,
    picture: faker.image.image(),
    title: faker.lorem.slug(),
    description: faker.lorem.lines(),
}))