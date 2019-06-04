import random as r

from google_images_search import GoogleImagesSearch
gis = GoogleImagesSearch('AIzaSyDwK2EaBwJmE_P02g4fc_-SQqGuqQi7faI', '001165723274352521659:umzq0amicle')
from io import BytesIO
import requests
import json

SERVER_URL = 'http://pwr-advert-board-backend.herokuapp.com/api/'

class Advert:
    def __init__(self, title, description, tags, category, imageIO, additionalInfo):
        self.title = title
        self.description = description
        self.tags = tags
        self.category = category
        self.image = imageIO
        self.additionalInfo = additionalInfo

    def __str__(self):
        return f"[Title: {self.title}\n, Tags: {self.tags}\n, Description: {self.description}\n, Category: {self.category}\n, image: {str(self.image)}\n, Info: {self.additionalInfo}]"

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

def get_random_auth_key():
    auth_keys = [
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMCIsImlhdCI6MTU1OTYzMzA3NiwiZXhwIjoxNTYwNDk3MDc2fQ.0-37ZIJEYItkap4FjUTNxDIa__7MjfeWijZQ6WscTqP_BDDBPnioybHt9VeoXWbqVKl_BuKtgwJUeNfm3eoXrQ',
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMSIsImlhdCI6MTU1OTYzMzA4OCwiZXhwIjoxNTYwNDk3MDg4fQ.oXnHEv7LxV39cd1onFsWxmwx-n0jmTL0sbIWisw-9jpXMDM7X67yJhJNh46QnccLXh97XILZGdJTpcluWv3Z5g',
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMiIsImlhdCI6MTU1OTYzMzEwMywiZXhwIjoxNTYwNDk3MTAzfQ.UwpatFMjnpNcsYh1awQs2ueLPEkb599kk_eGFQh5VBPapMnxk46aMyxi8B2bJqq_3f3wxfENJHgP9DxmG64r8w',
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMyIsImlhdCI6MTU1OTYzMzExNywiZXhwIjoxNTYwNDk3MTE3fQ.veA0-X4GIakRXm43d0acIG5VZdeU1sYFQsxKhzkKiXf1LqmOxux_Fj1xspuDEm4SgTdtJsbDFhDMNg4O7WMhaA',
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNCIsImlhdCI6MTU1OTYzMzEzMCwiZXhwIjoxNTYwNDk3MTMwfQ.8hViYWhGM_AQNzpwPqh7YSpCkjuSjOVwicPia5FRMbNB6N7pYd1hb6xxwEmQPIy2hCLlw4AP0yZJR4WH07az4g',
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNSIsImlhdCI6MTU1OTYzMzE1MSwiZXhwIjoxNTYwNDk3MTUxfQ.b903zazPbhoYJDE5Ib0mNOnxgILee_H_EJ9lSVUWMjZS4f9DRxItJ270o62uc96LNbcQpgyeYqYxOqKIYCYqMA'
    ]

    return r.choice(auth_keys)

def flatten(rootCategory):
    output = {}

    def append_children(categories):
        if len(categories) < 1:
            return None

        for cat in categories:
            infos = {}

            for info in cat['infoList']:
                infos[info['name']] = {
                    "id": info['id'],
                    "type": info['type']
                }

            output[cat['name']] = {
                "id": cat['id'],
                "infos": infos
            }
            append_children(cat['subcategories'])

    output['root'] = {
        "id": rootCategory['id'],
        "infos": rootCategory['infoList']
    }

    append_children(rootCategory['subcategories'])

    return output


def load_categories():
    print(f"Loading categories...")
    path = SERVER_URL + 'category/all'
    response = requests.get(path)
    y = json.loads(response.text)
    return flatten(y)

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
        'fileType': 'png', 'imgType': 'photo', 'imgSize': 'medium',
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

def randomize_search(categories, models):
    random_category = r.choice(categories)
    random_model = r.choice(models[random_category])
    random_year = r.randint(1990, 2019)

    return random_category, random_model, random_year

