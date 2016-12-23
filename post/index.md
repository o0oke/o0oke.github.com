Welcome to code center
=====================

This is an overview of code web side.

Lists
=====


Simple lists
------------

A bulleted list:

- You can use a minus sign for a bullet
+ Or plus sign
* Or an asterisk

A numbered list:

1. Numbered lists are easy
2. Markdown keeps track of the numbers for you
7. So this will be item 3.

A double-spaced list:

- This list gets wrapped in `<p>` tags

- So there will be extra space between items


Advanced lists: Nesting
-----------------------

You can put other Markdown blocks in a list; just indent four spaces for each nesting level.  So:

1. Lists in a list item:
    - Indented four spaces.
        * indented eight spaces.
    - Four spaces again.

2.  Multiple paragraphs in a list items:

    It's best to indent the paragraphs four spaces
    You can get away with three, but it can get
    confusing when you nest other things.
    Stick to four.

    We indented the first line an extra space to align
    it with these paragraphs.  In real use, we might do
    that to the entire list so that all items line up.

    This paragraph is still part of the list item, but it looks messy to humans.  So it's a good idea to wrap your nested paragraphs manually, as we did with the first two.

3. Blockquotes in a list item:

    > Skip a line and
    > indent the >'s four spaces.

4. Preformatted text in a list item:

        Skip a line and indent eight spaces.
        That's four spaces for the list
        and four to trigger the code block.






Blockquotes
===========


Simple blockquotes
------------------

Blockquotes are indented:

> The syntax is based on the way email programs
> usually do quotations. You don't need to hard-wrap
> the paragraphs in your blockquotes, but it looks much nicer if you do.  Depends how lazy you feel.


Advanced blockquotes: Nesting
-----------------------------

You can put other Markdown blocks in a blockquote; just add a `>` followed by a space:

Parragraph breaks in a blockquote:

> The > on the blank lines is optional.
> Include it or don't; Markdown doesn't care.
>
> But your plain text looks better to
> humans if you include the extra `>`
> between paragraphs.


Blockquotes within a blockquote:

> A standard blockquote is indented
> > A nested blockquote is indented more
> > > > You can nest to any depth.


Lists in a blockquote:

> - A list in a blockquote
> - With a > and space in front of it
>     * A sublist

Preformatted text in a blockquote:

>     Indent five spaces total.  The first
>     one is part of the blockquote designator.






Images
======


Images are exactly like links, but they have an exclamation point in front of them:

 ![Valid XHTML] (http://w3.org/Icons/valid-xhtml10).

The word in square brackets is the alt text, which gets displayed if the browser can't show the image.  Be sure to include meaningful alt text for blind users' screen-reader software.

Just like links, images work with reference syntax and titles:

 This page is ![valid XHTML][checkmark].

 [checkmark]: http://w3.org/Icons/valid-xhtml10
           "What are you smiling at?"


**Note:**

Markdown does not currently support the shortest reference syntax for images:

  Here's a broken ![checkmark].

But you can use a slightly more verbose version of implicit reference names:

  This ![checkmark][] works.

The reference name (`valid icon`) is also used as the alt text.






Inline HTML
===========


If you need to do something that Markdown can't handle, you can always just use HTML:

 Strikethrough humor is <strike>funny</strike>.

Markdown is smart enough not to mangle your span-level HTML:

<u>Markdown works *fine* in here.</u>

Block-level HTML elments have a few restrictions:

1. They must be separated from surrounding text by blank
   lines.
2. The begin and end tags of the outermost block element
   must not be indented.
3. You can't use Markdown within HTML blocks.

So:

<div style="background-color: lightgray">
    You can <em>not</em> use Markdown in here.
</div>






Preformatted Text
=================


You can include preformatted text in a Markdown document.

To make a code block, indent four spaces:

    printf("goodbye world!");  /* his suicide note
                                  was in C */

The text will be wrapped in `<pre>` and `<code>` tags, and the browser will display it in a monospaced typeface.  The first four spaces will be stripped off, but all other whitespace will be preserved.

You cannot use Markdown or HTML within a code block, which makes them a convenient way to show samples of Markdown or HTML syntax:

    <blink>
       You would hate this if it weren't
       wrapped in a code block.
    </blink>






Code Spans
==========


You can make inline `<code>` tags by using code spans.  Use backticks to make a code span:

 Press the `<Tab>` key, then type a `$`.

(The backtick key is in the upper left corner of most keyboards.)

Like code blocks, code spans will be displayed in a monospaced typeface.  Markdown and HTML will not work within them:

 Markdown italicizes things like this: `I *love* it.`

 Don't use the `<font>` tag; use CSS instead.
