# About api

_This APi will allow the user the possibility of obtaining data through the use of POSTMAN application which allows us to request requests and in this way based on the URL that we indicate, we will be able to obtain different types of data such as obtaining of a JSON with data on songs or on users, the possibility of adding, modifying or deleting a song which we indicate in this same URL._

## Getting Started 🚀

_To begin to understand how this API works, next I will leave a series of steps and actions which we must carry out in the POSTMAN application to obtain that or those data that we need._

### Pre-requirements 📋

_Applications needed_

```
[POSTMAN] - https://www.postman.com/downloads/
```

## Executing commands ⚙️

_Obtain an array with all the songs that are in the song scheme in the database_ 🎵🎵🎵🎵🎵🎵

```
http://localhost:4100/songs
```

_Obtain an array with all the users that are in the user scheme in the database_ 🧒🏼 👦🏼 👧🏼 🧑🏼 👨🏼 👩🏼

```
http://localhost:4100/users
```

_Post a new song using post method_ 🎵

To do this, only use post method and insert into the Body the new params to add on the schema, you can use this :

```
{
    "name": "The Song Name",
    "album": "The Song Album",
    "duration": "Song Duration",
    "artist": "Song artist/s"
}
```
⚠️ _REMEMBER USE JSON IN RAW MODE ON THE BODY_ ⚠️

_Post a new user using post method_ 👨🏼 👩🏼

```
{
    "name": "The user name",
    "lastname": "The user lastname",
    "email": "User email",
    "age": "User age",
    "artist": "The user favorites artist"
    "favoriteSongs": "The user favorite songs"
}
```
⚠️ _REMEMBER USE JSON IN RAW MODE ON THE BODY_ ⚠️

_Add a new song for some user_ 👨🏼 👩🏼🎵
```
http://localhost:4100/songs/adduserfavsong/:TheUserName/:TheSongName
Example: 
http://localhost:4100/songs/adduserfavsong/:Kevin/:Karma
This will be add `Karma` ID song on the favoriteSongs object of the user.
```

## Development with 🛠️

* [NODEJS]
* [MONGOOSE]
* [EXPRESS]

## Applications used ⚙️
* [MongoDB]
* [MongoDBCompass]
* [PostMan]
