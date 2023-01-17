# MarsRover

The docs folder contains an overview and numbered documents that give an summary of the main modules.  This is a guide to the overall idea and where everything lives, as well as where the (embarassing) loose ends are.

Most importantly: the app can be started from the console in its root - /MarsRover - by entering npm start at the command prompt and then following instructions.  Essentially, it's a console-controlled, file-based system that guides the user to enter navigation instructions that are then processed according to the given logic and validated using a few simple constraints, with ending coordinates displayed to the user logged.

SRC

1. There is a entry module to handle the file reads  used to retrieve Rover information held in text files and handle initial communication with a user through a console interface.  In future, we'd assume this role would be taken over by some kind of distributed storage!

Loose ends: read-write error handling; zero code for asynchronous processing; a sneaky approach to work around the need to sort and retrieve multiple entries in the log file by date; and a whole lot of testing that doesn't work now because of the inter-module communication that was built after unit testing.


2. There is a second module that contains most of the functional logic. It takes an Rover object (a TS interface) and a set of instructions and uses these to produce a final set of coordinates.  It calls several validation functions before committing this final position to a file log.

Loose ends: Such a module would probably need to split into different components in future. The update functions would already work better as distinct files for maintainability/readability.  There is also a placeholder for missing validation code to ensure Rovers don't occupy the same coordinates.  The implementation of the Rover interface could also be improved: a sub-type/interface of coordinates along (x, y) would be nice to make for more graceful handling.

3. The third module contains validation functions. 

Loose ends: The file contains a mix of format and functional validations. We need far more robust technical error handling! TS also seems to have nice built-in error handling ... which I have not used.  I have also not built in validation to ensure that the Yes/No exit codes are entered properly (could have been handled using TS).

TEST

The less said about this folder the better. Almost everything in it needs a redo with Jest mocks.  I messed up by not downloading the template because I didn't realise there was one. I installed everything on my own from scrath. Like Saruman says: I chose the way of pain, and it was not fun, and everything stopped working once my modules were communicating with each other.

ROVER_LOG

This is the directory where the text files are held.  You can add Rovers to the inventory.txt for fun; just make sure to set them to Active.




