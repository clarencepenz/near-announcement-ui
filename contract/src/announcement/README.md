![Near, Inc. logo](https://near.org/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311)

## Design

### Interface

```ts
function createAnnouncement
```
- "Change" function (ie. a function that alters contract state)
- Creates an announcement and returns the successful message

```ts
function deleteAnnouncement
```
- "Change" function (ie. a function that alters contract state)
- Recieves an Announcement's uid as parameter
- This grabs the announcement with the uid parameter and deletes it.

```ts
function getAnnouncement
```
- "View" function (ie. a function that does not alters contract state)
- Recieves an announcement's uid as parameter
- Returns an Announcemnt object 

```ts
function getAnnouncements
```
- "View" function (ie. a function that does not alters contract state)
- Returns the whole Announcements details/content

```ts
function like
```
- "Change" function (ie. a function that alters contract state)
- Recieves an Announcement's uid as parameter
- This grabs the announcement with the uid parameter and adds a like to it.
- This function won't execute if a dislike has been cast on the selected announcment by a user.

```ts
function dislike
```
- "Change" function (ie. a function that alters contract state)
- Recieves an Announcement's uid as parameter
- This grabs the announcement with the uid parameter and adds a dislike to it.
- This function won't execute if an like has been cast on the selected announcment by a user.