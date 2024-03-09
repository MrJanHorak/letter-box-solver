# Letter Boxed Solution Finder

![Imgur](https://i.imgur.com/9qOgepcl.png?2) 

## Backstory:

The New York Times puzzle page has become a fun family challenge for my family. We like to see who can find the best words to solve the puzzles. When your early teen begins finding better (longer and more sophisticated) words than you, then you need to find a way to surprise them. 

That had me thinking that perhaps I could create a tool to 'help' find the best words to solve the puzzle.

This is an attempt to create such a tool. 

# [Try it here!](https://letter-boxed-solver.netlify.app/)

## Challenges encountered: 
<ul>
<li>This was a fun side project, I thought I would perhaps need to use some of my recently learned search algorithms, however in the end I learned it is much faster to remove words that do not contain the letters provided by the user. </li>

<li>The next challenge was (and still is) finding matching word pairs in a timely and less resource intensive manner. For ... loops are not as pretty coding wise as filters, however apparently the filter() method is slower than a for ... loop. </li>

<li>Desktops have more computational power and more memory; they can handle the search much easier than mobile devices. </li>
</ul>

## Ice box:

<ul>
<li><s>Tweak the algorithms to be faster (specifically with mobile devices in mind</s></li>
<li>Add a settings option that stores the users’ preferences in local storage</li>
<li><s>Find a better (shorter) word list of only commonly used words</s></li>
<li>Give the user the ability to choose how many 2-word or 3-word solutions are returned</li>
<li>Tweak the circles on the white-box to be more cross-device and cross browser compatible</li>
<li><s>Return all 3-word solutions</s> </li>
</ul>

## Acknowledgements: 

I stumbled across the current word list I am using here: 
https://github.com/dwyl/english-words

New (shorter) word list has was found here: https://github.com/gcapell/letterboxed/blob/main/words_easy.txt

Google fonts: https://fonts.googleapis.com/css2?family=Solway:wght@700&display=swap

the inspiration for autofill comes from the following links:

https://github.com/dcbriccetti/letter-boxed-game-solver/blob/main/src/puzzle_fetcher.py
https://letterboxed.aliceyliang.com/populate