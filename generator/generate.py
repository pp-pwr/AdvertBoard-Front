import random as r

from google_images_search import GoogleImagesSearch
gis = GoogleImagesSearch('AIzaSyDwK2EaBwJmE_P02g4fc_-SQqGuqQi7faI', '001165723274352521659:umzq0amicle')
import base64
from io import BytesIO
from PIL import Image
import requests
import json

class User:
    def __init__(self, email, password):
        self.email = email
        self.password = password

class Advert:
    def __init__(self, title, description, tags, category, imageIO, additionalInfo):
        self.title = title
        self.description = description
        self.tags = tags
        self.category = category
        self.image = imageIO
        #print(self.image["base64"])
        self.additionalInfo = {}

    def __str__(self):
        return f"[Title: {self.title}\n, Tags: {self.tags}\n, Description: {self.description}\n, Category: {self.category}\n, image: {str(self.image)}\n, Info: {self.additionalInfo}]"

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

correct_categories = {
    "Motoryzacja": 15,
    "Samochody osobowe": 16,
    "Samochody dostawcze": 17,
    "Motocykle i skutery": 18,
    "Opel": 42,
    "BMW": 43,
    "Volvo": 37,
    "Volkswagen": 38,
    "Lancia": 39,
    "Hyundai": 44,
    "Audi": 40,
    "Elektronika": 20,
    "Telefony komórkowe": 21,
    "Konsole": 22,
    "Tablety": 23,
    "Fotografia": 24,
    "Sprzęt AGD": 25,
    "Telewizory": 26,
    "Samsung": 45,
    "Huawei": 46,
    "LG": 47,
    "Motorola": 48,
    "Praca": 27,
    "Szukam pracy": 28,
    "Szukam pracownika": 29,
    "Zwierzęta": 30,
    "Rolnictwo": 31,
    "Sprzęt i hobby": 32,
    "Nieruchomości": 33,
    "Oddam": 34,
    "Zamienię": 35,
    "Moda": 36,
    "Volkswagen - Dostawcze": 49,
    "Iveco - Dostawcze": 50,
    "Fiat - Dostawcze": 51,
    "Kawasaki": 52,
    "Honda": 53
}

base_url="http://pwr-advert-board-backend.herokuapp.com/api/advert/add"

auth_token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMSIsImlhdCI6MTU1OTA1MjA0MSwiZXhwIjoxNTU5OTE2MDQxfQ.lZWE5AbfUTdJjZvuhW_S75skz1uza5CxGn2ZWqWQo_rFT_a8sn2ni-mP2t5bsQPYKUhn1hcu4dwqfbCVej2MfQ'
hed = {"authorization": "Bearer " + auth_token}

def get_search_params(queryBody):
    _search_params = {
        'q': queryBody,
        'num': 1,
        'safe': 'medium',
        'fileType': 'png',
        'imgType': 'photo',
        'imgSize': 'medium',
        'searchType': 'image'
    }

    return _search_params

def generate_cars():
    manufacturers = ['Opel', 'BMW', 'Mercedes', 'Lancia', 'Volvo', 'Volkswagen', 'Audi', 'Hyundai']
    cat = "Samochody osobowe"
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

    for i in range(100):
        random_manufacturer = r.choice(manufacturers)
        random_model = r.choice(models[random_manufacturer])
        random_year = r.randint(1990, 2019)
        description = f"[{cat}] Samochód marki {random_manufacturer}, model {random_model}. Rok produkcji {random_year}!."
        
        if random_manufacturer in correct_categories.keys():
            category = correct_categories[random_manufacturer]
        else:
            category = correct_categories[cat]
        
        tags = [random_manufacturer, random_model, str(random_year), str(cat)]

        search_query = get_search_params(f"{random_manufacturer} {random_model} car")
        
        gis.search(search_query)

        imageIO = BytesIO()

        if len(gis.results()) > 0:
            
            for image in gis.results():
                imageIO.seek(0)

                raw_image_data = image.get_raw_data()

                image.copy_to(imageIO, raw_image_data)

                imageIO.seek(0)
            
            additionalInfo = {
                "Cena": r.randint(5000, 35000),
                "Moc (KM)": r.randint(80, 240),
                "Pojemność silnika (cm3)": r.sample([1200, 1400, 1600, 1800, 2000, 2700, 3400], 1)[0],
                "Model": random_model,
                "Marka": random_manufacturer,
                "Rok produkcji": random_year,
                "Poprzedni właściciele": r.randint(0, 5),
                "Wyposażenie": "Kierownica, Koła, Siedzenia, Klimatyzacja",
                "Spalanie": ("%.2fl/100km" % (r.uniform(6.7, 18.2)))
            }

            new_additional = additionalInfo
            
            advert = Advert(f"{random_manufacturer} {random_model} - {random_year}", description, tags, category, imageIO, new_additional)

            #print(f"Adres: {base_url}\n")
            #print(advert.toJSON() + "\n")
                
            data = {
                "title": advert.title,
                "description": advert.description,
                "tags": advert.tags,
                "additionalInfo": json.dumps(advert.additionalInfo),
                "category": advert.category
            }

            files = {
                "imageFile": imageIO.getvalue()
            }

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")
            # print(response.content)
            #print(response.json())


