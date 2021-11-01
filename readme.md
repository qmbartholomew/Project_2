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

A user will see their listed price displayed in red if it's lower than the price paid

A user will see their listed price displayed in green if it's higher than the price paid


## Challenges

CSS always presents a challenge for me. I was able to accomplish most things I wanted to with this project, however making a total value for each section (price paid + price listed) was challenging and I wasn't able to get it working to the point I would have been happy.

## List of Technologies

* HTML

* CSS

* JS/Jquery

* Express

* Liquid

* Mongoose