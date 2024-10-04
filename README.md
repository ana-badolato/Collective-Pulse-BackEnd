# Collective Pulse

**See the App!** [Collective Pulse Deployment](https://collective-pulse.netlify.app/)

**App Logo**  
![App Logo](/public/cover.png)

---

## Description

Collective Pulse is a collaborative urban digital magazine where everyone can submit articles and stay informed about interesting facts across various categories. The app allows users to write, edit, and delete articles, as well as interact through comments, likes, and filters by date or views.

---

## Collections
### News
{
      "categories"
      "id"
      "title"
      "image"
      "content"
      "author"
      "date"
      "views"
}
### Comments
{
      "id"
      "newId"
      "author"
      "comment"
      "likes"
      "date"
}


## Client Routes

| Method  | URL                           | Request Body | Description                                                  |
|---------|-------------------------------|--------------|--------------------------------------------------------------|
| GET     | /news                         | n/a          | Returns an array of all news                                  |
| GET     | /news?categories={category}      | n/a          | Returns news filtered by category                             |
| GET     | /news/:id                     | n/a          | Returns details of a specific news by ID                      |
| POST    | /news                         | n/a          | Creates a new news item                                       |
| PUT     | /news/:id                     | n/a          | Updates the news item by ID                                   |
| DELETE  | /news/:id                     | n/a          | Deletes a specific news by ID                                 |
| GET     | /comments?newId={id}             | n/a          | Returns comments associated with a specific news ID           |
| GET     | /comments                     | n/a          | Returns all comments                                          |
| DELETE  | /comments/:id                 | n/a          | Deletes a specific comment by ID                              |


## Links

### Collaborators

- **Ana Badolato**

  - [Ana's GitHub](https://github.com/ana-badolato)

- **Javier Catral**
  - [Javier's GitHub](https://github.com/Javitocatral?tab=repositories)

---

### Project

- **Repository Link Client**: [Collective Pulse Frontend](https://github.com/ana-badolato/Collective-Pulse)
- **Repository Link Server**: [Collective Pulse Backend](https://github.com/ana-badolato/Collective-Pulse-BackEnd)

- **Deploy Link**: [Collective Pulse Deployment](https://collective-pulse.netlify.app/)

---

### Trello

- **Trello Board**: [Trello Link](https://trello.com)

---

### Slides

- **Slides Link**: [Collective Pulse Slides](https://docs.google.com/presentation/d/1mBY3Z9UhpIS8xq-L3wlFmV44iDgzPS0LzuFDQIpFIS8/edit?usp=sharing)