def generate_phones():
    manufacturers = ['Samsung', 'Huawei', 'LG', 'Motorola']
    cat = "Telefony komórkowe"
    models = {
        "Samsung": ["Note 9", "S10", "S10+", "S9", "S9+"],
        "Huawei": ["Mate 20", "P30 Pro", "P30 Lite", "P30"],
        "LG": ["V50 ThinQ", "V30", "G7", "V35 ThinQ"],
        "Motorola": ["Moto G7 Plus", "Moto G7", "Moto G7 Power", "Moto Z3", "Moto G6"]
    }

    for i in range(250):
        random_manufacturer = r.choice(manufacturers)
        random_model = r.choice(models[random_manufacturer])
        random_year = r.randint(2017, 2019)
        description = f"[{cat}] Telefon marki {random_manufacturer}, model {random_model}. Rok produkcji {random_year}!."
        
        if random_manufacturer in correct_categories.keys():
            category = correct_categories[random_manufacturer]
        else:
            category = correct_categories[cat]
        
        tags = [random_manufacturer, random_model, str(random_year), str(cat)]

        search_query = get_search_params(f"{random_manufacturer} {random_model} phone")
        
        gis.search(search_query)

        imageIO = BytesIO()

        if len(gis.results()) > 0:
            for image in gis.results():
                imageIO.seek(0)

                raw_image_data = image.get_raw_data()

                image.copy_to(imageIO, raw_image_data)

                imageIO.seek(0)

            additionalInfo = {
                "Cena": r.randint(100, 5000)
            }

            print(additionalInfo)

            advert = Advert(f"{random_manufacturer} {random_model} - {random_year}", description, tags, category, imageIO, additionalInfo)

            #print(f"Adres: {base_url}\n")
            #print(advert.toJSON() + "\n")
                
            data = {
                "title": advert.title,
                "description": advert.description,
                "tags": advert.tags,
                "additionalInfo": advert.additionalInfo,
                "category": advert.category
            }

            files = {
                "imageFile": imageIO.getvalue()
            }

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")


def generate_bikes():
    manufacturers = ['Kawasaki', 'Honda']
    cat = "Motocykle i skutery"
    models = {
        "Kawasaki": ["Ninja 300", "Ninja H2R", "Ninja ZX-10R", "Z900", "Z250"],
        "Honda": ["Active 5G", "CB Shine", "Dio", "Activa", "CB Hornet", "CB Unicorn 160"],
    }

    for i in range(250):
        random_manufacturer = r.choice(manufacturers)
        random_model = r.choice(models[random_manufacturer])
        random_year = r.randint(2017, 2019)
        description = f"[{cat}] Telefon marki {random_manufacturer}, model {random_model}. Rok produkcji {random_year}!."
        
        if random_manufacturer in correct_categories.keys():
            category = correct_categories[random_manufacturer]
        else:
            category = correct_categories[cat]
        
        tags = [random_manufacturer, random_model, str(random_year), str(cat)]

        search_query = get_search_params(f"{random_manufacturer} {random_model} bike photo")
        
        gis.search(search_query)

        imageIO = BytesIO()

        if len(gis.results()) > 0:
            for image in gis.results():
                imageIO.seek(0)

                raw_image_data = image.get_raw_data()

                image.copy_to(imageIO, raw_image_data)

                imageIO.seek(0)

            additionalInfo = {
                "Cena": r.randint(100, 5000)
            }

            print(additionalInfo)

            advert = Advert(f"{random_manufacturer} {random_model} - {random_year}", description, tags, category, imageIO, additionalInfo)

            #print(f"Adres: {base_url}\n")
            #print(advert.toJSON() + "\n")
                
            data = {
                "title": advert.title,
                "description": advert.description,
                "tags": advert.tags,
                "additionalInfo": advert.additionalInfo,
                "category": advert.category
            }

            files = {
                "imageFile": imageIO.getvalue()
            }

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")