def generate_cars(n):
    cats = load_categories()
    main_cat = "Samochody osobowe"
    categories = ['Opel', 'BMW', 'Mercedes', 'Lancia', 'Volvo', 'Volkswagen', 'Audi', 'Hyundai']
    models = {
        "Opel": ["Corsa A", "Corsa B", "Tigra", "Corsa C", "Astra G", "Astra H", "Astra J", "Vectra C", "Insignia A"],
        "BMW": ["E85", "E83", "E70 X5", "E71 X6", "E46", "E39"],
        "Mercedes": ["SLR McLaren", "W203 C-Class", "W211 E-Class"],
        "Lancia": ["037", "Fulvia", "Delta HF", "Aurelia"],
        "Volvo": ["V40 I", "V40 II", "S40", "S80", "S90", "S60", "XC40", "XC90"],
        "Volkswagen": ["Golf", "Sharan", "Polo", "Jetta", "Passat"],
        "Audi": ["A3", "A4", "A8"],
        "Hyundai": ["i30", "Getz"]
    }

    for i in range(n):
        cat, model, year = randomize_search(categories, models)

        infoList = {
            "Cena": r.randint(5000, 35000),
            "Moc (KM)": r.randint(80, 240),
            "Pojemność silnika (cm3)": r.sample([1200, 1400, 1600, 1800, 2000, 2700, 3400], 1)[0],
            "Model": cat,
            "Marka": model,
            "Rok produkcji": year,
            "Poprzedni właściciele": r.randint(0, 5),
            "Wyposażenie": "Kierownica, Koła, Siedzenia, Klimatyzacja",
            "Spalanie": ("%.2fl/100km" % (r.uniform(6.7, 18.2)))
        }

        advert = create_advert(main_cat, cat, model, year, infoList, 'cars', cats)
        
        add_advert(advert, get_random_auth_key())

        print(f'Car nr {i} finished!')

def generate_phones(n):
    cats = load_categories()
    main_cat = "Telefony komórkowe"
    categories = ['Samsung', 'Huawei', 'LG', 'Motorola']
    models = {
        "Samsung": ["Note 9", "S10", "S10+", "S9", "S9+"],
        "Huawei": ["Mate 20", "P30 Pro", "P30 Lite", "P30"],
        "LG": ["V50 ThinQ", "V30", "G7", "V35 ThinQ"],
        "Motorola": ["Moto G7 Plus", "Moto G7", "Moto G7 Power", "Moto Z3", "Moto G6"]
    }

    for i in range(n):
        cat, model, year = randomize_search(categories, models)

        infoList = {
            "Cena": r.randint(5000, 35000),
            "Model": cat,
            "Marka": model,
            "System operacyjny": r.choice(['Android 4.0', 'Android 5.0', 'Android 6.0']),
            "Gwarancja (msc)": r.choice([0, 12, 24, 36, 48]),
            "Dodatkowe informacje": "Ekran dotykowy"
        }

        advert = create_advert(main_cat, cat, model, year, infoList, 'phones', cats)
        
        add_advert(advert, get_random_auth_key())

        print(f'Phone nr {i + 1} finished!')

def generate_bikes(n):
    cats = load_categories()
    main_cat = "Motocykle i skutery"
    categories = ['Kawasaki', 'Honda']
    models = {
        "Kawasaki": ["Ninja 300", "Ninja H2R", "Ninja ZX-10R", "Z900", "Z250"],
        "Honda": ["Active 5G", "CB Shine", "Dio", "Activa", "CB Hornet", "CB Unicorn 160"],
    }

    for i in range(n):
        cat, model, year = randomize_search(categories, models)

        infoList = {
            "Cena": r.randint(5000, 35000),
            "Moc (KM)": r.randint(80, 240),
            "Pojemność silnika (cm3)": r.sample([1200, 1400, 1600, 1800, 2000, 2700, 3400], 1)[0],
            "Model": cat,
            "Marka": model,
            "Rok produkcji": year,
            "Poprzedni właściciele": r.randint(0, 5),
            "Wyposażenie": "Kierownica, Koła, Siedzenia, Klimatyzacja",
            "Spalanie": ("%.2fl/100km" % (r.uniform(6.7, 18.2)))
        }

        advert = create_advert(main_cat, cat, model, year, infoList, 'bikes', cats)
        
        add_advert(advert, get_random_auth_key())

        print(f'Bike nr {i + 1} finished!')

