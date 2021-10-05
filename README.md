# agario-clone

## Planning

- Everything done by back end because hacking
- Classes per entities
    - Base entity has mass, method calculate surface area
    - If either mass or radius is updated then update the other
- Array of players - quickly send
    - 45 times a second determine player view distance by surface area/readius, and send them all food, virus, and players info within that view area (type, name (if player), position, size).

- Websockets - module for communication with client server stuff
- Settings.js config file probably map size food etc

- Challenges
    - Splitting of cells 
    - Movement as they get bigger
    - When cell eats anothjer cell it increases the size not by radius; calculate the surface area and add those together to increase size - adding surface areas works well

Map size: 10k x 10k pixels
Would have anout 5k food particles

## Npm packages:

- `ws` websockets.
- `express` server.