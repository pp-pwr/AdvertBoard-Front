import random as r
import requests
import json

server_url = 'http://pwr-advert-board-backend.herokuapp.com/api/'
auth_tokens = [
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMSIsImlhdCI6MTU1OTA1MjA0MSwiZXhwIjoxNTU5OTE2MDQxfQ.lZWE5AbfUTdJjZvuhW_S75skz1uza5CxGn2ZWqWQo_rFT_a8sn2ni-mP2t5bsQPYKUhn1hcu4dwqfbCVej2MfQ',
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMyIsImlhdCI6MTU1OTA1OTM3OCwiZXhwIjoxNTU5OTIzMzc4fQ.62hSyNJ3vzZ6w_JrZku9DVpt2x90q3SUGaGzSrAKr-5txown-jqjZ443zRXBuBfADXjHnrbPf_rvW2NuoFxX7w',
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNCIsImlhdCI6MTU1OTA1OTM5MCwiZXhwIjoxNTU5OTIzMzkwfQ.6BYMbq-yDohElJmFsR1MuXHY0CO1_Juvaln9bBCeWl1YsX8pG4rPnv-bTvS90xCUMiNW0oKdd37dO-QNLByMhw',
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsImlhdCI6MTU1OTA1OTQwMiwiZXhwIjoxNTU5OTIzNDAyfQ.c_8S2Igpk42yorUaB2VNDbAfgtUVC9WRSinAri5Ff0f797K6nRWYLcOeY_Xc0mu4zzJrcYuNj6ZrVBcpkg2a2A'
]
#auth_token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMSIsImlhdCI6MTU1OTA1MjA0MSwiZXhwIjoxNTU5OTE2MDQxfQ.lZWE5AbfUTdJjZvuhW_S75skz1uza5CxGn2ZWqWQo_rFT_a8sn2ni-mP2t5bsQPYKUhn1hcu4dwqfbCVej2MfQ'

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

for i in range(200):
    send_advert_raport(i)

    if(i > 150):
        send_user_raport(i)


