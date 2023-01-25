// Get a reference to the object representing the BODY element so we can append stuff to it.
const body = document.querySelector('body');

// Create a new H1 element.
const q1 = document.createElement('h1');

// Create a text node and add it to the H1
q1.append(document.createTextNode('Can you tell me why HTML was developed?'));

// Add the new H1 element to the body.
body.append(q1);

// Create a new P element.
const a1 = document.createElement('p');

// Create a text node and add it to the P element. Note the use of `` rather
// than '' which allows us to break the string across lines.
a1.append(
  document.createTextNode(`
 HTML (Hypertext Markup Language) was developed to create a standard way to
 create and structure documents on the World Wide Web. It allows developers to
 create structured documents, including headings, paragraphs, images and links,
 that can be displayed in a web browser. It was created to simplify the process
 of creating and sharing documents online, so that anyone can create and view
 web pages with a consistent look and feel.
`),
);

// Add the new P element to the body.
body.append(a1);

const q2 = document.createElement('h1');

q2.append(document.createTextNode('What about using HTML for GUIs?'));

body.append(q2);

const a2 = document.createElement('p');

a2.append(
  document.createTextNode(`
  HTML can be used to create user interfaces for web applications, but it is primarily designed as a 
  markup language for creating structured documents to be displayed in web browsers. While it can 
  be used to create basic user interfaces, it is not typically considered a good choice for creating 
  complex, interactive user interfaces. Other technologies such as JavaScript and CSS are typically 
  used in conjunction with HTML to create more advanced user interfaces for web applications. 
  Additionally, there are other technologies such as Electron, React Native and NativeScript that 
  allow to create cross-platform desktop and mobile apps using web technologies such as HTML, 
  CSS, and JavaScript.
  `)
);

body.append(a2);

const q3 = document.createElement('h1');

q3.append(document.createTextNode('What are some of the main elements of HTML?'));

body.append(q3);

const a3 = document.createElement('p');

a3.append(document.createTextNode('Some of the main elements of HTML include:'));

body.append(a3);

const list = document.createElement('ol');

const l1 = document.createElement('li');
const code1 = document.createElement('code');
code1.append(document.createTextNode('<html>'));
l1.append(code1);
l1.append(
  document.createTextNode(`: This is the root element of an HTML document, 
  and it contains all of the other elements.
  `)
);
list.append(l1);

const l2 = document.createElement('li');
const code2 = document.createElement('code');
code2.append(document.createTextNode('<head>'));
l2.append(code2)
l2.append(
  document.createTextNode(`: This element contains information about the document, 
  such as the title of the page, which is displayed in the browser's title bar or tab.
  `)
);
list.append(l2);

const l3 = document.createElement('li');
const code3 = document.createElement('code');
code3.append(document.createTextNode('<body>'));
l3.append(code3)
l3.append(
  document.createTextNode(`: This element contains the content of the document
  that is displayed in the browser window.
  `)
);
list.append(l3);

const l4 = document.createElement('li');
const code4 = document.createElement('code');
code4.append(document.createTextNode('<h1>'));
const code5 = document.createElement('code');
code5.append(document.createTextNode('<h6>'));
l4.append(code4);
l4.append(document.createTextNode(' to '));
l4.append(code5);
l4.append(document.createTextNode(': These elements are used for headings and subheadings. '));
l4.append(code4.cloneNode(true));
l4.append(document.createTextNode(' is the highest level heading, while '));
l4.append(code5.cloneNode(true));
l4.append(document.createTextNode(' is the lowest.'));
list.append(l4);

const l5 = document.createElement('li');
const code6 = document.createElement('code');
code6.append(document.createTextNode('<p>'));
l5.append(code6);
l5.append(
  document.createTextNode(': This element is used for paragraphs of text.')
);
list.append(l5);

const l6 = document.createElement('li');
const code7 = document.createElement('code');
code7.append(document.createTextNode('<a>'));
l6.append(code7);
l6.append(
  document.createTextNode(`: This element is used for hyperlinks, which 
  allow users to navigate between pages on the web.
  `)
);
list.append(l6);

const l7 = document.createElement('li');
const code8 = document.createElement('code');
code8.append(document.createTextNode('<img>'));
l7.append(code8);
l7.append(document.createTextNode(': This element is used to embed images in a web page.'));
list.append(l7);