def generate_utility_cars():
    manufacturers = ['Volkswagen - Dostawcze', 'Fiat - Dostawcze', 'Iveco - Dostawcze']
    cat = "Samochody dostawcze"
    models = {
        "Volkswagen - Dostawcze": ["Transporter T4", "Crafter", "T5", "Caddy", "Transporter T5"],
        "Fiat - Dostawcze": ["Ducato", "Talento", "Fiorino Cargo"],
        "Iveco - Dostawcze": ["Daily III", "Daily V", "Daily VI", "Daily IV"],
    }

    for i in range(100):
        random_manufacturer = r.choice(manufacturers)
        random_model = r.choice(models[random_manufacturer])
        random_year = r.randint(1990, 2019)
        description = f"[{cat}] Samochód marki {random_manufacturer}, model {random_model}. Rok produkcji {random_year}!."
        
        if random_manufacturer in correct_categories.keys():
            category = correct_categories[random_manufacturer]
        else:
            category = correct_categories[cat]
        
        tags = [random_manufacturer, random_model, str(random_year), str(cat)]

        search_query = get_search_params(f"{random_manufacturer[:-12]} {random_model} car")
        
        gis.search(search_query)

        imageIO = BytesIO()

        if len(gis.results()) > 0:
            
            for image in gis.results():
                imageIO.seek(0)

                raw_image_data = image.get_raw_data()

                image.copy_to(imageIO, raw_image_data)

                imageIO.seek(0)
            
            additionalInfo = {
                "Cena": r.randint(5000, 35000),
                "Moc (KM)": r.randint(80, 240),
                "Pojemność silnika (cm3)": r.sample([1200, 1400, 1600, 1800, 2000, 2700, 3400], 1)[0],
                "Model": random_model,
                "Marka": random_manufacturer,
                "Rok produkcji": random_year,
                "Poprzedni właściciele": r.randint(0, 5),
                "Wyposażenie": "Kierownica, Koła, Siedzenia, Klimatyzacja",
                "Spalanie": ("%.2fl/100km" % (r.uniform(6.7, 18.2)))
            }

            new_additional = additionalInfo
            
            advert = Advert(f"{random_manufacturer[:-12]} {random_model} - {random_year}", description, tags, category, imageIO, new_additional)

            #print(f"Adres: {base_url}\n")
            #print(advert.toJSON() + "\n")
                
            data = {
                "title": advert.title,
                "description": advert.description,
                "tags": advert.tags,
                "additionalInfo": json.dumps(advert.additionalInfo),
                "category": advert.category
            }

            files = {
                "imageFile": imageIO.getvalue()
            }

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")
            # print(response.content)
            #print(response.json())

def generate_animals():
    manufacturers = ['Kot', 'Pies', 'Koń']
    cat = "Zwierzęta"
    models = {
        "Kot": ["Ashera", "Cymric", "Sokoke", "Manx", "Toyger"],
        "Pies": ["Bulldog", "Labrador Retriever", "Poodle", "Greyhound", "Pug"],
        "Koń": ["Appaloosa", "arabski", "Albino", "Falabella"]
    }

    for i in range(100):
        random_manufacturer = r.choice(manufacturers)
        random_model = r.choice(models[random_manufacturer])
        random_year = r.randint(1990, 2019)
        description = f"[{cat}] {random_manufacturer}, Rasa: {random_model}."
        
        category = correct_categories[cat]
        
        tags = [random_manufacturer, random_model, str(random_year), str(cat)]

        search_query = get_search_params(f"{random_manufacturer} {random_model} photo")
        
        gis.search(search_query)

        imageIO = BytesIO()

        if len(gis.results()) > 0:
            
            for image in gis.results():
                imageIO.seek(0)

                raw_image_data = image.get_raw_data()

                image.copy_to(imageIO, raw_image_data)

                imageIO.seek(0)
            
            additionalInfo = {
            }

            new_additional = additionalInfo
            
            advert = Advert(f"{random_manufacturer} {random_model}", description, tags, category, imageIO, new_additional)

            #print(f"Adres: {base_url}\n")
            #print(advert.toJSON() + "\n")
                
            data = {
                "title": advert.title,
                "description": advert.description,
                "tags": advert.tags,
                "additionalInfo": json.dumps(advert.additionalInfo),
                "category": advert.category
            }

            files = {
                "imageFile": imageIO.getvalue()
            }

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")
            # print(response.content)
            #print(response.json())

