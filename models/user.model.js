'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./book.model');

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

//create a schema
const userSchema = new mongoose.Schema({
    email: {type: String},
    books: [bookSchema]
});

//create a model 
const userModel = mongoose.model('user', userSchema);

//data seeding (store data)
const seedUserData = () => {
    const newUser = new userModel({
        email:'ahmadshalein@gmail.com',
        book: [
            {
              name: 'Anna Karenina (1887)',
              description: 'The greatest novel ever written according to top authors and laymen alike, Anna Karenina is the 1877 masterpiece which paints a glaringly vivid picture of contemporary Russian society. Tolstoy’s first self-proclaimed novel, Anna Karenina, tells the story of the eponymous Russian society woman who, initially trapped by societal conventions, dares to leave her loveless marriage for an illicit love and meets with tragic consequences. Another titan of Russian literature, Fyodor Dostoyevsky, described Anna Karenina as a “flawless work of art”, so if you’re only going to read one Tolstoy novel, this should probably be the one.',
              status: 'Available'
            },
            {
              name: 'War and Peace (1869)',
              description: 'At over 1,000 pages long and with 580 unique characters (some historical, many fictional), you’d be forgiven for skipping War and Peace in favor of something slightly less intimidating if you’re after a light, easy read. This masterpiece of Russian literature should not, however, be avoided lightly, as any who undertake this apparently mammoth task are sure to reap the abundant rewards buried within the pages of the dauntingly epic novel. Following the lives of a network of aristocratic Russian families at the time of Napoleon’s invasion, War and Peace was greatly influenced by the battle scenes in Victor Hugo’s Les Misérables.',
              status: 'Available'
            },
            {
                name: 'The Kingdom of God Is Within You (1894)',
                description: 'By the time of his 50th birthday, Tolstoy had already written the hugely acclaimed novels that would guarantee his position as one of the giants of Russian literature, yet, on a personal level, he had succumbed to a profound moral and spiritual crisis. On the brink of suicide, he committed himself to finding the ‘meaning of life’ with a wide and voracious reading of major religious texts. The autobiographical A Confession is a painfully frank and extraordinarily honest account of this troubling time, and narrates his journey from deep moral crisis to his subsequent spiritual reawakening.',
                status: 'Available'
            }
        ]
    }
    )
    const userTwo = new userModel({
        email:'demashqeh@gmail.com',
        book: [
            {
              name: 'Anna Karenina (1887)',
              description: 'The greatest novel ever written according to top authors and laymen alike, Anna Karenina is the 1877 masterpiece which paints a glaringly vivid picture of contemporary Russian society. Tolstoy’s first self-proclaimed novel, Anna Karenina, tells the story of the eponymous Russian society woman who, initially trapped by societal conventions, dares to leave her loveless marriage for an illicit love and meets with tragic consequences. Another titan of Russian literature, Fyodor Dostoyevsky, described Anna Karenina as a “flawless work of art”, so if you’re only going to read one Tolstoy novel, this should probably be the one.',
              status: 'Available'
            },
            {
              name: 'War and Peace (1869)',
              description: 'At over 1,000 pages long and with 580 unique characters (some historical, many fictional), you’d be forgiven for skipping War and Peace in favor of something slightly less intimidating if you’re after a light, easy read. This masterpiece of Russian literature should not, however, be avoided lightly, as any who undertake this apparently mammoth task are sure to reap the abundant rewards buried within the pages of the dauntingly epic novel. Following the lives of a network of aristocratic Russian families at the time of Napoleon’s invasion, War and Peace was greatly influenced by the battle scenes in Victor Hugo’s Les Misérables.',
              status: 'Available'
            },
            {
                name: 'The Kingdom of God Is Within You (1894)',
                description: 'By the time of his 50th birthday, Tolstoy had already written the hugely acclaimed novels that would guarantee his position as one of the giants of Russian literature, yet, on a personal level, he had succumbed to a profound moral and spiritual crisis. On the brink of suicide, he committed himself to finding the ‘meaning of life’ with a wide and voracious reading of major religious texts. The autobiographical A Confession is a painfully frank and extraordinarily honest account of this troubling time, and narrates his journey from deep moral crisis to his subsequent spiritual reawakening.',
                status: 'Available'
            }
        ]
    })

    console.log(newUser);
    console.log(userTwo);

    newUser.save();
    userTwo.save();
}
seedUserData();
module.exports = userModel;
module.exports = seedUserData();