const l8 = document.createElement('li');
const code9 = document.createElement('code');
code9.append(document.createTextNode('<ul>'));
const code10 = document.createElement('code');
code10.append(document.createTextNode('<ol>'));
l8.append(code9);
l8.append(document.createTextNode(' and '));
l8.append(code10);
l8.append(document.createTextNode(': These elements are used for unordered and ordered lists, respectively.'));
list.append(l8);

const l9 = document.createElement('li');
const code11 = document.createElement('code');
code11.append(document.createTextNode('<li>'));
l9.append(code11);
l9.append(document.createTextNode(': This element is used for list items.'));
list.append(l9);

const l10 = document.createElement('li');
const code12 = document.createElement('code');
code12.append(document.createTextNode('<div>'));
const code13 = document.createElement('code');
code13.append(document.createTextNode('<span>'));
l10.append(code12);
l10.append(document.createTextNode(' and '));
l10.append(code13);
l10.append(document.createTextNode(`: These elements are used for grouping 
and applying styles to elements on a web page.
`)
);
list.append(l10);

body.append(list);

const a4 = document.createElement('p');

const code14 = document.createElement('code');
code14.append(document.createTextNode('<header>'));
const code15 = document.createElement('code');
code15.append(document.createTextNode('<nav>'));
const code16 = document.createElement('code');
code16.append(document.createTextNode('<main>'));
const code17 = document.createElement('code');
code17.append(document.createTextNode('<footer>'));
const code18 = document.createElement('code');
code18.append(document.createTextNode('<form>'));
const code19 = document.createElement('code');
code19.append(document.createTextNode('<input>'));
const code20 = document.createElement('code');
code20.append(document.createTextNode('<select>'));
a4.append(document.createTextNode(`These are some of the main elements, 
but there are many more available, like
  `)
);
a4.append(code14);
a4.append(', ')
a4.append(code15);
a4.append(', ')
a4.append(code16);
a4.append(', ')
a4.append(code17);
a4.append(', ')
a4.append(code18);
a4.append(', ')
a4.append(code19);
a4.append(', ')
a4.append(code20);
a4.append(', etc.')

body.append(a4);

const q4 = document.createElement('h1');

q4.append(document.createTextNode('Can you find a picture of the inventor of the web?'));

body.append(q4);

const tim = document.createElement('img');

tim.setAttribute('src', '/images/tim-berners-lee.jpg');

body.append(tim);

const a5 = document.createElement('p');

a5.append(document.createTextNode(`
  I'm sorry, I am a text based model and I 
  am not able to find or show images. 
  However, I can tell you that the inventor 
  of the World Wide Web (WWW) is Sir 
  Tim Berners-Lee. He is a British 
  computer scientist and is considered to 
  be the inventor of the World Wide Web. 
  He proposed and developed the first 
  successful communication between a 
  Hypertext Transfer Protocol (HTTP) 
  client and server via the Internet in 1989. 
  He also created the first web browser, called WorldWideWeb, and the first web server, called httpd. 
  He also wrote the first version of the HTML language, which provided the structure for web pages. 
  He is currently working on a decentralized web project called Solid.
`)
);

body.append(a5);

const div = document.createElement('div');
div.setAttribute('class', 'credits');

const link1 = document.createElement('a');
link1.setAttribute('href', 'https://chat.openai.com/chat');
link1.append(document.createTextNode('ChatGPT'));

const link2 = document.createElement('a');
link2.setAttribute('href', 'https://www.flickr.com/photos/itupictures/16662336315');
link2.append(document.createTextNode('Flickr'));

const link3 = document.createElement('a');
link3.setAttribute('href', 'https://creativecommons.org/licenses/by/2.0/');
link3.append(document.createTextNode('CC BY 2.0'));

const a6 = document.createElement('p');

a6.append(document.createTextNode('Text from 2023-01-14 conversation with '));
a6.append(link1);

div.append(a6);

const a7 = document.createElement('p');

a7.append(document.createTextNode('Photo of a young Tim Berners-Lee from '));
a7.append(link2);
a7.append(document.createTextNode(' no thanks to ChatGPT. ('))
a7.append(link3);
a7.append(document.createTextNode(').'))

div.append(a7);

body.append(div);