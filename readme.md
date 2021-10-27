# Project 2 - Inventory Tracker
#### By Quentin Bartholomew

## Project Summary

Tell me what are your build and what tools are you using?
This is a simple inventory tracker for general use. It will display an image of each item along with the purchase price, unrealized (or realized) profits, as well as dates for tracking each.

## Models

Inventory:

* Item Name

* Image

* Price Paid

* Price Listed

* Date Purchased

## Route Table

| URL | Method | Action |
|-----|--------|--------|
| /inventory | GET | Get all inventory items (index)|
| /inventory/:id | GET | Get a particular item (show)|
| /inevtory/new | GET | HTML form for new inventory item (new)|
| /inventory | post | Create the new item (create)|
| /inevtory/:id/edit | GET | HTML form to edit an existing inventory item (edit)|
| /inventory/:id | PUT | get a particular item (update)|
| /inventory/:id | DELETE | Delete a particular item from the database (delete)|

## User Stories

A user should be able to view all items in inventory

A user should be able to view a single/particular item 

A user should be able to add a new item to the inventory

A user should be able to edit an item from the inventory

A user should be able to delete an item from the inventory

> The below are user stories to be completed beyond MVP

As a user, I should be able to see my total portfolio value

As a user, I should see my listed price highlighted in red if it's lower than my paid price

As a user, I should see my listed price highlighted in green if it's higher than my paid price

## Challenges


## List of Technologies

* HTML

* CSS

* JS

* Express

* Liquid

* Mongoose