def generate_clothes():
    manufacturers = ['Suknie', 'Spodnie', 'Buty']
    cat = "Zamienię"
    models = {
        "Spodnie": ["Wrangler", "Toomy Jeans", "Pepe Jeans", "Mustang", "LTB", "Lee"],
        "Suknie": ["Ślubne"],
        "Buty": ["Nike", "Adidas", "Asics", "Reebook", "Fila"],
        "Kot": ["Ashera", "Cymric", "Sokoke", "Manx", "Toyger"],
        "Pies": ["Bulldog", "Labrador Retriever", "Poodle", "Greyhound", "Pug"],
        "Koń": ["Appaloosa", "arabski", "Albino", "Falabella"]
    }

    for i in range(100):
        random_manufacturer = r.choice(manufacturers)
        random_model = r.choice(models[random_manufacturer])
        random_year = r.randint(1990, 2019)
        description = f"[{cat}] {random_manufacturer}, Rodzaj: {random_model}."
        
        category = correct_categories[cat]
        
        tags = [random_manufacturer, random_model, str(random_year), str(cat)]

        search_query = get_search_params(f"{random_manufacturer} {random_model}")
        print(search_query)
        gis.search(search_query)

        imageIO = BytesIO()

        if len(gis.results()) > 0:
            
            for image in gis.results():
                imageIO.seek(0)

                raw_image_data = image.get_raw_data()

                image.copy_to(imageIO, raw_image_data)

                imageIO.seek(0)
            
            additionalInfo = {
            }

            new_additional = additionalInfo
            
            advert = Advert(f"{random_manufacturer} {random_model}", description, tags, category, imageIO, new_additional)

            #print(f"Adres: {base_url}\n")
            #print(advert.toJSON() + "\n")
                
            data = {
                "title": advert.title,
                "description": advert.description,
                "tags": advert.tags,
                "additionalInfo": json.dumps(advert.additionalInfo),
                "category": advert.category
            }

            files = {
                "imageFile": imageIO.getvalue()
            }

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")
            # print(response.content)
            #print(response.json())

def generate_houses():
    manufacturers = ['Dom', 'Mieszkanie', 'Blok', 'Magazyn']
    cat = "Nieruchomości"
    models = {
        'Dom': ['Jednorodzinny', 'Bliźniaki', 'Villa'],
        'Mieszkanie': ['Penthouse', 'Trzypokojowe', 'Dwupokojowe', 'Kawalerka'],
        'Magazyn': ['Duży', 'Średni'],
        'Blok': ['Nowy', 'Stary']
    }

    for i in range(100):
        random_manufacturer = r.choice(manufacturers)
        random_model = r.choice(models[random_manufacturer])
        random_year = r.randint(1990, 2019)
        description = f"[{cat}] {random_manufacturer}, Rodzaj: {random_model}."
        
        category = correct_categories[cat]
        
        tags = [random_manufacturer, random_model, str(random_year), str(cat)]

        search_query = get_search_params(f"{random_manufacturer} {random_model}")
        print(search_query)
        gis.search(search_query)

        imageIO = BytesIO()

        if len(gis.results()) > 0:
            
            for image in gis.results():
                imageIO.seek(0)

                raw_image_data = image.get_raw_data()

                image.copy_to(imageIO, raw_image_data)

                imageIO.seek(0)
            
            additionalInfo = {
            }

            new_additional = additionalInfo
            
            advert = Advert(f"{random_manufacturer} {random_model}", description, tags, category, imageIO, new_additional)

            #print(f"Adres: {base_url}\n")
            #print(advert.toJSON() + "\n")
                
            data = {
                "title": advert.title,
                "description": advert.description,
                "tags": advert.tags,
                "additionalInfo": json.dumps(advert.additionalInfo),
                "category": advert.category
            }

            files = {
                "imageFile": imageIO.getvalue()
            }

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")
            # print(response.content)
            #print(response.json())

generate_houses()