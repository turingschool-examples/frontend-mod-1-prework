## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

    I'd never heard of the ZPD (Zone of Proximal Development), but it makes sense that there's a range of challenge at which you can act upon what you already know and also push yourself where you're growing the most. Like a workout--if it's too easy, you don't get a benefit, and if it's too hard, you either can't do it or risk injury. It seems like Turing is very good at working this balance, especially as things get more independent. I feel capable of handling the challenge, but it's not spoon-feeding. Being open to feedback is something that's really resonating, as it related to what we learned about in the asking questions articles about actually listening when you ask and taking in what someone else is giving you. I think especially in something you're new or nervous about, there's a tendency to get prideful or minimize areas that are harder or not as strong, and so finding that humility and really getting the most out of people that can look over and give good directions on how to improve is really helpful.

1. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

    I think I'm generally good at not shying away from challenges, and understanding that learning is a process so there'll always be room to get better. I'm working on the practice part, just putting in the time and working within the ZPD to expand on what I know and cement the things I do know. I think I need to connect more (hopefully through Turing's network of classmates and alum, as well as online) with others in the coding community to find people to ask questions of and get feedback, or just learn from. Setting SMART goals isn't something I've done specifically, so more visualization and targeted goals will be helpful both for emotional feedback and to give myself a plan and path. Also, I want to get better at not giving up, because either through distraction or discouragement I can get sidetracked and move on to a different book or challenge or homework assignment or video (whatever it is), and I want to follow through and finish things to get the full benefit of working through something. This will also help build discipline.

1. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

    On Facebook, they probably need to keep an array of users who 'like' a specific post. So every time someone clicks 'like', they get usersWhoLikeThisPost.push() and then when you drop down the list of people who've reacted to the post, you see that list, or array.

1. In your own words, explain what an Array method is.

    An array method is a built-in function that lets you modify or act upon the values in an array. These might let you add a value to the array (.push or .unshift or .splice) or remove (.pop or .unshift or .splice) or copy all or parts of the array (.slice).

1. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

   The purpose of a loop is to automate and speed up a function that we want performed many times or on many things. If we just want to do something many times, we don't necessarily need an array, we're just saying, "Shout hip hip hurray 50 times" and instead of typing out the instructions to do that 50 times, we just tell it to shout that and repeat that 50 times. If we want to enact something on each value or certain values in a set, or an array, then we have to perform the loop on that array.

1. If you had to teach a 5 year old about loops, how would you explain it?

   A loop is a when you have a task that you need to do over and over again. If I'm eating a sandwich, instead of "I took one bite. I took one more bite. I took one more bite." I can tell you, "I ate the whole sandwich", and you know that the way I ate it was through each of those bites altogether.

   Sometimes you want to loop an array, which means you have to do something many times, and each time you do that task, you're doing it to something new. So say I want to hug all of my friends. I have to start with my first friend and end with the last friend, hugging each one of them. Instead of telling you that I hugged Anna, and Bob, and Clara, I can tell you about the loop as a whole and say: I hugged my friends.

1. What questions do you still have about Arrays and loops?

    For key pair arrays, how do you split up what part of the array the looping functions act upon? For instance, if I had an array of objects, but I wanted to act on only one attribute of each, could I just call out that attribute? So if I have a class of boxes with a height attribute, could I just say `box[i].height + 1` or something within my for loop?

    Also, how do you loop in a multidimensional array or matrix? Do you nest your for loops?

    For commands that permanently change the array, what kind of backups do you have if you realize you didn't want to do that/is there an undo? Or is it always easy to just go delete the lines of code that changed the array to begin with?
