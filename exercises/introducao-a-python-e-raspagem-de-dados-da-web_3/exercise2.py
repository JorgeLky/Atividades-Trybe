import requests
import json

users_request = requests.get("https://api.github.com/users").text
users_json = json.loads(users_request)
for user in users_json:
    print(user["login"], user["url"])