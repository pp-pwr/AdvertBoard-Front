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
    "Motoryzacja": 1,
    "Samochody": 2,
    "Opel": 9,
    "BMW": 6,
    "Volvo": 7,
    "Volkswagen": 10,
    "Lancia": 8,
    "Hyundai": 11,
    "Audi": 16,
    "Elektronika": 3,
    "Smartfony": 4,
    "Samsung": 12,
    "Huawei": 14,
    "LG": 13,
    "Motorola": 15 
}

base_url="http://localhost:8080/api/advert/add"

auth_token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU3MjQyODY4LCJleHAiOjE1NTgxMDY4Njh9.lUZxsuvs_Eh1FBSQ6k5sufcUdj1aFom9aPSU_-AMvXgdzFQTfzU8R_8cEaKTXC0ykHfAYRyvZ7aLv0ur4wkO4Q'
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
    cat = "Samochody"
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
                "cena": r.randint(5000, 35000)
            }

            if random_manufacturer == "Audi":
                additionalInfo["model"] = random_model

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
            if random_manufacturer == "Audi":
                data["additionalInfo"] = random_model

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")
            # print(response.content)
            #print(response.json())


def generate_phones():
    manufacturers = ['Samsung', 'Huawei', 'LG', 'Motorola']
    cat = "Smartfony"
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
                "cena": r.randint(100, 5000)
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
            if random_manufacturer == "Audi":
                data["additionalIn"]

            print(f"{i}. Sending request...")
            response = requests.post(base_url, data=data, files=files, headers=hed)
            print(f"{i}. Result: {response} Response: {response.text}")


def generate_bikes():
    pass


generate_cars()