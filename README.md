# AdvertBoard
## Description
AdvertBoard is a web-based application that allows user to view adverts made by other users. Adverts are divided into categories such as cars, motocycles and many more. Only users with an account can publish their own adverts. The service allows users to follow each other and receive push notifications (in the browser) once one of the following users publishes an advert.
AdvertBoard uses artifical inteligence to follow users actions and suggest recommended adverts that users may be interested in.

## Additional Information
This repository contains only front-end part of the application written with the user of React.js. Back-end written in Spring is located here:

https://github.com/pp-pwr/AdvertBoard-Backend.


## Usage

Starting the server (default address: http://localhost:3000)
### `npm start`

Starting tests
### `npm test`

Building production build
### `npm run build`

Server address is defined in 'src/contants/index.js' as 'API_BASE_URL' variable. Default is
### `https://pwr-advert-board-backend.herokuapp.com/api`

## Custom advert, and report generator
Code for generators is located in `/generator` directory. Both generators were written in Python.

Advert generator code snippet:
```python
def add_advert(advert, auth_token):        
    path = SERVER_URL + 'advert/add'
    hed = {"authorization": "Bearer " + auth_token}

    data = {
        "title": advert.title,
        "description": advert.description,
        "tags": advert.tags,
        "additionalInfo": json.dumps(advert.additionalInfo),
        "category": advert.category
    }

    files = {
        "imageFile": advert.image.getvalue()
    }

    print(f"Sending request...")
    response = requests.post(path, data=data, files=files, headers=hed)
    print(f"Result: {response} Response: {response.text}")

def create_advert(main_category, random_category, random_model, year, infoList, keywords, all_categories):
    def _get_search_params(queryBody):
        _search_params = {'q': queryBody, 'num': 1, 'safe': 'medium',
        'fileType': 'png', 'imgType': 'photo', 'imgSize': 'large',
        'searchType': 'image'
        }
        return _search_params

    if random_category in all_categories.keys():
        true_category = all_categories[random_category]
    else:
        true_category = all_categories[main_category]
    
    description = f"[{main_category}] Nazwa: {random_category}, model {random_model}. Rok: {year}!."
    tags = [random_category, random_model, str(year)]
    category = true_category['id']
    category_infoList = true_category['infos']
    
    search_query = _get_search_params(f"{random_category} {random_model} {keywords}")

    gis.search(search_query)

    imageIO = BytesIO()

    if len(gis.results()) > 0:
        for image in gis.results():
            imageIO.seek(0)
            raw_image_data = image.get_raw_data()
            image.copy_to(imageIO, raw_image_data)
            imageIO.seek(0)
    
    additionalInfo = {}
    for key, value in infoList.items():
        if key in category_infoList.keys():
            additionalInfo[str(category_infoList[key]['id'])] = str(value)
    advert = Advert(f"{random_category} {random_model} - {year}", description, tags, category, imageIO, additionalInfo)

    return advert
```

Report generator code snippet
```python
def send_advert_raport(i):
    advert_id = r.randint(342, 561)
    random_description = r.sample(['Zły obrazek', 'Niestosowny opis', 'Brak opisu', 'Niestosowny obrazek', 'SPAM'], 1)[0]

    auth_token = r.sample(auth_tokens, 1)[0]

    hed = {"authorization": "Bearer " + auth_token,
            "Content-Type": "application/json"}
    

    data = {
        "advertId": advert_id,
        "comment": random_description
    }

    print(f"{i}. Sending request...")
    response = requests.post(server_url + 'advert/report', data=json.dumps(data), headers=hed)
    print(f"{i}. Result: {response} Response: {response.text}")

def send_user_raport(i):
    user_id = r.randint(1, 27)
    random_description = r.sample(['Niestosowny avatar', 'Multikonto', 'Fałszywe dane', 'Oszust', 'Troll', 'Bot'], 1)[0]    

    auth_token = r.sample(auth_tokens, 1)[0]

    hed = {"authorization": "Bearer " + auth_token,
            "Content-Type": "application/json"}

    data = {
        "profileId": user_id,
        "comment": random_description
    }

    print(f"{i}. Sending request...")
    response = requests.post(server_url + 'user/report', data=json.dumps(data), headers=hed)
    print(f"{i}. Result: {response} Response: {response.text}")
```


## Functionalities (Screenshots)

### Main page view
![alt Ogloszenia](https://imgur.com/oAKreKQ.png)

### Filtering and sorting results
![alt Sortowanie/Filtrowanie](https://imgur.com/dG9fB8k.png)

### Recommended adverts
![alt Ogloszenia Promowane](https://imgur.com/JqesClJ.png)

### Nested categories
<div style='display: grid;grid-template-columns: 30% 30% 30%; justify-content: space-between;'>
    <img src='https://imgur.com/fIIJ2Eb.png' alt='cat' />
    <img src='https://imgur.com/ANP3wTN.png' alt='cat' />
    <img src='https://imgur.com/VdMIRdm.png' alt='cat' />
</div>

### Adding new advert, modyfing existing advert
![alt Formularz dodawania ogloszenia](https://imgur.com/kwFEQYe.png)

### Advert details page
![alt Strona ogloszenia](https://imgur.com/fbxWoDv.png)

### Profile page
![alt Strona użytkownika](https://imgur.com/OZnTUgk.png)

### Profile info with star ratings, reporting
<div style='text-align: center'>
    <img src='https://imgur.com/bUT8fl8.png' alt='prof' />
</div>

### Reporting advert
![alt Formularz zglaszania ogloszen](https://imgur.com/giXFLI1.png)

### Reporting user
![Zglaszanie użytkowników](https://imgur.com/NkRbLvL.png)

### Logging in (with working OAuth2)
![alt Formularz Logowania](https://imgur.com/bZvtGf6.png)

### Sign up (with working OAuth2)
![alt Formularz rejestracji](https://imgur.com/QxRsPu8.png)

### Verification by email
![alt Weryfikacja mailem](https://imgur.com/YkKfixh.png)

### User list
![alt Lista użytkowników](https://imgur.com/WwwR5cU.png)

### Admin panel - advert reports
![alt Panel administratora - zgloszenia](https://imgur.com/HPiLDSQ.png)

### Admin panel - banned adverts
![alt Panel administratora - zbanowani](https://imgur.com/S8nd67S.png)

### Admin panel - user reports
![alt Zgloszeni uzytkownicy](https://imgur.com/0LaRvSs.png)

### Admin panel - banned users
![alt Zbanowaniu użytkownicy](https://imgur.com/wUQST4u.png)

### Admin panel - statistics
![alt Statystyki dot. zgłoszeń](https://imgur.com/IkkHCe2.png)

### Modyfing profile info
![alt Uzupełnianie profilu](https://imgur.com/92XcXRE.png)

### Advert list auto-refresh
Unfortunately GitHub doesn't provide support for .webm (or any other video files) in Markdown files.

Link to the video: https://webm.red/aL5B

### Push notifications
![alt push]()
//TODO