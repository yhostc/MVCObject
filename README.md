MVCObject
=========

A real-world example of building an MVC based JavaScript application, to help solidify the ideas of the Model View Controller pattern. This is an fork for [mvcobject-js](https://code.google.com/p/mvcobject-js/)

# Define our application's components
Model - Takes care of all back-end data. Receives messages, broadcasts messages, registers new users when they join.
View - Handles all display logic. Displays new messages, gives our users the interface to write new messages.
Controller - Facilitates communication between the Model and the View. Interprets actions from users and passes them to the Model and/or the View.

# Introduction
After finding the Google Maps API v3 MVCObject an extremely useful tool when building MVC based JavaScript apps, MVCObject-js was written to replicate it's functionality in a standalone script - you no longer need to download the whole Google Maps API just to use MVCObject.

Somewhat confusingly named, MVCObject is an implementation of the 'Observer' pattern. It just so happens it's extremely useful for building MVC based applications - it can serve as the glue between your Model View and Controller elements.

All methods are the same as google.maps.MVCObject - see the documentation here:

http://code.google.com/apis/maps/documentation/javascript/reference.html#MVCObject

This is a standalone class - you can use it in any of your JavaScript applications, it doesn't have to be Google Maps related.



# How it works
The functionality centres around the fact that Javascript creates references to objects when assigned, not a copy.

When an class property is bound, it is converted into an object and a reference to the object assigned to each class. In this way, each class is accessing the exact same property.

Class properties must be accessed and modified using the setters and getters. Should any 'changed' callbacks be registered, they will be invoked when set() is called