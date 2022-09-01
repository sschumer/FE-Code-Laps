const post = {
    status: "I am hiking today!"
}

console.log(post)

post.status = 'I was hiking today!';
console.log(post)

const posts = [
    {
        status: 'I am going to the movies today!'
    }
]
post.push({status: ' I got my license today!'})

console.log(posts)