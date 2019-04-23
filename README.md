# Menu Updater App

This program was built on React.Js with styled-components for styling.

## To run this program:

1) Download the program from my GitHub: https://github.com/CarolineHoang/menu-updater

2) cd into the file menu-updater

3) run:         npm install
                npm start

    The React app should begin running on the local host.



## Using this program:

### To look at the items assigned to a particular section:

    Select any of the sections listed on the left hand side. 
    They will bring up all corresponding items (as listed in the JSON file Menu.json) on the right.





### To add a new section:

    1) Click the add item button at the top (It reads: Menu Sections +)

    2) Fill out a name for your new section

    3) Either hit ENTER or click the + button to the right of the form fields to submit the values and generate the section.
        The JSON will not be overridden and the new items will exist only in the current memory.





### To add a new item to a section:

    1) Select the section you would like to add to from the left
       (You must first select a section to add an item.)

    2) Click the add item button at the top (It reads: Section Items +)
        This will bring up a pop up that will prompt you to enter a name for the new food item
        and a price. (If you leave the price blank, the price will default 0
                    ** NOTE: You MUST enter a item name in order for a new item to be generated) **
                     
    3) Either hit ENTER or click the + button to the right of the form fields to submit the values and generate the item.
        The JSON will not be overridden and the new items will exist only in the current memory.




### To change the permanent items that you see first presented to you:

    1) open the Menu.json JSON file located at ./menu-updater/src/json/Menu.json
    2) Add new items and sections using the designated format as shown:
        I based this application on the given JSON format:

```

            {
                "MenuSection": [
                    {
                        "Items": [
                            {
                                "title": "Chicken Over Rice",
                                "price": 12
                            }
                        ],
                        "name": "Lunch Specials"
                    }
                ]
            }
                    
```
    ** Note: the original provided json example had a comma after the 12, but that doesn't function. 
    So, for any addition made, the last element in a given dictionary (between two {}) cannot have a comma at the end. **

    3) Save the file.