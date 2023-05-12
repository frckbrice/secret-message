# secret-message

this app takes as input a text and render a rectangle of a normalized text from the input text. then show the cypher text in chunk 
and at the end render a rectangle from the cypher text.

Notice that from the last rectangle, we could visually decode the ciphertext back in to the original message.

in the code, to get get the number of chunks, i have create/write a function called "columsAndRowLength".
To build this function, we have the followings:
The text length, and the condition that chaine.length = C*R and C>=R;
we can take C = R+K and (K as natural number)
we'll have this equation r²+kr-N=0 with N=chaine.length,  to solve.
now we take the case where K=1; as 1 is smallest integer after 0; to avoid N=C² and to be close to N as much as possible.
The value of K chosen, is just help us to get the appropriate value of C that we will use because there are many of them. since C = R + K.*/

So, after input the text, click the button "Action to see the result"
