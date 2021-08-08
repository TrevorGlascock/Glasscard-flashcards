# Project_Flashcards
Full-Stack Flashcard app built from the ground-up in React

## Links
- [Live Demo (READ_ONLY)](https://glasscard.vercel.app/)

# Screenshots
## **Home Page** 
### *Routes to "/" (No Breadcrumb)*

Renders a list of all decks, as well as buttons which allow a user to:
- Create a new deck
- View an existing deck
- Study a deck card-by-card
- Delete a deck and all of it's cards

![Homepage Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Flashcards/main/Screenshots/Homepage.png)

## **Deck View Screen** 
### *Routes to "/decks/:deckId" (Breadcrumb: Homepage > "Deck Name")*
Renders a list of all cards in the current deck and some buttons which allow the user to:
- Edit the current deck's name and description
- Study the current deck card-by-card
- Add a new card to the current deck
- Delete the current deck and all of it's cards 
- And for each card in the deck, the user may:
  - Edit the selected card
  - Delete the selected card 

![Deck View Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Flashcards/main/Screenshots/Deck-View.png)

## **Study Deck Screen** 
### *Routes to "/decks/:deckId/study" (Breadcrumb: Homepage > Current Deck's Deck View Screen > "Study")*
Renders the current deck's first card's front-side and some buttons that allow the user to:
- Flip the card to it's opposite side
- Proceed to the next card (only visable once a card has been flipped at least once)
- Return to the first card or return to the Homepage if all cards have been clicked to

![Study Deck Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Flashcards/main/Screenshots/Study-Deck.png)

## **Add Deck Screen** 
### *Routes to "/decks/new" (Breadcrumb: Homepage > "Create Deck")*
Renders a form for the user to define the new deck's name and description
- On save, adds the new deck to the database, then navigates the user into the Deck View Screen for that deck
- On done, it simply navigates the user back to the Homepage

![Add Deck Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Flashcards/main/Screenshots/Add-Deck.png)

## **Edit Deck Screen** 
### *Routes to "/decks/:deckId/edit" (Breadcrumb: Homepage > Current Deck's Deck View Screen > "Create Deck")*
Renders a form for the user to define the current deck's name and description, starting off with their original values
- On submit, overwrites the deck in the database, then navigates the user into the Deck View Screen for that deck
- On cancel, it simply navigates the user back to the Deck View Screen

![Edit Deck Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Flashcards/main/Screenshots/Edit-Deck.png)

## **Add Card Screen** 
### *Routes to "/decks/:deckId/cards/new" (Breadcrumb: Homepage > Current Deck's Deck View Screen > "Add Card")*
Renders a form for the user to define the new cards's front and back
- On save, adds the new card to the database, then resets the form so the user may add more cards
- On done, it simply navigates the user back to current deck's Deck View Screen

![Add Card Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Flashcards/main/Screenshots/Add-Card.png)

## **Edit Card Screen**
### *Routes to "/decks/:deckId/cards/new/:cardId" (Breadcrumb: Homepage > Current Deck's Deck View Screen > "Edit Card #")*
Renders a form for the user to define the selected card's front and back, starting off with their original values
- On submit, overwrites the deck in the database, then navigates the user into the Deck View Screen for that deck
- On cancel, it simply navigates the user back to the Deck View Screen

![Edit Card Screenshot](https://raw.githubusercontent.com/TrevorGlascock/Project_Flashcards/main/Screenshots/Edit-Card.png)


## **TODO:**
- Change the bootstrap buttons to align more with my brand colors.
- Return to this after further exploring backend deployment to make a live demo that isn't read only with a fake API.
- General Feature Additions TBD