def generate_utility_cars(n):
    cats = load_categories()
    main_cat = "Samochody dostawcze"
    categories = manufacturers = ['Volkswagen', 'Fiat', 'Iveco']
    models = {
        "Volkswagen": ["Transporter T4", "Crafter", "T5", "Caddy", "Transporter T5"],
        "Fiat": ["Ducato", "Talento", "Fiorino Cargo"],
        "Iveco": ["Daily III", "Daily V", "Daily VI", "Daily IV"],
    }

    for i in range(n):
        cat, model, year = randomize_search(categories, models)

        infoList = {
            "Cena": r.randint(5000, 35000),
            "Moc (KM)": r.randint(80, 240),
            "Pojemność silnika (cm3)": r.sample([1200, 1400, 1600, 1800, 2000, 2700, 3400], 1)[0],
            "Model": cat,
            "Marka": model,
            "Rok produkcji": year,
            "Poprzedni właściciele": r.randint(0, 5),
            "Wyposażenie": "Kierownica, Koła, Siedzenia, Klimatyzacja",
            "Spalanie": ("%.2fl/100km" % (r.uniform(6.7, 18.2)))
        }

        advert = create_advert(main_cat, cat, model, year, infoList, 'cars', cats)
        
        add_advert(advert, get_random_auth_key())

        print(f'Utility car nr {i + 1} finished!')

def generate_animals(n):
    cats = load_categories()
    main_cat = "Zwierzęta"
    categories = ['Kot', 'Pies', 'Koń']
    models = {
        "Kot": ["Ashera", "Cymric", "Sokoke", "Manx", "Toyger"],
        "Pies": ["Bulldog", "Labrador Retriever", "Poodle", "Greyhound", "Pug"],
        "Koń": ["Appaloosa", "arabski", "Albino", "Falabella"]
    }

    for i in range(n):
        cat, model, year = randomize_search(categories, models)

        infoList = {
            "Rasa": cat,
            "Wiek (lata)": r.randint(1, 15)
        }

        advert = create_advert(main_cat, cat, model, year, infoList, '', cats)
        
        add_advert(advert, get_random_auth_key())

        print(f'Animal nr {i + 1} finished!')

def generate_clothes(n):
    cats = load_categories()
    main_cats = ["Moda", "Zamienię", "Oddam"]
    categories = ['Suknie', 'Spodnie', 'Buty']
    models = {
        "Spodnie": ["Wrangler", "Toomy Jeans", "Pepe Jeans", "Mustang", "LTB", "Lee"],
        "Suknie": ["Ślubne"],
        "Buty": ["Nike", "Adidas", "Asics", "Reebook", "Fila"]
    }

    for i in range(n):
        cat, model, year = randomize_search(categories, models)
        main_cat = r.choice(main_cats)
        infoList = {}

        advert = create_advert(main_cat, cat, model, year, infoList, '', cats)
        
        add_advert(advert, get_random_auth_key())

        print(f'Clothing nr {i + 1} finished!')

def generate_buildings(n):
    cats = load_categories()
    main_cats = ["Nieruchomości"]
    categories = ['Dom', 'Mieszkanie', 'Blok', 'Magazyn']
    models = {
        'Dom': ['Jednorodzinny', 'Bliźniaki', 'Villa'],
        'Mieszkanie': ['Penthouse', 'Trzypokojowe', 'Dwupokojowe', 'Kawalerka'],
        'Magazyn': ['Duży', 'Średni'],
        'Blok': ['Nowy', 'Stary']
    }

    for i in range(n):
        cat, model, year = randomize_search(categories, models)
        main_cat = r.choice(main_cats)
        infoList = {}

        advert = create_advert(main_cat, cat, model, year, infoList, '', cats)
        
        add_advert(advert, get_random_auth_key())

        print(f'Building nr {i + 1} finished!')


generate_cars(40)